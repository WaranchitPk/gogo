import {
  loadDataEmployee,
  loadAllDataEmployee
} from './types';
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
//create Data Employee
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
//show All Data Employee
export const findAllData = (id) => (
  dispatch => {
    dispatch({
      type: loadAllDataEmployee,
      payload: axios.get(`${path_API}/employees/${id}`)
    })
  }
);

//show data For update
export const showDataForUpdate = (id) => {
  return axios.get(`${path_API}/employees/${id}`)
};

//update data employee
export const UpdateDataEmp = (body, id, dispatch) => {
  axios.patch(`${path_API}/employees/${id}`, {
    ...body
  }).then(() => {
    swal('แก้ไขข้อมูลสำเร็จ', '', 'success').then(() => {
      dispatch(loadData())
    })
  })
};

//delete data employee
export const DeleteDataEmp = (id, dispatch) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        axios.delete(`${path_API}/employees/${id}`)
          .then(() => dispatch(loadData()))
      } else {
        swal("Your imaginary file is safe!");
      }
    });
}