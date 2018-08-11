import { loadDataEmployee,loadAllDataEmployee} from '../actions/types';
//load data fName lName status
export const loadData = (state = {}, action) => {
  switch (action.type) {
    case `${loadDataEmployee}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadDataEmployee}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadDataEmployee}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
};
//load All Data
export const loadAllData = (state = {}, action) => {
  switch (action.type) {
    case `${loadAllDataEmployee}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadAllDataEmployee}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadAllDataEmployee}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
}