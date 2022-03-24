/* eslint-disable no-undef */
/* eslint-disable camelcase */
// 该文档由脚本自动生成，请勿修改
// 公众号产品相关接口
import Fetcher from "../Fetcher";

const fetch = new Fetcher();

/**
 * 所有类型
 * {@link https://undefined/api/doc.html#/2.X版本/公众号产品相关接口/allProductTypeUsingGET}.
 */
interface allProductTypeUsingGETRef {
  request: (params?: {}, options?: any) => Promise<any>;
}

export const allProductTypeUsingGET: allProductTypeUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/product/product/all-product-type",
        method: "get",
        msg: "请求[所有类型]出错",
      },
    });
  },
};

/**
 * 产品确认项信息信息
 * {@link https://undefined/api/doc.html#/2.X版本/公众号产品相关接口/getConfirmItemByProductUsingGET}.
 */
interface getConfirmItemByProductUsingGETRef {
  request: (
    params?: {
      query?: {
        // 产品id
        productId?: string;
        // 产品计划id
        productPlanId?: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const getConfirmItemByProductUsingGET: getConfirmItemByProductUsingGETRef =
  {
    request: (params, options: any = {}) => {
      return fetch.fetch(params, {
        ...options,
        ...{
          url: "/api/product/product/confirmItem-by-product",
          method: "get",
          msg: "请求[产品确认项信息信息]出错",
        },
      });
    },
  };

/**
 * 产品条款信息
 * {@link https://undefined/api/doc.html#/2.X版本/公众号产品相关接口/getMaterialByProductUsingGET}.
 */
interface getMaterialByProductUsingGETRef {
  request: (
    params?: {
      query?: {
        // 产品id
        productId: string;
        // 产品计划id
        productPlanId?: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const getMaterialByProductUsingGET: getMaterialByProductUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/product/product/material-by-product",
        method: "get",
        msg: "请求[产品条款信息]出错",
      },
    });
  },
};

/**
 * 产品详情信息
 * {@link https://undefined/api/doc.html#/2.X版本/公众号产品相关接口/getProductDetailUsingGET}.
 */
interface getProductDetailUsingGETRef {
  request: (
    params?: {
      query?: {
        // 产品id
        productId?: string;
        // 产品计划id
        productPlanId?: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const getProductDetailUsingGET: getProductDetailUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/product/product/product-detail",
        method: "get",
        msg: "请求[产品详情信息]出错",
      },
    });
  },
};

/**
 * 分页条件查询产品列表
 * {@link https://undefined/api/doc.html#/2.X版本/公众号产品相关接口/getProductFrontPageUsingGET}.
 */
interface getProductFrontPageUsingGETRef {
  request: (
    params?: {
      query?: {
        // 是否包含提测产品:后端使用
        containTest?: any;
        // 当前页
        current?: number;
        // 查询起始值(后台使用,前端不用传)
        offset?: number;
        // 分页大小
        pageSize?: number;
        // 产品名称
        productName?: string;
        // 产品类别id
        productTypeId?: number;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const getProductFrontPageUsingGET: getProductFrontPageUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/product/product/product-front-page",
        method: "get",
        msg: "请求[分页条件查询产品列表]出错",
      },
    });
  },
};

/**
 * 公众号首页产品列表
 * {@link https://undefined/api/doc.html#/2.X版本/公众号产品相关接口/getProductHomeListUsingPOST}.
 */
interface getProductHomeListUsingPOSTRef {
  request: (params?: {}, options?: any) => Promise<any>;
}

export const getProductHomeListUsingPOST: getProductHomeListUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/product/product/product-home-list",
        method: "post",
        msg: "请求[公众号首页产品列表]出错",
      },
    });
  },
};

/**
 * 根据产品id获取展示信息计划id列表
 * {@link https://undefined/api/doc.html#/2.X版本/公众号产品相关接口/getProductPlansByProductUsingGET}.
 */
interface getProductPlansByProductUsingGETRef {
  request: (
    params?: {
      query?: {
        // 产品id
        productId: any;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const getProductPlansByProductUsingGET: getProductPlansByProductUsingGETRef =
  {
    request: (params, options: any = {}) => {
      return fetch.fetch(params, {
        ...options,
        ...{
          url: "/api/product/product/product-plans-by-product",
          method: "get",
          msg: "请求[根据产品id获取展示信息计划id列表]出错",
        },
      });
    },
  };
