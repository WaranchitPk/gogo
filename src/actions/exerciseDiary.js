import { ExerciseDiaryloadAllData } from './types';
import axios from 'axios';
import { path_API } from '../config';
import jwtDecode from "jwt-decode";

export const loadAllData = () => (
  dispatch => {
    if (localStorage.getItem('access-token') === null) {
      return '';
    } else {
      const userId = jwtDecode(localStorage.getItem('access-token')).userId;
      dispatch({
        type: ExerciseDiaryloadAllData,
        payload: axios.get(`${path_API}/exercise_Diary/${userId}`)
      })
    }
  }
);
export const loadStatusData = (diaryId) => {
  return axios.get(`${path_API}/exercise_Diary/findStatus/${diaryId}`)
};
export const loadAllDataForUpdate = (diaryId) => {
  return axios.get(`${path_API}/exercise_Diary/findAllData/${diaryId}`)
};
export const updateStatus = () => {

}
export const createData = (body, dispatch) => {
  if (localStorage.getItem('access-token') === null) {
    return '';
  } else {
    const userId = jwtDecode(localStorage.getItem('access-token')).userId;
    axios.post(`${path_API}/exercise_Diary`, {
      ...body,
      userId: userId
    }).then(() => {
      dispatch(loadAllData())
    })
  }
};
//status
export const updateData = (body, id, dispatch) => {
  axios.put(`${path_API}/exercise_Diary/${id}`, {
    ...body
  }).then(() => {
    dispatch(loadAllData())
  })
};
//all data
export const updateAllData = (body, id, dispatch) => {
  if (localStorage.getItem('access-token') === null) {
    return '';
  } else {
    const userType = jwtDecode(localStorage.getItem('access-token')).userType;
    axios.put(`${path_API}/exercise_Diary/updateAllData/${id}`, {
      ...body,
      userType: userType
    }).then(() => {
      dispatch(loadAllData())
    })
  }
};