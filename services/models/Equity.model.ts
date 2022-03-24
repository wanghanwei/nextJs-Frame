/* eslint-disable no-undef */
/* eslint-disable camelcase */
// 该文档由脚本自动生成，请勿修改
// 现金价值
import Fetcher from "../Fetcher";

const fetch = new Fetcher();

/**
 * 获取年金权益
 * {@link https://undefined/api/doc.html#/2.X版本/现金价值/clearCacheUsingPOST}.
 */
interface clearCacheUsingPOSTRef {
  request: (params?: {}, options?: any) => Promise<any>;
}

export const clearCacheUsingPOST: clearCacheUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/equity/cache/clear",
        method: "post",
        msg: "请求[获取年金权益]出错",
      },
    });
  },
};

/**
 * 获取年金权益
 * {@link https://undefined/api/doc.html#/2.X版本/现金价值/getEquityAnnuityUsingPOST}.
 */
interface getEquityAnnuityUsingPOSTRef {
  request: (
    params?: {
      // request
      data?: ServiceRef.EquityCalcRequest;
    },
    options?: any
  ) => Promise<any>;
}

export const getEquityAnnuityUsingPOST: getEquityAnnuityUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/equity/calc/annuity",
        method: "post",
        msg: "请求[获取年金权益]出错",
      },
    });
  },
};

/**
 * 获取教育金权益
 * {@link https://undefined/api/doc.html#/2.X版本/现金价值/getEquityCalcForEduUsingPOST}.
 */
interface getEquityCalcForEduUsingPOSTRef {
  request: (
    params?: {
      // request
      data?: ServiceRef.EquityCalcRequest;
    },
    options?: any
  ) => Promise<any>;
}

export const getEquityCalcForEduUsingPOST: getEquityCalcForEduUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/equity/calc/edu",
        method: "post",
        msg: "请求[获取教育金权益]出错",
      },
    });
  },
};

/**
 * 获取新版利益演示数据
 * {@link https://undefined/api/doc.html#/2.X版本/现金价值/getPolicyEquityUsingPOST}.
 */
interface getPolicyEquityUsingPOSTRef {
  request: (
    params?: {
      // request
      data?: ServiceRef.CEquityRequest;
    },
    options?: any
  ) => Promise<any>;
}

export const getPolicyEquityUsingPOST: getPolicyEquityUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/equity/policy/query",
        method: "post",
        msg: "请求[获取新版利益演示数据]出错",
      },
    });
  },
};

/**
 * 获取现金价值演示表
 * {@link https://undefined/api/doc.html#/2.X版本/现金价值/getEquityForValueDemonUsingPOST}.
 */
interface getEquityForValueDemonUsingPOSTRef {
  request: (
    params?: {
      // request
      data?: ServiceRef.EquityCalcRequest;
    },
    options?: any
  ) => Promise<any>;
}

export const getEquityForValueDemonUsingPOST: getEquityForValueDemonUsingPOSTRef =
  {
    request: (params, options: any = {}) => {
      return fetch.fetch(params, {
        ...options,
        ...{
          url: "/api/equity/value/demon",
          method: "post",
          msg: "请求[获取现金价值演示表]出错",
        },
      });
    },
  };
