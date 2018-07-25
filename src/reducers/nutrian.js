import {
    loadNutrian,
    loadNeutriansAllFoods
} from '../actions/types';

export const NutrianReducer = (state = {}, action) => {
    switch (action.type) {
        case `${loadNutrian}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${loadNutrian}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${loadNutrian}_REJECTED`:
            return {
                ...state,
                data: 'err'
            };
        default:
            return state;
    }
};


// AllFoodsReducer