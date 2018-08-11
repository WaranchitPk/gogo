import { loadDataEmployee } from './types';
import axios from 'axios';
import { path_API } from '../config';
import swal from 'sweetalert';
//load data Employee id fname lname
export const loadData = () => (
  dispatch => {
    dispatch({
      type: loadDataEmployee,
      payload: axios.get(`${path_API}/employees`)
    })
  }
);

export const createDate = (body, dispatch, clearState) => {
  axios.post(`${path_API}/employees`, {
    ...body
  }).then(() => {
    swal('เพิ่มข้อมูลสำเร็จ', '', 'success').then(() => {
      clearState;
      dispatch(loadData())
    })

  })
};