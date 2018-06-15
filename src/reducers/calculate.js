import {calculate} from '../actions/types';

export const CalculateReducers = (state={},action) =>{
    switch (action.type){
        case calculate:
            return{
                ...state,
                isData: true,
                data: action.payload
            };
        default:
            return state
    }
};
