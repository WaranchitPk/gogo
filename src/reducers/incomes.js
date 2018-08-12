import {
  loadDataIncome
} from '../actions/types';

export const DataIncome = (state = {}, action) => {
  switch (action.type) {
    case `${loadDataIncome}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadDataIncome}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadDataIncome}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
}