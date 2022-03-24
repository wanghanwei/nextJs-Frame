import {put, takeLatest, select} from 'redux-saga/effects';
import Services from 'services';
import { Toast } from 'antd-mobile';
import { INIT_PAGE } from './actionTypes'
import { getProductList } from './actions';
import { GET_HOME_LIST } from './actionTypes';


// 初始化数据
function* initpage(payload){
    Toast.loading('加载中...', 0)
    const data = yield getProductList({ current:1, pageSize:10})
    Toast.hide();
    yield put({
        type: GET_HOME_LIST,
        payload: { data }
    })

}


function* homeSaga(){

    yield takeLatest(INIT_PAGE, initpage)
}


export default homeSaga;