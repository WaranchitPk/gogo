import {createStatHistory_Success,createStatHistory_Failed,showHistoryUser} from '../actions/types';

export const CreateHistoryUserReducer = (state='',action) =>{
    switch (action.type){
        case createStatHistory_Success:
            return{
                ...state,
                status: action.payload
            };
        case createStatHistory_Failed:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state
    }
};
export const ShowHistoryUserReducer = (state='',action) =>{
    switch (action.type){
        case showHistoryUser:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state
    }
};