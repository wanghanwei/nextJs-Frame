import { fromJS } from "immutable";
import {
    GET_HOME_LIST
} from './actionTypes';

export const initialState:any = fromJS({
    homeData:{},
});

export default function reducer(state = initialState, action){
    let shopData = {};
    switch (action.type){
        case GET_HOME_LIST:
            shopData = action.payload.isAdd
            ? {
                items: [
                  ...(state.getIn(['homeData', 'items']) || fromJS([])).toJS(),
                  ...action.payload.data.items,
                ],
                current: action.payload.data.currentPage,
                total: action.payload.data.total,
                pageSize: action.payload.data.pageSize,
              }
            : action.payload.data;
          return state.set('homeData', fromJS(shopData));
        default:
            return state;
    }
}