import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
// 引入工具插件
import { composeWithDevTools } from 'redux-devtools-extension';

import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';

import { reducer } from './reducer';

export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// 使用makeStore包装，使所有的saga都能在谷歌浏览器redux插件中展示
export const makeStore: MakeStore = (context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore,{
    // 使用immutable序列化与反序列化state
    serializeState: state => state.toJS(),
    deserializeState: state => fromJS(state),    
});