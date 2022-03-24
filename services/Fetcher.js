const Logger = require('utils/logger.util');
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();
const logger = Logger.createLogger('[service][fetcher]');
const axios = require('axios').default;
const isServer = typeof window === 'undefined';
// 允许客户端透传的header
const AllowRequestHeaderKeys = ['cookie'];
// 允许透传回客户端的header
const AllowResponseHeaderKeys = ['set-cookie'];

const emptyFunction = () => {};

const responseDefaultObj = {
    httpStatus: 0,
    code: '0',
    data: null,
    msg: '',
    success: false,
};

const requestInterceptor = (config) => {
    config.params = config.params || {};
    if (config.method.toUpperCase() === 'GET') {
        config.params = {
            ...config.params,
            ...config.data,
        };
    }
    if (isServer) {
        config.baseURL = serverRuntimeConfig.baseURL;
    }
    config.requestTime = Date.now();
    logger.info(`request [${config.method}] ${config.baseURL}${config.url}`);
    logger.debug(`params [${JSON.stringify(config.params)}]`);
    logger.debug(`data [${JSON.stringify(config.data)}]`);
    return config;
};

const requestInterceptorError = (error) => {
    logger.error(error.toString());
    return Promise.reject(error);
};

const responseInterceptor = (response) => {
    const { headers } = response;
    if (isServer) {
        // 如果是服务端渲染，需要回写cookie到浏览器
        const CLSUtil = require('../libs/CLS.lib');
        if (headers) {
            CLSUtil.setResponseHeaders(headers, AllowResponseHeaderKeys);
            // 因为某些接口在node端调用需要依赖前一个接口的cookie值，所以把接口响应返回的cookie写入req中
            CLSUtil.setRequestHeaders(headers, AllowResponseHeaderKeys);
        }
    }
    // 默认返回的结构
    let responseObj = responseDefaultObj;
    if (response.status) {
        responseObj.httpStatus = response.status;
    }
    const start = response.config.requestTime;
    const now = Date.now();
    logger.info(`response time [${now - start}ms] ${response.config.url}`);
    if (!response.data || (response.data && !response.data.success)) {
        logger.warn(
            `request ${response.config.url} faild: ${JSON.stringify(response.data)}`
        );
    }
    // 返回的数据不是json
    if (typeof response.data !== 'object') {
        responseObj.msg = 'ERROR_EMPTY_BODY';
        return responseObj;
    }

    responseObj.code = response.data.code;
    responseObj.msg = response.data.msg;
    responseObj.success = response.data.success;
    responseObj.data = response.data.data;
    return responseObj;
};

// http请求失败
const responseInterceptorError = (error = {}) => {
    let responseObj = responseDefaultObj;
    responseObj.success = false;
    if (error && error.response) {
        responseObj.httpStatus = error.response.status;
    }
    if (error.request) {
        // logger.debug(error);
        logger.warn(`request ${error.request.path} faild: ${error.toString()}`);
    } else {
        logger.error(error);
    }
    if (
        error.message.includes('timeout') ||
        error.message.includes('Network Error')
    ) {
        responseObj.msg = 'ERROR_REQUEST_TIMEOUT';
        // error.data = {
        //   success: false,
        //   msg: 'ERROR_REQUEST_TIMEOUT',
        // };
    }
    responseObj.msg = 'ERROR_REQUEST_FAILD';
    // error.data = {
    //   success: false,
    //   msg: 'ERROR_REQUEST_FAILD',
    // };
    return responseObj;
};

// let singleton = null;

export default class Fetcher {
    constructor({
        requestHandle = null,
        requestErrorHandle = null,
        baseURL = '',
        // responseHandle,
        // responseErrorHandle,
    } = {}) {
        // if (singleton) {
        //   return singleton;
        // }
        const instance = axios.create({
            timeout: 90000,
            withCredentials: true,
            headers: { 'content-type': 'application/json;charset=utf-8' },
            // 覆盖掉外面的全局axios配置
            baseURL,
        });
        instance.interceptors.request.use(
            requestInterceptor,
            requestInterceptorError
        );
        if (
            typeof requestHandle === 'function' ||
            typeof requestErrorHandle === 'function'
        ) {
            instance.interceptors.request.use(
                requestHandle || emptyFunction,
                requestErrorHandle || emptyFunction
            );
        }

        instance.interceptors.response.use(
            responseInterceptor,
            responseInterceptorError
        );

        this.instance = instance;
    }

    fetch = (params, options) => {
        if (
            options.consumes &&
            options.consumes !== 'application/json;charset=utf-8'
        ) {
            if (!options.headers) {
                options.headers = {};
            }
            options.headers['content-type'] = options.consumes;
        }
        // 如果是服务端去CLS中获取调用链上设置的baseURL
        if (isServer) {
            const CLSUtil = require('../libs/CLS.lib');
            const serverRequestHeaders = CLSUtil.getRequestHeaders(
                AllowRequestHeaderKeys
            );
            options.headers = Object.assign(
                options.headers || {},
                serverRequestHeaders
            );
        }
        // 处理url中的参数
        if (params.path) {
            Object.keys(params.path).forEach((key) => {
                options.url = options.url.replace(`{${key}}`, params.path[key]);
            });
        }
        if (params.data) {
            options.data = params.data;
        }
        if (params.query) {
            options.params = params.query;
        }
        return this.instance.request(options);
    };
}