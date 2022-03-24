/* eslint-disable no-undef */
/* eslint-disable camelcase */
// 该文档由脚本自动生成，请勿修改
// 轮播图展示
import Fetcher from "../Fetcher";

const fetch = new Fetcher();

/**
 * 轮播图查询
 * {@link https://undefined/api/doc.html#/2.X版本/轮播图展示/getBannerShowListUsingPOST}.
 */
interface getBannerShowListUsingPOSTRef {
  request: (params?: {}, options?: any) => Promise<any>;
}

export const getBannerShowListUsingPOST: getBannerShowListUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/content/banner-show/list",
        method: "post",
        msg: "请求[轮播图查询]出错",
      },
    });
  },
};
