import {
    loadNeutriansAllFoods,
  } from "../../../actions/types";
  
const ShowNeutrianAllFoods = (state = {}, action) => {
    switch (action.type) {
      case `${loadNeutriansAllFoods}_PENDING`:
        return {
          ...state,
          data: null
        };
      case `${loadNeutriansAllFoods}_FULFILLED`:
        return {
          ...state,
          data: action.payload
        };
      case `${loadNeutriansAllFoods}_REJECTED`:
        return {
          ...state,
          err: "error"
        };
        break;
      default:
        return state;
        break;
    }
  };
  export default ShowNeutrianAllFoods;