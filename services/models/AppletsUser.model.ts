/* eslint-disable no-undef */
/* eslint-disable camelcase */
// 该文档由脚本自动生成，请勿修改
// 公众号用户接口
import Fetcher from "../Fetcher";

const fetch = new Fetcher();

/**
 * 获取当前登录用户信息
 * {@link https://undefined/api/doc.html#/2.X版本/公众号用户接口/getUserUsingGET}.
 */
interface getUserUsingGETRef {
  request: (params?: {}, options?: any) => Promise<any>;
}

export const getUserUsingGET: getUserUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/user/get",
        method: "get",
        msg: "请求[获取当前登录用户信息]出错",
      },
    });
  },
};

/**
 * 根据openid获取用户信息，如果用户退出登录则重新生成登录态
 * {@link https://undefined/api/doc.html#/2.X版本/公众号用户接口/selectByOpenidUsingGET}.
 */
interface selectByOpenidUsingGETRef {
  request: (
    params?: {
      path: {
        // openid
        openid: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const selectByOpenidUsingGET: selectByOpenidUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/user/get-by-openid/{openid}",
        method: "get",
        msg: "请求[根据openid获取用户信息，如果用户退出登录则重新生成登录态]出错",
      },
    });
  },
};

/**
 * 用户授权登录
 * {@link https://undefined/api/doc.html#/2.X版本/公众号用户接口/loginOrRefreshUsingPOST}.
 */
interface loginOrRefreshUsingPOSTRef {
  request: (
    params?: {
      // userInfo
      data?: ServiceRef.AppletsUserInsert;
    },
    options?: any
  ) => Promise<any>;
}

export const loginOrRefreshUsingPOST: loginOrRefreshUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/user/login",
        method: "post",
        msg: "请求[用户授权登录]出错",
      },
    });
  },
};

/**
 * 退出登录
 * {@link https://undefined/api/doc.html#/2.X版本/公众号用户接口/logoutUsingGET}.
 */
interface logoutUsingGETRef {
  request: (params?: {}, options?: any) => Promise<any>;
}

export const logoutUsingGET: logoutUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/user/logout",
        method: "get",
        msg: "请求[退出登录]出错",
      },
    });
  },
};

/**
 * 重定向接口
 * {@link https://undefined/api/doc.html#/2.X版本/公众号用户接口/redirectUsingGET}.
 */
interface redirectUsingGETRef {
  request: (
    params?: {
      query?: {
        // token
        token?: string;
        // 重定向地址，支持相对路径和绝对路径
        url?: string;
      };

      // wallToken
      data?: ServiceRef.undefined;
    },
    options?: any
  ) => Promise<any>;
}

export const redirectUsingGET: redirectUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/user/redirect",
        method: "get",
        msg: "请求[重定向接口]出错",
      },
    });
  },
};
