/* eslint-disable no-undef */
/* eslint-disable camelcase */
// 该文档由脚本自动生成，请勿修改
// 投保流程
import Fetcher from "../Fetcher";

const fetch = new Fetcher();

/**
 * 申请签约
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/bankSignUsingGET}.
 */
interface bankSignUsingGETRef {
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

export const bankSignUsingGET: bankSignUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/bank/sign",
        method: "get",
        msg: "请求[申请签约]出错",
      },
    });
  },
};

/**
 * 签约确认
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/bankSignConfirmUsingGET}.
 */
interface bankSignConfirmUsingGETRef {
  request: (
    params?: {
      query?: {
        // 投保单号加密串
        encryptInsureNum: string;
        // 验证码
        verifyCode: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const bankSignConfirmUsingGET: bankSignConfirmUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/bank/sign-confirm",
        method: "get",
        msg: "请求[签约确认]出错",
      },
    });
  },
};

/**
 * 认证后再投保
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/doInsureOrderUsingGET}.
 */
interface doInsureOrderUsingGETRef {
  request: (
    params?: {
      query?: {
        // encryptInsureNum
        encryptInsureNum: string;
        // productId
        productId: number;
        // projectCode
        projectCode: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const doInsureOrderUsingGET: doInsureOrderUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/create-insure-order/check/",
        method: "get",
        msg: "请求[认证后再投保]出错",
      },
    });
  },
};

/**
 * 反洗钱认证明细列表
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/amlDetailListUsingGET}.
 */
interface amlDetailListUsingGETRef {
  request: (
    params?: {
      query?: {
        // 投保单号加密串
        encryptInsureNum: string;
        // 验证类型:1-投保人认证 2-被保人认证 3-受益人认证
        type: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const amlDetailListUsingGET: amlDetailListUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/create-order/aml-detail-list",
        method: "get",
        msg: "请求[反洗钱认证明细列表]出错",
      },
    });
  },
};

/**
 * 反洗钱认证状态列表
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/amlStatusListUsingGET}.
 */
interface amlStatusListUsingGETRef {
  request: (
    params?: {
      query?: {
        // 投保单号加密串
        encryptInsureNum: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const amlStatusListUsingGET: amlStatusListUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/create-order/aml-status-list",
        method: "get",
        msg: "请求[反洗钱认证状态列表]出错",
      },
    });
  },
};

/**
 * 反洗钱认证识别提交
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/amlVerifyUsingPOST}.
 */
interface amlVerifyUsingPOSTRef {
  request: (
    params?: {
      // amlAuthInsureParam
      data?: ServiceRef.AmlAuthInsureParam;
    },
    options?: any
  ) => Promise<any>;
}

export const amlVerifyUsingPOST: amlVerifyUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/create-order/aml-verify",
        method: "post",
        msg: "请求[反洗钱认证识别提交]出错",
      },
    });
  },
};

/**
 * 反洗钱认证列表提交
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/amlVerifySubmitUsingPUT}.
 */
interface amlVerifySubmitUsingPUTRef {
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

export const amlVerifySubmitUsingPUT: amlVerifySubmitUsingPUTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/create-order/aml-verify-submit/{encryptInsureNum}",
        method: "put",
        msg: "请求[反洗钱认证列表提交]出错",
      },
    });
  },
};

/**
 * 投保提交
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/createOrderUsingPOST}.
 */
interface createOrderUsingPOSTRef {
  request: (
    params?: {
      // insureBase
      data?: ServiceRef.InsureBaseDTO;
    },
    options?: any
  ) => Promise<any>;
}

export const createOrderUsingPOST: createOrderUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/create-order/check",
        method: "post",
        msg: "请求[投保提交]出错",
      },
    });
  },
};

/**
 * 投保单暂存单数据获取
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/getInsureTempUsingGET}.
 */
interface getInsureTempUsingGETRef {
  request: (
    params?: {
      query?: {
        // encryptInsureNum
        encryptInsureNum: string;
        // productId
        productId: number;
        // projectCode
        projectCode: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const getInsureTempUsingGET: getInsureTempUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/create-order/get-insure-temp",
        method: "get",
        msg: "请求[投保单暂存单数据获取]出错",
      },
    });
  },
};

/**
 * 健告回答问题接口
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/healthNoticeResultUsingGET}.
 */
interface healthNoticeResultUsingGETRef {
  request: (
    params?: {
      query?: {
        // 投保单号加密串
        encryptInsureNum: string;
        // 健康告知问题回调结果:1部分为否,2以上全为是
        healthResult: string;
        // 最新健康告知版本号
        latestHealthNo: string;
        // 产品id
        productId: string;
        // 方案代码
        projectCode: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const healthNoticeResultUsingGET: healthNoticeResultUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/health-notice-result",
        method: "get",
        msg: "请求[健告回答问题接口]出错",
      },
    });
  },
};

/**
 * 去支付订单信息获取
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/getPayOrderDetailUsingGET}.
 */
