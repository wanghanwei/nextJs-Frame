declare namespace ServiceRef {
    /**
     * AmlAuthInsureDetailDto
     * 反洗钱认证明细列表
     */
    export interface AmlAuthInsureDetailDto {
        /**
         * 认证列表记录
         */
        amlRecords?: InsureAmlRecordDto[];
        /**
         * 投保单号加密密文
         */
        encryptInsureNum?: string;
        /**
         * 是否仅投保人认证,1是 0否,投被保人本人的时候仅投保人认证
         */
        onlyApplicant?: number; // int32
    }
    /**
     * AmlAuthInsureDto
     * 反洗钱认证状态列表
     */
    export interface AmlAuthInsureDto {
        /**
         * 证件号
         */
        certifyNo?: string;
        /**
         * 1身份证 2户口簿
         */
        certifyType?: number; // int32
        /**
         * 证件号脱敏字符
         */
        desCertifyNo?: string;
        /**
         * 姓名
         */
        name?: string;
        /**
         * 验证类型:1-投保人认证 2-被保人认证 3-受益人认证
         */
        type?: number; // int32
        /**
         * 验证失败报错信息
         */
        verifyFailMsg?: string;
        /**
         * 验证结果：0-未验证 1-验证失败 2-验证通过
         */
        verifyStatus?: number; // int32
    }
    /**
     * AmlAuthInsureParam
     * 反洗钱认证资料提交,识别和保存
     */
    export interface AmlAuthInsureParam {
        /**
         * 投保单号加密串
         */
        encryptInsureNum?: string;
        /**
         * 认证上传的证件影像文件id
         */
        fileId?: number; // int32
        /**
         * 认证上传的影像文件url
         */
        fileUrl?: string;
        /**
         * 是否身份证,后端默认,前端不做处理
         */
        identityCard?: boolean;
        insureNum?: number; // int64
        /**
         * 是否仅投保人认证,1是 0否,投被保人本人的时候仅投保人认证
         */
        onlyApplicant?: number; // int32
        passportId?: number; // int32
        /**
         * 计划id/方案id
         */
        planId?: string;
        /**
         * 产品id
         */
        productId?: number; // int32
        /**
         * 认证记录id
         */
        recordId?: number; // int64
        /**
         * 1证件正面(户口簿首页) 2证件反面(户口簿成员页) 不区分正反面的证件直接传主页正面为1即可
         */
        side?: number; // int32
    }
    /**
     * ApiResponse«AmlAuthInsureDetailDto»
     */
    export interface ApiResponseAmlAuthInsureDetailDto_ {
        code?: string;
        data?: AmlAuthInsureDetailDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«AppletsUserDto»
     */
    export interface ApiResponseAppletsUserDto_ {
        code?: string;
        data?: AppletsUserDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«ArticleDetailDto»
     */
    export interface ApiResponseArticleDetailDto_ {
        code?: string;
        data?: ArticleDetailDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«BankCheckDto»
     */
    export interface ApiResponseBankCheckDto_ {
        code?: string;
        data?: BankCheckDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«BannerUpperLowerDto»
     */
    export interface ApiResponseBannerUpperLowerDto_ {
        code?: string;
        data?: BannerUpperLowerDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«boolean»
     */
    export interface ApiResponseBoolean_ {
        code?: string;
        data?: boolean;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«CEquityResponse»
     */
    export interface ApiResponseCEquityResponse_ {
        code?: string;
        data?: CEquityResponse;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«EquityEduResponseDTO»
     */
    export interface ApiResponseEquityEduResponseDTO_ {
        code?: string;
        data?: EquityEduResponseDTO;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«FileRecordDto»
     */
    export interface ApiResponseFileRecordDto_ {
        code?: string;
        data?: FileRecordDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«InsureAllAttrDto»
     */
    export interface ApiResponseInsureAllAttrDto_ {
        code?: string;
        data?: InsureAllAttrDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«InsureBaseDTO»
     */
    export interface ApiResponseInsureBaseDTO_ {
        code?: string;
        data?: InsureBaseDTO;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«InsureResponseDto»
     */
    export interface ApiResponseInsureResponseDto_ {
        code?: string;
        data?: InsureResponseDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«int»
     */
    export interface ApiResponseInt_ {
        code?: string;
        data?: number; // int32
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«AmlAuthInsureDto»»
     */
    export interface ApiResponseListAmlAuthInsureDto_ {
        code?: string;
        data?: AmlAuthInsureDto[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«ArticleFrontHomeDto»»
     */
    export interface ApiResponseListArticleFrontHomeDto_ {
        code?: string;
        data?: ArticleFrontHomeDto[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«AttributeValueDto»»
     */
    export interface ApiResponseListAttributeValueDto_ {
        code?: string;
        data?: AttributeValueDto[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«CAreaWebDto»»
     */
    export interface ApiResponseListCAreaWebDto_ {
        code?: string;
        data?: CAreaWebDto[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«ConfirmItemTypeDto»»
     */
    export interface ApiResponseListConfirmItemTypeDto_ {
        code?: string;
        data?: ConfirmItemTypeDto[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«EquityDemonstrationResp»»
     */
    export interface ApiResponseListEquityDemonstrationResp_ {
        code?: string;
        data?: EquityDemonstrationResp[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«EquityPolicyOperDTO»»
     */
    export interface ApiResponseListEquityPolicyOperDTO_ {
        code?: string;
        data?: EquityPolicyOperDTO[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«FileRecordDto»»
     */
    export interface ApiResponseListFileRecordDto_ {
        code?: string;
        data?: FileRecordDto[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«JobVo»»
     */
    export interface ApiResponseListJobVo_ {
        code?: string;
        data?: JobVo[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«Map«string,object»»»
     */
    export interface ApiResponseListMapStringObject_ {
        code?: string;
        data?: MapStringObject_[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«ProductFrontHomeDto»»
     */
    export interface ApiResponseListProductFrontHomeDto_ {
        code?: string;
        data?: ProductFrontHomeDto[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«ProductMaterialTypeDto»»
     */
    export interface ApiResponseListProductMaterialTypeDto_ {
        code?: string;
        data?: ProductMaterialTypeDto[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«ProductPlanFrontDto»»
     */
    export interface ApiResponseListProductPlanFrontDto_ {
        code?: string;
        data?: ProductPlanFrontDto[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«List«ProductType»»
     */
    export interface ApiResponseListProductType_ {
        code?: string;
        data?: ProductType[];
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«OrderDetailDto»
     */
    export interface ApiResponseOrderDetailDto_ {
        code?: string;
        data?: OrderDetailDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«Pagination«ArticleFrontDto»»
     */
    export interface ApiResponsePaginationArticleFrontDto_ {
        code?: string;
        data?: PaginationArticleFrontDto_;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«Pagination«InsureOrderDto»»
     */
    export interface ApiResponsePaginationInsureOrderDto_ {
        code?: string;
        data?: PaginationInsureOrderDto_;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«Pagination«ProductFrontHomeDto»»
     */
    export interface ApiResponsePaginationProductFrontHomeDto_ {
        code?: string;
        data?: PaginationProductFrontHomeDto_;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«PayOrderDetailDto»
     */
    export interface ApiResponsePayOrderDetailDto_ {
        code?: string;
        data?: PayOrderDetailDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«ProductFrontDetailDto»
     */
    export interface ApiResponseProductFrontDetailDto_ {
        code?: string;
        data?: ProductFrontDetailDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«string»
     */
    export interface ApiResponseString_ {
        code?: string;
        data?: string;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«TrialGeneDto»
     */
    export interface ApiResponseTrialGeneDto_ {
        code?: string;
        data?: TrialGeneDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«TrialInsuredResponse»
     */
    export interface ApiResponseTrialInsuredResponse_ {
        code?: string;
        data?: TrialInsuredResponse;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«TrialSaveTrialDto»
     */
    export interface ApiResponseTrialSaveTrialDto_ {
        code?: string;
        data?: TrialSaveTrialDto;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * ApiResponse«Void»
     */
    export interface ApiResponseVoid_ {
        code?: string;
        msg?: string;
        success?: boolean;
        httpStatus?: number;
    }
    /**
     * AppletsUserDto
     * 公众号用户信息
     */
    export interface AppletsUserDto {
        birthday?: string;
        /**
         * 手机号
         */
        cellphone?: string;
        certificateNo?: string;
        certificateType?: number; // int32
        code?: string;
        /**
         * 脱敏手机号
         */
        desensitizationCellphone?: string;
        id?: number; // int32
        needDelToken?: string;
        /**
         * 用户昵称
         */
        nickname?: string;
        /**
         * openid
         */
        openid?: string;
        /**
         * 真名
         */
        realname?: string;
        sessionKey?: string;
        /**
         * 性别 1-男 2-女
         */
        sex?: string;
        /**
         * 返回token
         */
        token?: string;
        unionId?: string;
        /**
         * 用户头像
         */
        userImg?: string;
    }
    /**
     * AppletsUserInsert
     * code换取token
     */
    export interface AppletsUserInsert {
        /**
         * 加密openid
         */
        openid?: string;
    }
    /**
     * ArticleDetailDto
     * 文章发布和预览对应的文章实体
     */
    export interface ArticleDetailDto {
        /**
         * 文章内容
         */
        articleContent?: string;
        /**
         * 文章标题
         */
        articleTitle?: string;
        /**
         * 所属分类
         */
        articleTypeId?: number; // int32
        /**
         * 作者名称
         */
        authorName?: string;
        /**
         * 创建时间
         */
        createTime?: string;
        /**
         * 是否已删除,0未刪除,1已刪除
         */
        deleteFlag?: number; // int32
        /**
         * 部门名称
         */
        departmentName?: string;
        /**
         * 摘要
         */
        digest?: string;
        /**
         * 唯一主键id
         */
        id?: number; // int32
        /**
         * 封面图路径
         */
        newsTagRunnerUrl?: string;
        /**
         * 页面浏览次数
         */
        pageview?: number; // int32
        /**
         * 已选择的标签集合
         */
        selectedTags?: string[];
        /**
         * 当前文章状态:0待修改,1审核中(待审核),2已发布(审核通过),3已驳回,4已下架
         */
        status?: number; // int32
        /**
         * 已选择的标签集合:字符串逗号分隔
         */
        tags?: string;
        /**
         * 是否置顶 1置顶,0未置顶
         */
        top?: number; // int32
        /**
         * 更新时间:可作为发布时间
         */
        updateTime?: string;
    }
    /**
     * ArticleFrontDto
     * 文章概览数据
     */
    export interface ArticleFrontDto {
        /**
         * 文章标题
         */
        articleTitle?: string;
        /**
         * 所属分类
         */
        articleTypeId?: number; // int32
        /**
         * example:
         * yyyy-MM-dd HH:mm:ss
         */
        createTime?: string;
        /**
         * 是否已删除,0未刪除,1已刪除
         */
        deleteFlag?: number; // int32
        /**
         * 摘要
         */
        digest?: string;
        /**
         * 唯一主键id
         */
        id?: number; // int32
        /**
         * 点赞数
         */
        likeNum?: number; // int32
        /**
         * 封面图路径
         */
        newsTagRunnerUrl?: string;
        /**
         * 页面浏览次数
         */
        pageview?: number; // int32
        /**
         * 当前文章状态:0待修改,1审核中(待审核),2已发布(审核通过),3已驳回,4已下架
         */
        status?: number; // int32
        /**
         * 是否置顶 1置顶,0未置顶
         */
        top?: number; // int32
        /**
         * example:
         * yyyy-MM-dd HH:mm:ss
         */
        updateTime?: string;
    }
    /**
     * ArticleFrontHomeDto
     * 首页文章列表
     */
    export interface ArticleFrontHomeDto {
        /**
         * 文章板块 1-保险科普 2-认识长城
         */
        plate?: number; // int32
        /**
         * 文章分类及列表信息
         */
        typeList?: ArticleHomeTypeDto[];
    }
    /**
     * ArticleHomeDto
     * 首页文章概要数据
     */
    export interface ArticleHomeDto {
        /**
         * 文章标题
         */
        articleTitle?: string;
        articleTypeId?: number; // int32
        /**
         * 摘要
         */
        digest?: string;
        /**
         * 唯一主键id
         */
        id?: number; // int32
        /**
         * 封面图路径
         */
        newsTagRunnerUrl?: string;
    }
    /**
     * ArticleHomeTypeDto
     * 文章类别及列表对象
     */
    export interface ArticleHomeTypeDto {
        /**
         * 文章列表
         */
        articleHomeDtos?: ArticleHomeDto[];
        plate?: number; // int32
        /**
         * 文章分类id
         */
        typeId?: number; // int32
        /**
         * 文章分类名称
         */
        typeName?: string;
    }
    /**
     * AttributeDto
     */
    export interface AttributeDto {
        /**
         * 默认提醒信息
         */
        defaultRemind?: string;
        /**
         * 删除标志  0 未删除 1 已删除
         */
        deleted?: number; // int32
        /**
         * 出错提醒信息
         */
        errorRemind?: string;
        /**
         * 扩展约束
         */
        extendRestrict?: string;
        /**
         * 自增主键
         */
        id?: number; // int32
        /**
         * keyCode
         */
        keyCode?: string;
        /**
         * 配置名称
         */
        name?: string;
        /**
         * 保全类型组合串，以','隔开
         */
        policyEditType?: string;
        /**
         * 前端校验的正则表达式
         */
        regex?: string;
        /**
         * 是否为必填
         */
        required?: number; // int32
        /**
         * 排序号
         */
        sort?: number; // int32
        /**
         * 类型 0-下拉框(0),1-日历控件(1),2-同时出现下拉框和日历控件区间(2),3-文本框(3),4-地区控件(4),5-职业控件(5),6-密码控件(6),7-文本(7),8-对话框(8),9-单选框(9),10-复选框(10),11-表格(11),12-富文本(12),13-多行文本(13),18-文件上传控件
         */
        type?: number; // int32
        /**
         * 属性值
         */
        values?: AttributeValueDto[];
    }
    /**
     * AttributeValueDto
     */
    export interface AttributeValueDto {
        /**
         * 属性ID
         */
        attributeId?: number; // int32
        /**
         * 控件值
         */
        controlValue?: number; // int32
        /**
         * 删除标志
         */
        deleted?: number; // int32
        /**
         * 自增主键
         */
        id?: number; // int32
        /**
         * 是否默认选中，0否，1是
         */
        isDefault?: number; // int32
        /**
         * 排序号
         */
        sort?: number; // int32
        /**
         * 配置名称
         */
        value?: string;
    }
    /**
     * BankCheckDto
     */
    export interface BankCheckDto {
        /**
         * 银行code
         */
        bankCode?: string;
        /**
         * 银行id
         */
        bankId?: number; // int32
        /**
         * validated为false时的错误提示信息
         */
        errMsg?: string;
        /**
         * 校验是否可用:返回false就忽略本次请求的响应
         */
        requestUsed?: boolean;
        /**
         * 银行卡号是否正确有效
         */
        validated?: boolean;
    }
    /**
     * BannerSetParamDto
     */
    export interface BannerSetParamDto {
        /**
         * 轮播切换延时
         */
        changeTime?: number; // int32
        /**
         * 轮播方式
         */
        roundWay?: number; // int32
        /**
         * 轮播起始位置
         */
        startLocation?: number; // int32
    }
    /**
     * BannerShowDto
     */
    export interface BannerShowDto {
        /**
         * banner素材ID
         */
        bannerId?: number; // int32
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 创建人id
         */
        createUserId?: number; // int32
        /**
         * 创建人
         */
        createUserName?: string;
        /**
         * 删除标志
         */
        deleteFlag?: boolean;
        /**
         * 主键id
         */
        id?: number; // int32
        /**
         * 图片ID
         */
        picId?: number; // int32
        /**
         * 图片名称
         */
        picName?: string;
        /**
         * 图片地址
         */
        picUrl?: string;
        /**
         * 跳转url
         */
        skipUrl?: string;
        /**
         * 排序
         */
        sort?: number; // int32
        /**
         * 更新时间
         */
        updateTime?: string; // date-time
        /**
         * 修改人id
         */
        updateUserId?: number; // int32
        /**
         * 修改人
         */
        updateUserName?: string;
    }
    /**
     * BannerUpperLowerDto
     */
    export interface BannerUpperLowerDto {
        bannerSetParamDto?: BannerSetParamDto;
        bannerShowDtoList?: BannerShowDto[];
        bannerShowDtoPage?: PaginationBannerShowDto_;
    }
    /**
     * CAreaWebDto
     */
    export interface CAreaWebDto {
        children?: CAreaWebDto[];
        label?: string;
        value?: string;
    }
    /**
     * CEquityBenefitsRateDTO
     */
    export interface CEquityBenefitsRateDTO {
        paymentYear?: number; // int32
        rate?: number;
        receiveYear?: number; // int32
        title?: string;
        totalPayment?: number;
        totalPaymentTrigger?: string;
        totalReceive?: number;
        totalReceiveTrigger?: string;
    }
    /**
     * CEquityPayReceivePoint
     */
    export interface CEquityPayReceivePoint {
        age?: string;
        ageValue?: number; // int32
        amount?: string;
        desc?: string;
        pointType?: number; // int32
        tagTrigger?: string;
    }
    /**
     * CEquityRequest
     */
    export interface CEquityRequest {
        equityGenes?: GeneParam[];
        genes?: GeneParam[];
        productId?: number; // int32
        productPlan?: ProductPlan;
        productPlanId?: number; // int32
    }
    /**
     * CEquityResponse
     */
    export interface CEquityResponse {
        benefitsRateInfo?: CEquityBenefitsRateDTO;
        data?: {
        };
        equityType?: number; // int32
        equityTypeDesc?: string;
        paymentPoints?: CEquityPayReceivePoint[][];
        receivePoints?: CEquityPayReceivePoint[][];
    }
    /**
     * ConfirmItemDto
     * 产品确认项信息
     */
    export interface ConfirmItemDto {
        /**
         * 内容
         */
        content?: string;
        /**
         * 主键ID
         */
        id?: number; // int32
        /**
         * 产品展示信息ID
         */
        productDisplayId?: number; // int32
        /**
         * 标题
         */
        title?: string;
        /**
         * 类型
         */
        type?: number; // int32
    }
    /**
     * ConfirmItemTypeDto
     * 产品确认项分组信息
     */
    export interface ConfirmItemTypeDto {
        /**
         * 产品条款信息
         */
        confirmItemDtos?: ConfirmItemDto[];
        /**
         * 类型，0逐页阅读，1勾选确认项
         */
        type?: number; // int32
    }
    /**
     * EquityCalcRequest
     */
    export interface EquityCalcRequest {
        equityGenes?: GeneParam[];
        genes?: GeneParam[];
        planId?: number; // int32
        premium?: number; // int64
        productId?: number; // int32
    }
    /**
     * EquityDemonstrationResp
     */
    export interface EquityDemonstrationResp {
        keepLeft?: boolean;
        key?: string;
        name?: string;
        values?: string[];
    }
    /**
     * EquityEduResponseDTO
     */
    export interface EquityEduResponseDTO {
        algorithmId?: number; // int32
        byName?: string;
        eduResults?: MapStringString_[];
        equityList?: EquityInsuredAgeDTO[];
        errorMessage?: string;
        key?: string;
        name?: string;
        totalEduGrant?: string;
        trialItemId?: number; // int32
        variableList?: EquityVariableDto[];
    }
    /**
     * EquityInsuredAgeDTO
     */
    export interface EquityInsuredAgeDTO {
        equityValue?: string;
        insuredAge?: number; // int32
        policyYear?: number; // int32
        secondInsurantAge?: number; // int32
    }
    /**
     * EquityItemDTO
     */
    export interface EquityItemDTO {
        algorithmId?: number; // int32
        byName?: string;
        equityList?: EquityInsuredAgeDTO[];
        errorMessage?: string;
        key?: string;
        name?: string;
        trialItemId?: number; // int32
        variableList?: EquityVariableDto[];
    }
    /**
     * EquityPolicyInsuredAgeDTO
     */
    export interface EquityPolicyInsuredAgeDTO {
        accumulatedPaidPremium?: string;
        equityPolicyValues?: EquityPolicyValueDTO[];
        formulaProcessDisplay?: string;
        formulaResult?: string;
        insuredAge?: number; // int32
        key?: string;
        needRemove?: boolean;
        policyYear?: number; // int32
        secondInsurantAge?: number; // int32
    }
    /**
     * EquityPolicyOperDTO
     */
    export interface EquityPolicyOperDTO {
        calcType?: number; // int32
        equityItemList?: EquityItemDTO[];
        equityPolicyAlias?: string;
        equityPolicyDesc?: string;
        equityPolicyId?: number; // int32
        equityPolicyInsuredAgeList?: EquityPolicyInsuredAgeDTO[];
        equityPolicyType?: number; // int32
        errorMessage?: string;
        formulaDisplay?: string;
        key?: string;
        operName?: string;
        operSpecialKey?: string;
        sort?: number; // int32
        trialItemId?: number; // int32
        trialName?: string;
    }
    /**
     * EquityPolicyValueDTO
     */
    export interface EquityPolicyValueDTO {
        code?: string;
        equityAlias?: string;
        equityName?: string;
        equityValue?: string;
        key?: string;
    }
    /**
     * EquityVariableDto
     */
    export interface EquityVariableDto {
        id?: number; // int32
        variableDesc?: string;
        variableFlag?: string;
        variableName?: string;
        variableType?: number; // int32
        variableValue?: string;
    }
    /**
     * File
     */
    export interface File {
        absolute?: boolean;
        absoluteFile?: File;
        absolutePath?: string;
        canonicalFile?: File;
        canonicalPath?: string;
        directory?: boolean;
        executable?: boolean;
        file?: boolean;
        freeSpace?: number; // int64
        hidden?: boolean;
        lastModified?: number; // int64
        name?: string;
        parent?: string;
        parentFile?: File;
        path?: string;
        readable?: boolean;
        totalSpace?: number; // int64
        usableSpace?: number; // int64
        writable?: boolean;
    }
    /**
     * FileRecordDto
     */
    export interface FileRecordDto {
        accessPath?: string;
        createTime?: string; // date-time
        createUserId?: number; // int32
        createUserName?: string;
        fileName?: string;
        filePath?: string;
        fileSize?: number; // int64
        fileType?: string;
        id?: number; // int32
        originalName?: string;
        storeStrategy?: string;
    }
    /**
     * GeneParam
     */
    export interface GeneParam {
        geneKey?: string;
        /**
         * 试算因子key
         */
        key?: string;
        protectItem?: boolean;
        /**
         * 费率表key
         */
        protectItemId?: number; // int32
        /**
         * 试算因子值
         */
        value?: string;
    }
    /**
     * GeneParamNew
     */
    export interface GeneParamNew {
        controlType?: number; // int32
        dictionaryList?: RestrictDictionary[];
        display?: boolean;
        geneKey?: string;
        /**
         * 试算因子key
         */
        key?: string;
        name?: string;
        notice?: string;
        protectItem?: boolean;
        /**
         * 费率表key
         */
        protectItemId?: number; // int32
        sort?: number; // int32
        subRestrictGeneList?: RestrictGene[];
        /**
         * 试算因子值
         */
        value?: string;
    }
    /**
     * InputStream
     */
    export interface InputStream {
    }
    /**
     * InsureAllAttrDto
     */
    export interface InsureAllAttrDto {
        /**
         * 证件号码正则表达式json串
         */
        cardNumRegexJson?: {
        };
        /**
         * 证件号码验证错误提示json串
         */
        cardNumRemindJson?: {
        };
        /**
         * 产品下的属性模块集合
         */
        modules?: ProductAttributeModuleDto[];
        /**
         * 属性约束集合
         */
        restricts?: ProductAttributeRestrictDto[];
        /**
         * 版本号,使用UUID
         */
        version?: string;
    }
    /**
     * InsureAmlRecordDto
     */
    export interface InsureAmlRecordDto {
        /**
         * 证件号
         */
        certifyNo?: string;
        /**
         * 1身份证 2户口簿
         */
        certifyType?: number; // int32
        /**
         * 证件号脱敏字符
         */
        desCertifyNo?: string;
        /**
         * 已认证影像件id
         */
        fileId?: number; // int32
        /**
         * 已认证影像件url地址
         */
        fileUrl?: string;
        id?: number; // int64
        /**
         * 姓名
         */
        name?: string;
        /**
         * 身份证:1正面 2反面; 户口本:1首页 2本人页
         */
        side?: number; // int32
        /**
         * 验证类型:1-投保人认证 2-被保人认证 3-受益人认证
         */
        type?: number; // int32
        /**
         * 验证结果：0-未验证 1-验证失败 2-验证通过
         */
        verifyStatus?: number; // int32
    }
    /**
     * InsureBaseDTO
     * 投保单实体
     */
    export interface InsureBaseDTO {
        /**
         * 投保人类型：1个人,2企业
         */
        applicantType?: number; // int32
        /**
         * 账户客户类型：前端不需传值
         */
        customerType?: number; // int32
        /**
         * 投保属性
         */
        data?: {
            [name: string]: MapStringObject_[];
        };
        /**
         * 保险期限文本:如1年
         */
        deadline?: string;
        /**
         * 保险期限单位:10-天, 9-月, 8-年
         */
        deadlineUnit?: string;
        /**
         * 保险期限值:如1
         */
        deadlineValue?: number; // int32
        /**
         * 投保单号加密密文
         */
        encryptInsureNum?: string;
        /**
         * 止保时间日期:格式yyyy-MM-dd hh:mm:ss
         */
        endDate?: string;
        /**
         * 投保日期:yyyy-MM-dd hh:mm:ss
         */
        insuranceDate?: string;
        /**
         * 缴费次数:默认传1
         */
        insureAgeLimit?: number; // int32
        /**
         * 受益人类型:1法定,2指定
         */
        insureBeneficiaryType?: number; // int32
        /**
         * 被保险人类型:1个人 2企业
         */
        insureInsurantType?: number; // int32
        /**
         * 投保单号明文：前端不需传值
         */
        insureNum?: number; // int64
        /**
         * 电子发票类型:1增值税专用发票,2增值税普通发票,3电子普票,4暂不开票,前端忽略
         */
        invoiceType?: number; // int32
        /**
         * 是否投保人默认为被保人之一: 1是，0否
         */
        isApplicantInsurant?: number; // int32
        /**
         * 微信是否已通过实名认证:1已实名通过,0未实名通过
         */
        isAuthentication?: number; // int32
        /**
         * 是否可续保:0不可续保,1可续保,前端忽略
         */
        isCanRenewal?: number; // int32
        /**
         * 投保单更新标记:1更新 预留字段前端不传
         */
        isUpdate?: number; // int32
        /**
         * 业务员部门名称
         */
        managerDepartName?: string;
        /**
         * 业务员姓名
         */
        managerName?: string;
        /**
         * 业务员工号,业务员部门id
         */
        managerNo?: string;
        managerUpdateType?: string;
        /**
         * 健康告知id:预留一期不传
         */
        notifyAnswerId?: number; // int32
        oldInsureNum?: number; // int64
        /**
         * 修改订单的旧的投保单号,根据实际情况传值
         */
        oldSecretInsureNum?: string;
        originManagerNo?: boolean;
        /**
         * 价格:原价单份保费
         */
        originSinglePrice?: number;
        /**
         * 价格:原价总保费
         */
        originalPrice?: number;
        /**
         * 投保账号证件号：前端不需传值
         */
        passportCardNum?: string;
        /**
         * 投保账号id：前端不需传值
         */
        passportId?: number; // int32
        /**
         * 投保账号名称：前端不需传值
         */
        passportName?: string;
        /**
         * 保单类型：0纸质保单,2电子保单,前端忽略
         */
        policyType?: number; // int32
        /**
         * 价格:优惠后总保费
         */
        price?: number;
        /**
         * 产品标识,产品id
         */
        productId?: number; // int32
        /**
         * 产品方案标识,方案code/计划id
         */
        projectCode?: string;
        /**
         * 起保日期:格式yyyy-MM-dd hh:mm:ss
         */
        startDate?: string;
        /**
         * 购买份数
         */
        totalNum?: number; // int32
        /**
         * 回溯id
         */
        traceId?: string;
        /**
         * 试算参数:json串 和保存试算接口的试算json串结构一致
         */
        trialGenes?: string;
        /**
         * 紧急联系人
         */
        urgencyContact?: string;
        /**
         * 紧急联系人电话
         */
        urgencyContactPhone?: string;
    }
    /**
     * InsureOrderDto
     * 订单列表信息
     */
    export interface InsureOrderDto {
        /**
         * 投保人姓名
         */
        applicantName?: string;
        /**
         * 投保人联系方式
         */
        applicantPhone?: string;
        /**
         * 前端忽略 后端使用
         */
        auditStatus?: number; // int32
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 投保单号加密串
         */
        encryptInsureNum?: string;
        /**
         * 前端忽略 后端使用
         */
        endDate?: string; // date-time
        /**
         * 保障期限,直接展示
         */
        guaranteePeriod?: string;
        /**
         * 被保人姓名
         */
        insureName?: string;
        /**
         * 投保单号
         */
        insureNum?: number; // int64
        /**
         * 被保人联系方式
         */
        insurePhone?: string;
        /**
         * 失效时间
         */
        invalidTime?: string; // date-time
        /**
         * 前端忽略 后端使用
         */
        issueStatus?: number; // int32
        /**
         * 订单编号
         */
        orderNum?: string;
        /**
         * 订单状态 1-待完成 2-待支付 3-已支付 4-已失效
         */
        orderStatus?: number; // int32
        /**
         * 待完成明细状态 1-支付中 2-待签约
         */
        orderToDoStatus?: number; // int32
        /**
         * 保费
         */
        payAmount?: string;
        /**
         * 前端忽略 后端使用
         */
        payStatus?: number; // int32
        /**
         * 计划id
         */
        planId?: string;
        /**
         * 保单号
         */
        policyNo?: string;
        /**
         * 产品id
         */
        productId?: string;
        /**
         * 产品名称
         */
        productName?: string;
        /**
         * 前端忽略 后端使用
         */
        startDate?: string; // date-time
        /**
         * 回溯id
         */
        traceId?: string;
    }
    /**
     * InsureResponseDto
     * 投保单响应
     */
    export interface InsureResponseDto {
        /**
         * 投保报错code码或者投保流程扭转code码
         */
        errorCode?: string;
        /**
         * 投保报错信息
         */
        errorMessage?: string;
        /**
         * 明文投保单号
         */
        insureNum?: number; // int64
        /**
         * 业务员编码
         */
        managerCode?: string;
        /**
         * 业务员部门
         */
        managerDepartName?: string;
        /**
         * 业务员姓名
         */
        managerName?: string;
        /**
         * 订单号,投保成功后才会返回
         */
        orderNum?: string;
        /**
         * 支付保费
         */
        payPremium?: string;
        /**
         * 投保单号加密串
         */
        secretInsureNum?: string;
        /**
         * 投保是否成功
         */
        success?: boolean;
        /**
         * 回溯Id
         */
        traceId?: string;
    }
    /**
     * InsuredTrialRequest
     */
    export interface InsuredTrialRequest {
        /**
         * 投保属性参数
         */
        data?: {
            [name: string]: MapStringObject_[];
        };
        /**
         * 试算因子
         */
        genes?: GeneParam[];
        /**
         * 起保日期
         */
        insureDateTime?: string;
        /**
         * 投保日期
         */
        insuredDate?: string;
        /**
         * 产品标识
         */
        productId?: number; // int32
        /**
         * 计划标识
         */
        productPlanId?: number; // int32
    }
    /**
     * JobVo
     */
    export interface JobVo {
        code?: string;
        id?: number; // int64
        isInsure?: boolean;
        level?: string;
        name?: string;
        parent?: number; // int64
        sub?: JobVo[];
        templateId?: number; // int64
    }
    /**
     * Map«string,object»
     */
    export interface MapStringObject_ {
        [name: string]: {
        };
    }
    /**
     * Map«string,string»
     */
    export interface MapStringString_ {
        [name: string]: string;
    }
    /**
     * Number
     */
    export interface Number {
    }
    /**
     * OrderApplicantDto
     * 投保人信息
     */
    export interface OrderApplicantDto {
        /**
         * 姓名
         */
        applicantCname?: string;
        /**
         * 出生日期
         */
        birthdate?: string;
        /**
         * 证件号码
         */
        cardNumber?: string;
        /**
         * 证件有效期
         */
        cardPeriod?: string;
        /**
         * 证件类型
         */
        cardTypeId?: number; // int32
        /**
         * 证件类型名称
         */
        cardTypeName?: string;
        /**
         * 地址
         */
        contactAddress?: string;
        /**
         * 脱敏证件号码
         */
        desensitizationCardNumber?: string;
        /**
         * 脱敏电子邮箱
         */
        desensitizationEmail?: string;
        /**
         * 脱敏手机号
         */
        desensitizationPhone?: string;
        /**
         * 电子邮箱
         */
        email?: string;
        /**
         * 职业等级
         */
        jobLevel?: string;
        /**
         * 职业代码
         */
        jobNum?: string;
        /**
         * 职业文本
         */
        jobText?: string;
        /**
         * 手机号码
         */
        phone?: string;
        /**
         * 居住省市区
         */
        provCityText?: string;
        sex?: number; // int32
        /**
         * 性别展示
         */
        sexText?: string;
    }
    /**
     * OrderDetailDto
     * 保单详情数据
     */
    export interface OrderDetailDto {
        /**
         * 前端忽略 后端使用
         */
        auditStatus?: number; // int32
        /**
         * 前端忽略 后端使用
         */
        endDate?: string; // date-time
        /**
         * 权益保障
         */
        ensureProjects?: OrderEnsureProjectDto[];
        /**
         * 保障期限,直接展示
         */
        guaranteePeriod?: string;
        /**
         * 受益人:1法定受益人 2指定受益人
         */
        insureBeneficiaryType?: number; // int32
        /**
         * 投保单号
         */
        insureNum?: string;
        /**
         * 前端忽略 后端使用
         */
        issueStatus?: number; // int32
        /**
         * 投保人信息
         */
        orderApplicant?: OrderApplicantDto;
        /**
         * 被保人信息
         */
        orderInsureds?: OrderInsuredDto[];
        /**
         * 订单号
         */
        orderNo?: string;
        /**
         * 订单状态 1-待完成 2-待支付 3-已支付 4-已失效
         */
        orderStatus?: number; // int32
        /**
         * 待完成明细状态 1-支付中 2-待签约
         */
        orderToDoStatus?: number; // int32
        /**
         * 前端忽略 后端使用
         */
        payStatus?: number; // int32
        /**
         * 计划id
         */
        planId?: string;
        /**
         * 保单号
         */
        policyNo?: string;
        /**
         * 保单形式: 1电子保单
         */
        policyType?: number; // int32
        /**
         * 产品ID
         */
        productId?: number; // int32
        /**
         * 产品名称
         */
        productName?: string;
        /**
         * 前端忽略 后端使用
         */
        startDate?: string; // date-time
        /**
         * 购买份数
         */
        totalNum?: number; // int32
        /**
         * 总保费
         */
        totalPremium?: string;
    }
    /**
     * OrderEnsureProjectDto
     */
    export interface OrderEnsureProjectDto {
        /**
         * 保障内容说明
         */
        insuredText?: string;
        /**
         * 保障项名称
         */
        projectName?: string;
    }
    /**
     * OrderInsuredDto
     * 被保人信息
     */
    export interface OrderInsuredDto {
        /**
         * 出生日期
         */
        birthdate?: string;
        /**
         * 证件号码
         */
        cardNumber?: string;
        /**
         * 证件有效期
         */
        cardPeriod?: string;
        /**
         * 证件类型
         */
        cardTypeId?: number; // int32
        /**
         * 证件类型名称
         */
        cardTypeName?: string;
        /**
         * 地址
         */
        contactAddress?: string;
        /**
         * 脱敏证件号码
         */
        desensitizationCardNumber?: string;
        /**
         * 脱敏电子邮箱
         */
        desensitizationEmail?: string;
        /**
         * 脱敏手机号
         */
        desensitizationPhone?: string;
        /**
         * 电子邮箱
         */
        email?: string;
        /**
         * 受益人:1法定受益人 2指定受益人
         */
        insureBeneficiaryType?: number; // int32
        /**
         * 受益人类型名称
         */
        insureBeneficiaryTypeName?: string;
        /**
         * 姓名
         */
        insuredCname?: string;
        /**
         * 职业等级
         */
        jobLevel?: string;
        /**
         * 职业代码
         */
        jobNum?: string;
        /**
         * 职业文本
         */
        jobText?: string;
        /**
         * 手机号码
         */
        phone?: string;
        /**
         * 居住省市区
         */
        provCityText?: string;
        /**
         * 投被保人关系id
         */
        relationId?: number; // int32
        /**
         * 投被保人关系名称
         */
        relationName?: string;
        sex?: number; // int32
        /**
         * 性别展示
         */
        sexText?: string;
    }
    /**
     * Pagination«ArticleFrontDto»
     */
    export interface PaginationArticleFrontDto_ {
        appendItems?: {
        };
        /**
         * 第几页，从1开始(同pageNum)
         */
        current?: number; // int32
        items?: ArticleFrontDto[];
        /**
         * 第几页，从1开始
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 跳过多少条数据
         */
        skip?: number; // int32
        /**
         * 总条数
         */
        total?: number; // int64
    }
    /**
     * Pagination«BannerShowDto»
     */
    export interface PaginationBannerShowDto_ {
        appendItems?: {
        };
        /**
         * 第几页，从1开始(同pageNum)
         */
        current?: number; // int32
        items?: BannerShowDto[];
        /**
         * 第几页，从1开始
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 跳过多少条数据
         */
        skip?: number; // int32
        /**
         * 总条数
         */
        total?: number; // int64
    }
    /**
     * Pagination«InsureOrderDto»
     */
    export interface PaginationInsureOrderDto_ {
        appendItems?: {
        };
        /**
         * 第几页，从1开始(同pageNum)
         */
        current?: number; // int32
        items?: InsureOrderDto[];
        /**
         * 第几页，从1开始
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 跳过多少条数据
         */
        skip?: number; // int32
        /**
         * 总条数
         */
        total?: number; // int64
    }
    /**
     * Pagination«ProductFrontHomeDto»
     */
    export interface PaginationProductFrontHomeDto_ {
        appendItems?: {
        };
        /**
         * 第几页，从1开始(同pageNum)
         */
        current?: number; // int32
        items?: ProductFrontHomeDto[];
        /**
         * 第几页，从1开始
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 跳过多少条数据
         */
        skip?: number; // int32
        /**
         * 总条数
         */
        total?: number; // int64
    }
    /**
     * PayOrderDetailDto
     * 支付订单页面订单概要信息
     */
    export interface PayOrderDetailDto {
        /**
         * 银行卡号
         */
        bankAccountNo?: string;
        /**
         * 银行名称
         */
        bankId?: string;
        /**
         * 银行名称
         */
        bankName?: string;
        /**
         * 投保单号加密串
         */
        encryptInsureNum?: string;
        /**
         * 投保单号
         */
        insureNum?: number; // int64
        /**
         * 订单编号
         */
        orderNum?: string;
        /**
         * 订单金额
         */
        orderPremium?: string;
        /**
         * 订单备注
         */
        orderRemark?: string;
        /**
         * 产品名称
         */
        productName?: string;
    }
    /**
     * Product
     */
    export interface Product {
        /**
         * 受益方式 0无，1-法定 2-指定 12-法定和指定 3-配偶
         */
        beneficiaryType?: number; // int32
        /**
         * 产品类别ID
         */
        categoryId?: number; // int32
        /**
         * 渠道：1 官网微信公众号
         */
        channel?: number; // int32
        /**
         * 是否仅限中国税收居民购买，1:是,0:否
         */
        chineseTaxResidentLimit?: number; // int32
        /**
         * 支持的支付方式：1银联、2支付宝、3微信支付、4易宝、5财付通
         */
        companyChargeWay?: string;
        createTime?: string; // date-time
        createUserId?: number; // int32
        createUserName?: string;
        deadline?: string;
        deleted?: number; // int32
        /**
         * 可选的起保日期:开始
         */
        firstDate?: number; // int32
        /**
         * 健康告知
         */
        healthInfo?: string;
        /**
         * 健康告知显示时间：0填写投保信息中，1填写投保信息后
         */
        healthInformPosition?: number; // int32
        /**
         * 产品ID
         */
        id?: number; // int32
        /**
         * 投保地区-地区模板
         */
        insureAreaTemplateId?: number; // int32
        /**
         * 保费计算是否包含生日当天：1是 0否
         */
        insureIncludeBirthday?: number; // int32
        /**
         * 投保流程形式 0通用型 1年金险 2体验版v3（齐欣使用） 3教育金 4停售（废弃） 5价值演示 6新版利益演示
         */
        insurePageType?: number; // int32
        /**
         * 1-可选起保日期,2-固定起保日期,3-起保日期为出单日期
         */
        insureTime?: number; // int32
        /**
         * 被保人年龄计算方式：1=起保日期 2=投保日期
         */
        insuredAgeCalculation?: number; // int32
        /**
         * 是否可投保：1是0否 默认1
         */
        isInsurable?: number; // int32
        /**
         * 是否续保产品：1是0否
         */
        isRenewal?: number; // int32
        /**
         * 职业等级 以逗号分隔
         */
        jobGrade?: string;
        /**
         * 职业模板
         */
        jobTemplateId?: number; // int32
        /**
         * 可选的起保日期:结束
         */
        latestDate?: number; // int32
        /**
         * 产品名称
         */
        name?: string;
        /**
         * 犹豫期限
         */
        periodHesitation?: number; // int32
        /**
         * 产品编码
         */
        productCode?: string;
        /**
         * 产品状态：0待审，1上架，2下架，3停售，4测试
         */
        status?: number; // int32
        updateTime?: string; // date-time
        updateUserId?: number; // int32
        updateUserName?: string;
        /**
         * 价值演示保费递增设置
         */
        valueDemonPremiumRate?: number;
        /**
         * 等待期
         */
        waitHesitation?: number; // int32
    }
    /**
     * ProductAttributeDto
     */
    export interface ProductAttributeDto {
        /**
         * 基础属性
         */
        attribute?: AttributeDto;
        /**
         * 基础配置项的属性ID
         */
        attributeId?: number; // int32
        /**
         * 自动增长主键
         */
        id?: number; // int32
        /**
         * 产品模块ID
         */
        moduleId?: number; // int32
        /**
         * 是否必填：1是0否
         */
        required?: number; // int32
        /**
         * 试算因子ID
         */
        trialGeneId?: number; // int32
    }
    /**
     * ProductAttributeModuleDto
     */
    export interface ProductAttributeModuleDto {
        /**
         * 模块ID
         */
        id?: number; // int32
        /**
         * 是否默认
         */
        isDefault?: number; // int32
        /**
         * 模块Code
         */
        keyCode?: string;
        /**
         * 模块别名
         */
        moduleByName?: string;
        /**
         * 模块描述信息
         */
        moduleDescription?: string;
        /**
         * 投保信息名称
         */
        name?: string;
        /**
         * 产品模块下的属性 (后台配置页面获取模块时该值不返回)
         */
        productAttrs?: ProductAttributeDto[];
        /**
         * 产品模块ID
         */
        productModuleId?: number; // int32
        /**
         * 说明
         */
        remark?: string;
        /**
         * 被保人为本人时的属性 (后台配置页面获取模块时该值不返回)
         */
        selfProductAttrs?: ProductAttributeDto[];
        /**
         * 排序
         */
        sort?: number; // int32
    }
    /**
     * ProductAttributeRestrictDto
     */
    export interface ProductAttributeRestrictDto {
        /**
         * 删除标识 0 未删除  1 已删除
         */
        deleteFlag?: number; // int32
        /**
         * 执行类型：0=满足以下所有条件 1=满足以下任一条件
         */
        executeType?: number; // int32
        /**
         * 约束执行条件
         */
        executes?: ProductAttributeRestrictExecuteDto[];
        /**
         * 自增主键
         */
        id?: number; // int32
        /**
         * 约束名称
         */
        name?: string;
        /**
         * 产品ID
         */
        productId?: number; // int32
        /**
         * 约束结果
         */
        results?: ProductAttributeRestrictResultDto[];
        /**
         * 错误提示语
         */
        tip?: string;
        /**
         * 执行类型：0=一般约束 1=默认约束
         */
        type?: number; // int32
    }
    /**
     * ProductAttributeRestrictExecuteDto
     */
    export interface ProductAttributeRestrictExecuteDto {
        /**
         * 属性ID
         */
        attributeId?: number; // int32
        /**
         * 所限制属性的控件类型 0-下拉框(0),1-日历控件(1),2-同时出现下拉框和日历控件区间(2),3-文本框(3),4-地区控件(4),5-职业控件(5),6-密码控件(6),7-文本(7),8-对话框(8),9-单选框(9),10-复选框(10),11-表格(11),12-富文本(12),13-多行文本(13),18-文件上传控件
         */
        attributeType?: number; // int32
        /**
         * 约束条件：0=大于，1=大于等于，2=小于，3=小于等于，4=不等于，5=等于，6=包含，7=不包含
         */
        conditions?: number; // int32
        /**
         * 自增主键
         */
        id?: number; // int32
        /**
         * 属性keyCode
         */
        keyCode?: string;
        /**
         * 模块ID
         */
        moduleId?: number; // int32
        /**
         * 模块keyCode
         */
        moduleKeyCode?: string;
        /**
         * 约束ID
         */
        restrictId?: number; // int32
        /**
         * 单位 0=无、1=份、2=万元、3=元、4=0元、5=00元、6=000元、7=岁、8=年、9=月、10=天
         */
        unit?: number; // int32
        /**
         * 约束值，多个值以逗号分隔
         */
        value?: string;
    }
    /**
     * ProductAttributeRestrictResultDto
     */
    export interface ProductAttributeRestrictResultDto {
        /**
         * 属性ID
         */
        attributeId?: number; // int32
        /**
         * 所限制属性的控件类型 0-下拉框(0),1-日历控件(1),2-同时出现下拉框和日历控件区间(2),3-文本框(3),4-地区控件(4),5-职业控件(5),6-密码控件(6),7-文本(7),8-对话框(8),9-单选框(9),10-复选框(10),11-表格(11),12-富文本(12),13-多行文本(13),18-文件上传控件
         */
        attributeType?: number; // int32
        /**
         * 0=大于，1=大于等于，2=小于，3=小于等于，4=不等于，5=等于，6=包含，7=不包含，8=提示，9=隐藏，10=正则
         */
        conditions?: number; // int32
        /**
         * 自增主键
         */
        id?: number; // int32
        /**
         * 属性keyCode
         */
        keyCode?: string;
        /**
         * 模块ID
         */
        moduleId?: number; // int32
        /**
         * 模块keyCode
         */
        moduleKeyCode?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 正则约束条件验证失败提示
         */
        remind?: string;
        /**
         * 约束ID
         */
        restrictId?: number; // int32
        /**
         * 单位 0=无、1=份、2=万元、3=元、4=0元、5=00元、6=000元、7=岁、8=年、9=月、10=天
         */
        unit?: number; // int32
        /**
         * 约束值
         */
        value?: string;
    }
    /**
     * ProductFrontDetailDto
     * 移动端产品详情信息
     */
    export interface ProductFrontDetailDto {
        /**
         * 产品类别名称
         */
        categoryName?: string;
        /**
         * 理赔须知
         */
        claimSettlementNotice?: string;
        /**
         * 普通投保须知
         */
        commonInsuranceNotice?: string;
        /**
         * 保障期限：开始的起期
         */
        firstDate?: number; // int32
        /**
         * 产品主键id
         */
        id?: number; // int32
        /**
         * 重要投保须知
         */
        importantInsuranceNotice?: string;
        /**
         * 投保流程形式 0通用型 1年金险 2体验版v3（齐欣使用） 3教育金 4停售（废弃） 5价值演示 6新版利益演示
         */
        insurePageType?: number; // int32
        /**
         * 产品视频封面图url
         */
        interpretationPicUrl?: string;
        /**
         * 产品视频url
         */
        interpretationVideoUrl?: string;
        /**
         * 是否可投保：1是0否
         */
        isInsurable?: number; // int32
        /**
         * 最低保费
         */
        minPremium?: number; // double
        /**
         * 客户告知书url
         */
        notifyFileUrl?: string;
        /**
         * 观察期/等待期
         */
        observationPeriod?: number; // int32
        /**
         * 可投保起期范围
         */
        periodDay?: number; // int32
        /**
         * 犹豫期限
         */
        periodHesitation?: number; // int32
        /**
         * 产品头图url
         */
        picBigMobileUrl?: string;
        /**
         * 保单样本url
         */
        policyFileUrl?: string;
        /**
         * 产品摘要
         */
        productAbstract?: string;
        /**
         * 产品编码
         */
        productCode?: string;
        /**
         * 产品特色
         */
        productDisplayFeature?: string[];
        /**
         * 产品展示信息id
         */
        productDisplayId?: number; // int32
        /**
         * 产品介绍
         */
        productIntroduce?: string;
        /**
         * 产品名称
         */
        productName?: string;
        /**
         * 当前计划id
         */
        productPlanId?: number; // int32
        /**
         * 保障计划列表
         */
        productPlanList?: ProductPlanFrontDto[];
        /**
         * 费率表url
         */
        rateTableFileUrl?: string;
    }
    /**
     * ProductFrontHomeDto
     * 公众号产品列表信息
     */
    export interface ProductFrontHomeDto {
        /**
         * 产品类别名称
         */
        categoryName?: string;
        /**
         * 产品主键id
         */
        id?: number; // int32
        /**
         * 是否可投保：1是0否
         */
        isInsurable?: number; // int32
        /**
         * 最低保费
         */
        minPremium?: number; // double
        /**
         * 产品列表图
         */
        picSmallMobileUrl?: string;
        /**
         * 产品摘要
         */
        productAbstract?: string;
        /**
         * 产品编码
         */
        productCode?: string;
        /**
         * 产品特色
         */
        productDisplayFeature?: string[];
        /**
         * 产品展示信息id
         */
        productDisplayId?: number; // int32
        /**
         * 产品名称
         */
        productName?: string;
    }
    /**
     * ProductMaterialDto
     * 产品条款信息
     */
    export interface ProductMaterialDto {
        /**
         * 条款文件ID
         */
        fileId?: number; // int32
        /**
         * 条款文件名称
         */
        fileName?: string;
        /**
         * 条款文件url
         */
        fileUrl?: string;
        /**
         * 报备文件编号
         */
        filingCode?: string;
        id?: number; // int32
        /**
         * 备案编号
         */
        recordCode?: string;
        /**
         * 条款名称
         */
        title?: string;
        /**
         * 主附险，0主险，1附加险
         */
        type?: number; // int32
    }
    /**
     * ProductMaterialTypeDto
     * 产品条款分组信息
     */
    export interface ProductMaterialTypeDto {
        /**
         * 产品条款信息
         */
        productMaterials?: ProductMaterialDto[];
        /**
         * 主附险，0主险，1附加险
         */
        type?: number; // int32
    }
    /**
     * ProductPlan
     */
    export interface ProductPlan {
        /**
         * 后端使用
         */
        createTime?: string;
        /**
         * 后端使用
         */
        createUserId?: number; // int32
        /**
         * 后端使用
         */
        createUserName?: string;
        current?: number; // int32
        deleted?: number; // int32
        enName?: string;
        encoding?: string;
        id?: number; // int32
        insureEquityType?: number; // int32
        name?: string;
        offset?: number; // int32
        pageSize?: number; // int32
        product?: Product;
        productId?: number; // int32
        sort?: number; // int32
        status?: number; // int32
        /**
         * 后端使用
         */
        updateTime?: string;
        /**
         * 后端使用
         */
        updateUserId?: number; // int32
        /**
         * 后端使用
         */
        updateUserName?: string;
        /**
         * 后端使用
         */
        userCode?: string;
        /**
         * 后端使用
         */
        userId?: number; // int32
        /**
         * 后端使用
         */
        userIp?: string;
        /**
         * 后端使用
         */
        userName?: string;
    }
    /**
     * ProductPlanFrontDto
     * 保障计划信息
     */
    export interface ProductPlanFrontDto {
        /**
         * 计划英文名
         */
        enName?: string;
        /**
         * 计划编码
         */
        encoding?: string;
        /**
         * 计划ID 自增主键
         */
        id?: number; // int32
        /**
         * 计划名称
         */
        name?: string;
        /**
         * 产品ID
         */
        productId?: number; // int32
        /**
         * 排序序号
         */
        sort?: number; // int32
    }
    /**
     * ProductType
     */
    export interface ProductType {
        /**
         * 后端使用
         */
        createTime?: string;
        /**
         * 后端使用
         */
        createUserId?: number; // int32
        /**
         * 后端使用
         */
        createUserName?: string;
        current?: number; // int32
        /**
         * 是否删除
         */
        deleted?: number; // int32
        /**
         * 描述
         */
        description?: string;
        /**
         * 自增主键
         */
        id?: number; // int32
        /**
         * 名称
         */
        name?: string;
        offset?: number; // int32
        pageSize?: number; // int32
        /**
         * 排序号
         */
        sort?: number; // int32
        /**
         * 后端使用
         */
        updateTime?: string;
        /**
         * 后端使用
         */
        updateUserId?: number; // int32
        /**
         * 后端使用
         */
        updateUserName?: string;
        /**
         * 后端使用
         */
        userCode?: string;
        /**
         * 后端使用
         */
        userId?: number; // int32
        /**
         * 后端使用
         */
        userIp?: string;
        /**
         * 后端使用
         */
        userName?: string;
    }
    /**
     * RTrialItem
     */
    export interface RTrialItem {
        basePremium?: string;
        byName?: string;
        coInsuranceDutyId?: number; // int32
        coInsuranceId?: number; // int32
        companyBranchId?: number; // int32
        companyBranchName?: string;
        companyId?: number; // int32
        companyName?: string;
        computableCoverage?: string;
        coverageDescription?: string;
        description?: string;
        display?: boolean;
        displayType?: number; // int32
        englishName?: string;
        fixedCoverage?: string;
        fullPremium?: string;
        hasRestrict?: boolean;
        highPremium?: boolean;
        icon?: string;
        iconMap?: {
            [name: string]: string;
        };
        id?: Number;
        insuranceCode?: string;
        insuranceId?: number; // int32
        insuranceName?: string;
        isMainCoverage?: number; // int32
        keycode?: string;
        name?: string;
        orgName?: string;
        originalPrice?: number; // int64
        premium?: string;
        premiumType?: number; // int32
        protectItemEncoding?: string;
        protectItemId?: number; // int32
        receivedPremium?: string;
        relateCoverageId?: string;
        responsibilityStatement?: string;
        riskControlCoverage?: string;
        rowspan?: number; // int32
        settlementPrice?: number; // int64
        showUnit?: string;
        sort?: number; // int32
        trialItemEncoding?: string;
        trialItemId?: number; // int32
        trialItemType?: number; // int32
        typeName?: string;
        unit?: number; // int32
        unitText?: string;
    }
    /**
     * ReservedDataDto
     * 留资信息
     */
    export interface ReservedDataDto {
        /**
         * 创建时间/留资时间
         */
        createTime?: string; // date-time
        id?: number; // int32
        /**
         * 手机号
         */
        phone?: string;
        /**
         * 产品编码
         */
        productCode?: string;
        /**
         * 产品id
         */
        productId?: number; // int32
        /**
         * 产品名称
         */
        productName?: string;
        /**
         * 用户id
         */
        userId?: number; // int32
        /**
         * 用户名称
         */
        userName?: string;
    }
    /**
     * Resource
     */
    export interface Resource {
        description?: string;
        file?: File;
        filename?: string;
        inputStream?: InputStream;
        open?: boolean;
        readable?: boolean;
        uri?: URI;
        url?: URL;
    }
    /**
     * RestrictDictionary
     */
    export interface RestrictDictionary {
        byname?: string;
        max?: number; // int32
        min?: number; // int32
        showType?: number; // int32
        step?: number; // int32
        subrestrict?: SubrestrictDictionary;
        type?: number; // int32
        unit?: number; // int32
        value?: string;
    }
    /**
     * RestrictGene
     */
    export interface RestrictGene {
        algorithmContextName?: string;
        associateKey?: string;
        coInsuranceGeneId?: number; // int32
        coInsuranceId?: number; // int32
        controlType?: number; // int32
        defaultValue?: string;
        dependGeneKeys?: string;
        description?: string;
        dictionaryList?: RestrictDictionary[];
        display?: boolean;
        enabled?: boolean;
        geneKey?: string;
        key?: string;
        medit?: boolean;
        name?: string;
        notice?: string;
        operDisplay?: boolean;
        protectItem?: boolean;
        protectItemId?: number; // int32
        rangeDic?: RestrictDictionary;
        showDictionaryList?: RestrictDictionary[];
        showUnit?: string;
        sort?: number; // int32
        subHide?: boolean;
        subRestrictGeneList?: RestrictGene[];
        trialGeneName?: string;
        valueType?: number; // int32
    }
    /**
     * SubrestrictDictionary
     */
    export interface SubrestrictDictionary {
        max?: number; // int32
        min?: number; // int32
        unit?: number; // int32
    }
    /**
     * TrialGeneDto
     */
    export interface TrialGeneDto {
        /**
         * 试算因子
         */
        genes?: GeneParam[];
        /**
         * 产品标识
         */
        productId?: number; // int32
        /**
         * 计划标识
         */
        productPlanId?: number; // int32
    }
    /**
     * TrialGeneSaveParam
     * 试算信息保存参数
     */
    export interface TrialGeneSaveParam {
        /**
         * 旧投保单号加密串,修改订单时才会有旧投保单号
         */
        oldSecretInsureNum?: string;
        /**
         * 保费
         */
        premium?: string;
        /**
         * 产品ID
         */
        productId: number; // int32
        /**
         * 计划id
         */
        productPlanId?: string;
        projectCode?: string;
        /**
         * 试算因子
         */
        trialGenes?: string;
    }
    /**
     * TrialInsuredResponse
     * H5试算结果
     */
    export interface TrialInsuredResponse {
        /**
         * 改变的因子
         */
        changeGeneList?: WebGeneParam[];
        /**
         * 试算因子
         */
        geneList?: GeneParamNew[];
        /**
         * 试算价格
         */
        preminumInfo?: TrialPriceResponse;
        /**
         * 产品id
         */
        productId?: number; // int32
        /**
         * 计划id
         */
        productPlanId?: number; // int32
        /**
         * 保障项目
         */
        protectTrialItemList?: RTrialItem[];
    }
    /**
     * TrialPriceResponse
     * 试算结果
     */
    export interface TrialPriceResponse {
        /**
         * 展示用-保费-最终价
         */
        displayPreminum?: number;
        /**
         * 是否可以投保 1表示投保，其他值表示不投保默认为 0 :控制前端是否投保
         */
        isInsure?: number; // int32
        /**
         * 传输用-保费-最终价
         */
        preminum?: number; // int64
        /**
         * 传输用-总保费 = settlementPrice * 缴费年限
         */
        totalPreminum?: number; // int64
    }
    /**
     * TrialSaveTrialDto
     * 试算保存结果
     */
    export interface TrialSaveTrialDto {
        /**
         * 投保单号加密串
         */
        encryptInsureNum?: string;
        /**
         * 健康告知编码
         */
        healthNo?: string;
        /**
         * 是否需要健康告知
         */
        needHealth?: boolean;
        /**
         * 是否是暂存单
         */
        tempInsureOrder?: boolean;
        /**
         * 原暂存单或者修改订单的回溯id
         */
        traceId?: string;
    }
    /**
     * URI
     */
    export interface URI {
        absolute?: boolean;
        authority?: string;
        fragment?: string;
        host?: string;
        opaque?: boolean;
        path?: string;
        port?: number; // int32
        query?: string;
        rawAuthority?: string;
        rawFragment?: string;
        rawPath?: string;
        rawQuery?: string;
        rawSchemeSpecificPart?: string;
        rawUserInfo?: string;
        scheme?: string;
        schemeSpecificPart?: string;
        userInfo?: string;
    }
    /**
     * URL
     */
    export interface URL {
        authority?: string;
        content?: {
        };
        defaultPort?: number; // int32
        deserializedFields?: URLStreamHandler;
        file?: string;
        host?: string;
        path?: string;
        port?: number; // int32
        protocol?: string;
        query?: string;
        ref?: string;
        serializedHashCode?: number; // int32
        userInfo?: string;
    }
    /**
     * URLStreamHandler
     */
    export interface URLStreamHandler {
    }
    /**
     * WebGeneParam
     */
    export interface WebGeneParam {
        controlType?: number; // int32
        dictionaryList?: RestrictDictionary[];
        display?: boolean;
        geneKey?: string;
        /**
         * 试算因子key
         */
        key?: string;
        name?: string;
        notice?: string;
        oldValue?: string;
        protectItem?: boolean;
        /**
         * 费率表key
         */
        protectItemId?: number; // int32
        sort?: number; // int32
        subRestrictGeneList?: RestrictGene[];
        /**
         * 试算因子值
         */
        value?: string;
    }
}
