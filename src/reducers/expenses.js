import {
  loadDataExpenses,
  loadYearSelect,
  loadMonthSelect
} from '../actions/types';

export const DataExpenses = (state = {}, action) => {
  switch (action.type) {
    case `${loadDataExpenses}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadDataExpenses}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadDataExpenses}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
};
export const YearSelectExpenses = (state = {}, action) => {
  switch (action.type) {
    case `${loadYearSelect}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadYearSelect}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadYearSelect}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
};
export const MonthSelectExpenses = (state = {}, action) => {
  switch (action.type) {
    case `${loadMonthSelect}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadMonthSelect}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadMonthSelect}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
};