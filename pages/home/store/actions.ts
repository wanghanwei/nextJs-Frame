import Services from "services";

export async function getProductList(payload) {
    const {current,pageSize,productName} = payload
    const result = await Services.Product.getProductFrontPageUsingGET.request({
        query:{
            current,
            pageSize,
            productName
        }
    });
    return result.data || null;

}