import {calculate,calculate_bmi,calculate_mhr} from '../actions/types';

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
export const CalculateReducer_BMI = (state = {},action) =>{
    switch (action.type){
        case calculate_bmi:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
};
export const CalculateReducer_MHR = (state={},action) =>{
    switch (action.type){
        case calculate_mhr:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state
    }
}
