import { ExerciseDiaryloadAllData } from './types';
import axios from 'axios';
import { path_API } from '../config';

export const loadAllData = () => (
  dispatch => {
    dispatch({
      type: ExerciseDiaryloadAllData,
      payload: axios.get(`${path_API}/exercise_Diary`)
    })
  }
);

export const createData = (body, dispatch) => {
  axios.post(`${path_API}/exercise_Diary`, {
    ...body
  }).then(() => {
    dispatch(loadAllData())
  })
};

export const updateData = (body, id, dispatch) => {
  axios.put(`${path_API}/exercise_Diary/${id}`, {
    ...body
  }).then(() => {
    dispatch(loadAllData())
  })
};