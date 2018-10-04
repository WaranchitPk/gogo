import {loadFoodFromSelect} from '../../actions/types';

const ShowFoodSelect = (state = {}, action) => {
    switch (action.type) {
        case `${loadFoodFromSelect}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${loadFoodFromSelect}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${loadFoodFromSelect}_REJECTED`:
            return {
                ...state,
                data: 'err'
            };
        default:
            return state;
    }
};
export default ShowFoodSelect;
