import { loadDataEmployee } from '../actions/types';

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