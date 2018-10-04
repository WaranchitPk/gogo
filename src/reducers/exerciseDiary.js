import {
  ExerciseDiaryloadAllData,
} from '../actions/types';

export const ExerciseDiaryLoadAllData = (state = {}, action) => {
  switch (action.type) {
    case `${ExerciseDiaryloadAllData}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${ExerciseDiaryloadAllData}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${ExerciseDiaryloadAllData}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
}