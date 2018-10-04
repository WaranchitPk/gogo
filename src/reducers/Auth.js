import {authen_Success,authen_Failed,user_logout} from '../actions/types';

export function AuthenReducer(state={},action) {
    switch (action.type){
        case authen_Success:
            return {
                ...state,
                token: action.payload,
                isLogin: true
            };
        case authen_Failed:
            return {
                ...state,
                token: null,
                isLogin: false
            };
        case user_logout:
            return {
                ...state,
                token: null,
                isLogin: false
            };
        default:
            return state
    }
}