/* eslint-disable no-undef */
/* eslint-disable camelcase */
// 该文档由脚本自动生成，请勿修改
// 订单管理
import Fetcher from "../Fetcher";

const fetch = new Fetcher();

/**
 * 我的订单列表
 * {@link https://undefined/api/doc.html#/2.X版本/订单管理/selectInsureOrdersUsingGET}.
 */
interface selectInsureOrdersUsingGETRef {
  request: (
    params?: {
      query?: {
        // 当前页
        current?: number;
        // 查询起始值(后台使用,前端不用传)
        offset?: number;
        // 分页大小
        pageSize?: number;
        // 1待完成 2待支付 3已支付 4已失效 查询全部给四个状态
        statusList?: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const selectInsureOrdersUsingGET: selectInsureOrdersUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/order/insure-order",
        method: "get",
        msg: "请求[我的订单列表]出错",
      },
    });
  },
};

/**
 * 订单取消
 * {@link https://undefined/api/doc.html#/2.X版本/订单管理/cancelOrderUsingPUT}.
 */
interface cancelOrderUsingPUTRef {
  request: (
    params?: {
      path: {
        // encryptInsureNum
        encryptInsureNum: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const cancelOrderUsingPUT: cancelOrderUsingPUTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/order/order-cancel/{encryptInsureNum}",
        method: "put",
        msg: "请求[订单取消]出错",
      },
    });
  },
};

/**
 * 订单详情
 * {@link https://undefined/api/doc.html#/2.X版本/订单管理/orderDetailUsingGET}.
 */
interface orderDetailUsingGETRef {
  request: (
    params?: {
      query?: {
        // encryptInsureNum
        encryptInsureNum: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const orderDetailUsingGET: orderDetailUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/order/order-detail",
        method: "get",
        msg: "请求[订单详情]出错",
      },
    });
  },
};
