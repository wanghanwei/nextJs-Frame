/* eslint-disable no-undef */
/* eslint-disable camelcase */
// 该文档由脚本自动生成，请勿修改
// 投保属性接口
import Fetcher from "../Fetcher";

const fetch = new Fetcher();

/**
 * 获取属性值列表
 * {@link https://undefined/api/doc.html#/2.X版本/投保属性接口/getByAttributeListUsingGET}.
 */
interface getByAttributeListUsingGETRef {
  request: (
    params?: {
      query?: {
        // 属性code
        keyCode: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const getByAttributeListUsingGET: getByAttributeListUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/product/attribute-value/list",
        method: "get",
        msg: "请求[获取属性值列表]出错",
      },
    });
  },
};

/**
 * 获取投保属性
 * {@link https://undefined/api/doc.html#/2.X版本/投保属性接口/getInsureAllAttrsUsingGET}.
 */
interface getInsureAllAttrsUsingGETRef {
  request: (
    params?: {
      query?: {
        // 产品ID
        productId: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const getInsureAllAttrsUsingGET: getInsureAllAttrsUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/product/insure-attribute/insure-all-attrs",
        method: "get",
        msg: "请求[获取投保属性]出错",
      },
    });
  },
};
