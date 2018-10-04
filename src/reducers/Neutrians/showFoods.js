import {loadFoodsFromMenuID, loadNeutrianCate} from '../../actions/types';

const ShowNeutrianFoods = (state={},action) =>{
    switch (action.type) {
        case `${loadFoodsFromMenuID}_PENDING`:
            return{
                ...state,
                data: null
            };
        case `${loadFoodsFromMenuID}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${loadFoodsFromMenuID}_REJECTED`:
            return {
                ...state,
                err: "error"
            };
        default:
            return state;
    }
};
export default ShowNeutrianFoods;