import {loadNeutrianCate} from '../../actions/types';

const ShowNeutrianCate = (state = {}, action) => {
    switch (action.type) {
        case `${loadNeutrianCate}_PENDING`:
            return {
                ...state,
                data: null
            };
            break;
        case `${loadNeutrianCate}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
            break;
        case `${loadNeutrianCate}_REJECTED`:
            return {
                ...state,
                err: "error"
            };
            break;
        default:
            return state;
    }
};
export default ShowNeutrianCate;
