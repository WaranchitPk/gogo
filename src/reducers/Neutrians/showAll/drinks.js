import { loadNeutriansAllDrinks } from "../../../actions/types";

const ShowNeutrianAllDrinks = (state = {}, action) => {
  switch (action.type) {
    case `${loadNeutriansAllDrinks}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadNeutriansAllDrinks}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadNeutriansAllDrinks}_REJECTED`:
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
export default ShowNeutrianAllDrinks;
