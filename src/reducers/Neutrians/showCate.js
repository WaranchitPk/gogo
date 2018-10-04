import {loadNeutrianCate} from '../../actions/types';

const ShowNeutrianCate = (state = {}, action) => {
    switch (action.type) {
        case `${loadNeutrianCate}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${loadNeutrianCate}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${loadNeutrianCate}_REJECTED`:
            return {
                ...state,
                err: "error"
            };
        default:
            return state;
    }
};
export default ShowNeutrianCate;
