import { loadNeutriansAllDessert } from "../../../actions/types";

const ShowNeutrianAllDesserts = (state = {}, action) => {
  switch (action.type) {
    case `${loadNeutriansAllDessert}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadNeutriansAllDessert}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadNeutriansAllDessert}_REJECTED`:
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
export default ShowNeutrianAllDesserts;
