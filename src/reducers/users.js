import {user_find_name, user_create,user_findInform} from '../actions/types';
//data.name
export const findName = (state = {}, action) => {
    switch (action.type) {
        case `${user_find_name}_PENDING`:
            return{
                ...state,
                data: null
            };
        case `${user_find_name}_FULFILLED`:
            return{
                ...state,
                data: action.payload
            };
        case `${user_find_name}_REJECTED`:
            return{
                ...state,
                data: null,
                err: 'err'
            };
        default:
            return state;
    }
};

export const findUserData = (state={},action) =>{
    switch (action.type) {
        case `${user_findInform}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${user_findInform}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${user_findInform}_REJECTED`:
            return {
                ...state,
                data: null,
                err: 'err'
            };
        default:
            return state;
    }
};

export function createUSer(state = {}, action) {
    switch (action.type) {
        case user_create:
            return {
                ...state,
                status: true
            };
        default:
            return state
    }
}