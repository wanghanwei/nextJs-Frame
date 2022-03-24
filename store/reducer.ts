import { AnyAction } from 'redux';
import { combineReducers } from 'redux-immutable';
import { HYDRATE } from 'next-redux-wrapper';
import { fromJS } from 'immutable';
import HomeReducer from 'pages/home/store/reducer';
import appReducer from './appReducer';

const combinedReducer = combineReducers({
    app:appReducer,
    homeListPage:HomeReducer
})

export const reducer = (state:any , action:AnyAction) =>{
    switch (action.type) {
        case HYDRATE:
            return state.merge(fromJS(action.payload));
        default:
            return combinedReducer(state, action);
    }
}