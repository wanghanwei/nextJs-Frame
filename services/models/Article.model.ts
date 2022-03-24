/* eslint-disable no-undef */
/* eslint-disable camelcase */
// 该文档由脚本自动生成，请勿修改
// 公众号文章接口
import Fetcher from "../Fetcher";

const fetch = new Fetcher();

/**
 * 首页文章展示
 * {@link https://undefined/api/doc.html#/2.X版本/公众号文章接口/homeArticleListUsingPOST}.
 */
interface homeArticleListUsingPOSTRef {
  request: (params?: {}, options?: any) => Promise<any>;
}

export const homeArticleListUsingPOST: homeArticleListUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/content/article/home-list",
        method: "post",
        msg: "请求[首页文章展示]出错",
      },
    });
  },
};

/**
 * 文章列表
 * {@link https://undefined/api/doc.html#/2.X版本/公众号文章接口/listUsingGET}.
 */
interface listUsingGETRef {
  request: (
    params?: {
      query?: {
        // 文章关键字
        articleTitle?: string;
        // 当前页
        current?: number;
        // 查询起始值(后台使用,前端不用传)
        offset?: number;
        // 分页大小
        pageSize?: number;
        // 文章类型id
        typeId?: number;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const listUsingGET: listUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/content/article/list",
        method: "get",
        msg: "请求[文章列表]出错",
      },
    });
  },
};

/**
 * 文章类型
 * {@link https://undefined/api/doc.html#/2.X版本/公众号文章接口/typeListUsingGET}.
 */
interface typeListUsingGETRef {
  request: (
    params?: {
      query?: {
        // 文章板块 0-全部 1-保险科普 2-认识长城
        plate?: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const typeListUsingGET: typeListUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/content/article/types",
        method: "get",
        msg: "请求[文章类型]出错",
      },
    });
  },
};

/**
 * 文章详情
 * {@link https://undefined/api/doc.html#/2.X版本/公众号文章接口/getDetailUsingGET}.
 */
interface getDetailUsingGETRef {
  request: (
    params?: {
      path: {
        // articleId
        articleId: number;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const getDetailUsingGET: getDetailUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/content/article/{articleId}",
        method: "get",
        msg: "请求[文章详情]出错",
      },
    });
  },
};
