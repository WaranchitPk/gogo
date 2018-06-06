import {user_find_name,user_create} from '../actions/types';

export function findName(state={},action) {
    switch (action.type){
        case user_find_name:
            return {
                ...state,
                name: action.payload
            };
        default:
            return state
    }
}
export function createUSer(state={},action) {
    switch (action.type){
        case user_create:
            return {
                ...state,
                status: true
            };
        default:
            return state
    }
}