interface getPayOrderDetailUsingGETRef {
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

export const getPayOrderDetailUsingGET: getPayOrderDetailUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/pay/get-order-detail",
        method: "get",
        msg: "请求[去支付订单信息获取]出错",
      },
    });
  },
};

/**
 * 支付订单
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/payOrderUsingGET}.
 */
interface payOrderUsingGETRef {
  request: (
    params?: {
      query?: {
        // 投保单号加密串,返回code:500004支付中,500005支付失败,msg为说明
        encryptInsureNum: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const payOrderUsingGET: payOrderUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/pay/pay-order",
        method: "get",
        msg: "请求[支付订单]出错",
      },
    });
  },
};

/**
 * 支付结果查询
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/payResultQueryUsingGET}.
 */
interface payResultQueryUsingGETRef {
  request: (
    params?: {
      query?: {
        // 投保单号加密串,返回code:500004支付中,500005支付失败,msg为说明
        encryptInsureNum: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const payResultQueryUsingGET: payResultQueryUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/pay/pay-result-query",
        method: "get",
        msg: "请求[支付结果查询]出错",
      },
    });
  },
};

/**
 * 投保地区
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/getAreaUsingGET}.
 */
interface getAreaUsingGETRef {
  request: (
    params?: {
      query?: {
        // productId
        productId: number;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const getAreaUsingGET: getAreaUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/product/area",
        method: "get",
        msg: "请求[投保地区]出错",
      },
    });
  },
};

/**
 * 职业树
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/getJobUsingGET}.
 */
interface getJobUsingGETRef {
  request: (
    params?: {
      query?: {
        // productId
        productId: number;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const getJobUsingGET: getJobUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/product/job/tree",
        method: "get",
        msg: "请求[职业树]出错",
      },
    });
  },
};

/**
 * 详情页和投保页试算
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/trialInsuredUsingPOST}.
 */
interface trialInsuredUsingPOSTRef {
  request: (
    params?: {
      // insureRequest
      data?: ServiceRef.InsuredTrialRequest;
    },
    options?: any
  ) => Promise<any>;
}

export const trialInsuredUsingPOST: trialInsuredUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/product/trial",
        method: "post",
        msg: "请求[详情页和投保页试算]出错",
      },
    });
  },
};

/**
 * 预约咨询
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/saveReservedDataUsingPOST}.
 */
interface saveReservedDataUsingPOSTRef {
  request: (
    params?: {
      // reservedDataDto
      data?: ServiceRef.ReservedDataDto;
    },
    options?: any
  ) => Promise<any>;
}

export const saveReservedDataUsingPOST: saveReservedDataUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/save-reserved-data",
        method: "post",
        msg: "请求[预约咨询]出错",
      },
    });
  },
};

/**
 * 保存试算
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/saveTrialUsingPOST}.
 */
interface saveTrialUsingPOSTRef {
  request: (
    params?: {
      // trialGeneSaveParam
      data?: ServiceRef.TrialGeneSaveParam;
    },
    options?: any
  ) => Promise<any>;
}

export const saveTrialUsingPOST: saveTrialUsingPOSTRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/save-trial",
        method: "post",
        msg: "请求[保存试算]出错",
      },
    });
  },
};

/**
 * 银行卡号识别与校验
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/bankNoCheckUsingGET}.
 */
interface bankNoCheckUsingGETRef {
  request: (
    params?: {
      query?: {
        // bankAccountNo
        bankAccountNo: string;
      };
    },
    options?: any
  ) => Promise<any>;
}

export const bankNoCheckUsingGET: bankNoCheckUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/tools/bank-check",
        method: "get",
        msg: "请求[银行卡号识别与校验]出错",
      },
    });
  },
};

/**
 * 电子保单文件下载url
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/downloadPolicyUsingGET}.
 */
interface downloadPolicyUsingGETRef {
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

export const downloadPolicyUsingGET: downloadPolicyUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/tools/download-policy",
        method: "get",
        msg: "请求[电子保单文件下载url]出错",
      },
    });
  },
};

/**
 * 在线回访地址获取
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/getVisitUrlUsingGET}.
 */
interface getVisitUrlUsingGETRef {
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

export const getVisitUrlUsingGET: getVisitUrlUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/tools/visit-url",
        method: "get",
        msg: "请求[在线回访地址获取]出错",
      },
    });
  },
};

/**
 * 投保页获取试算参数
 * {@link https://undefined/api/doc.html#/2.X版本/投保流程/getTrialGeneUsingGET}.
 */
interface getTrialGeneUsingGETRef {
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

export const getTrialGeneUsingGET: getTrialGeneUsingGETRef = {
  request: (params, options: any = {}) => {
    return fetch.fetch(params, {
      ...options,
      ...{
        url: "/api/insure/trial/query-trial",
        method: "get",
        msg: "请求[投保页获取试算参数]出错",
      },
    });
  },
};
