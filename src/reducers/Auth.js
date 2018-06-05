import {authen_Success,authen_Failed} from '../actions/types';

export function AuthenReducer(state={},action) {
    switch (action.type){
        case authen_Success:
            return {
                ...state,
                status: action.payload
            };
        case authen_Failed:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state
    }
}