import { loadDataEmployee,loadAllDataEmployee,loadDataUserForChoose,loadFindDataUserTraining,loadFindDataUserDiaryExercise} from '../actions/types';
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

//load data user for choose
export const loadDataUserForChooseReducer = (state = {}, action) => {
  switch (action.type) {
    case `${loadDataUserForChoose}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadDataUserForChoose}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadDataUserForChoose}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
}

//find User Training
export const loadFindDataUserTrainingReducer = (state = {}, action) => {
  switch (action.type) {
    case `${loadFindDataUserTraining}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadFindDataUserTraining}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadFindDataUserTraining}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
};

export const loadFindDataUserDiaryExerciseReducer = (state = {}, action) => {
  switch (action.type) {
    case `${loadFindDataUserDiaryExercise}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadFindDataUserDiaryExercise}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadFindDataUserDiaryExercise}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
};