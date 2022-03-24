import { createSelector } from "reselect";
import { initialState } from "./reducer";

const homeListPage = (state)=>{
    return state.get('homeListPage', initialState)
}

// 获取首页列表
export const selectHomeList = createSelector(homeListPage, (state)=>{
    return state.get('homeData').toJS();
})