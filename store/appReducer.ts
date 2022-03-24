import { fromJS } from 'immutable';

const initSate = fromJS({
    app:0,
})

export default function reducer( state = initSate, action){
    switch (action.type){
        case 'App.init':
            return { app: 1 };
        default:
            return state;
    }
}