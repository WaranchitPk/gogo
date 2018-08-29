import {
  loadDataShowInHome,
  loadDataSumMachineInHome,
  loadDataForCategoryMachine,
  loadDataFullMachine
} from '../actions/types';

export const ShowDataInHomeReducer = (state = {}, action) => {
  switch (action.type) {
    case `${loadDataShowInHome}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadDataShowInHome}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadDataShowInHome}_REJECTED`:
      return {
        ...state,
        data: 'err'
      };
    default:
      return state;
  }
};

export const ShowDataSumMachineInHomeReducer = (state = {}, action) => {
  switch (action.type) {
    case `${loadDataSumMachineInHome}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadDataSumMachineInHome}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadDataSumMachineInHome}_REJECTED`:
      return {
        ...state,
        data: 'err'
      };
    default:
      return state;
  }
};


export const ShowDataCateMachineInHomeReducer = (state = {}, action) => {
  switch (action.type) {
    case `${loadDataForCategoryMachine}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadDataForCategoryMachine}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadDataForCategoryMachine}_REJECTED`:
      return {
        ...state,
        data: 'err'
      };
    default:
      return state;
  }
};

export const ShowDataFullMachineReducer = (state = {}, action) => {
  switch (action.type) {
    case `${loadDataFullMachine}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadDataFullMachine}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadDataFullMachine}_REJECTED`:
      return {
        ...state,
        data: 'err'
      };
    default:
      return state;
  }
};