/* eslint-disable no-undef */
/* eslint-disable camelcase */
// 该文档由脚本自动生成，请勿修改
// 文件管理接口
import Fetcher from "../Fetcher";

const fetch = new Fetcher();

/**
 * 单文件上传接口
 * {@link https://undefined/api/doc.html#/2.X版本/文件管理接口/uploadUsingPOST}.
 */
interface uploadUsingPOSTRef {
  request: (
    params?: {
      data?: FormData;
    },
    options?: any
  ) => Promise<any>;
}

export const uploadUsingPOST: uploadUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/sys/file/upload",
        method: "post",
        msg: "请求[单文件上传接口]出错",
      },
    });
  },
};

/**
 * 批量文件上传接口
 * {@link https://undefined/api/doc.html#/2.X版本/文件管理接口/filesUploadUsingPOST}.
 */
interface filesUploadUsingPOSTRef {
  request: (params?: {}, options?: any) => Promise<any>;
}

export const filesUploadUsingPOST: filesUploadUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/sys/files/Upload",
        method: "post",
        msg: "请求[批量文件上传接口]出错",
      },
    });
  },
};
