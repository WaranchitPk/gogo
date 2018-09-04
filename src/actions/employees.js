import {
  loadDataEmployee,
  loadAllDataEmployee,
  loadDataUserForChoose,
  loadFindDataUserTraining,
  loadFindDataUserDiaryExercise
} from './types';
import axios from 'axios';
import { path_API } from '../config';
import swal from 'sweetalert';
import jwtDecode from "jwt-decode";
import { loadAllData } from "./exerciseDiary";
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
    title: "ยืนยันการลบ?",
    text: "ลบข้อมูลสมาชิก",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        swal("ยกเลิกการลบข้อมูล", {
          icon: "success",
        });
        axios.delete(`${path_API}/employees/${id}`)
          .then(() => dispatch(loadData()))
      } else {
        swal("ยกเลิกการลบข้อมูล");
      }
    });
};

export const ShowAllUSer = () => (
  dispatch => {
    dispatch({
      type: loadDataUserForChoose,
      payload: axios.get(`${path_API}/employees/ShowUserActive`)
    })
  }
);
export const UpdateStatusTrainingUser = (body,id, dispatch) => {
  axios.put(`${path_API}/employees/UpdateStatusTraining`, {
    userId: body
  }).then(result => {
    dispatch(ShowAllUSer());
    InsertUser(body, id)
  })
};
export const InsertUser = (body,id) => {
  if (localStorage.getItem('access-token') === null) {
    return '';
  } else {
    const empId = id;
    axios.post(`${path_API}/employees/addUser`, {
      userId: body,
      empId: empId
    })
  }
};
export const FindDataTraining = () => {
  if (localStorage.getItem('access-token') === null) {
    return '';
  } else {
    const empId = jwtDecode(localStorage.getItem('access-token')).userId;
    return dispatch => {
      dispatch({
        type: loadFindDataUserTraining,
        payload: axios.get(`${path_API}/employees/findUserTraining/${empId}`)
      })
    }
  }
};

export const FindDaraExcerciseDiary = (id) => (
  dispatch => {
    dispatch({
      type: loadFindDataUserDiaryExercise,
      payload: axios.get(`${path_API}/employees/findChooseDataEmployee/${id}`)
    })
  }
)
//exercise diary
export const updateDataStatus = (body, id, dispatch,userId) => {
  axios.put(`${path_API}/exercise_Diary/${id}`, {
    ...body
  }).then(() => {
    dispatch(FindDaraExcerciseDiary(userId))
  })
};
export const updateAllDataEmployee = (body, id, dispatch,userId) => {
  if (localStorage.getItem('access-token') === null) {
    return '';
  } else {
    const userType = jwtDecode(localStorage.getItem('access-token')).userType;
    axios.put(`${path_API}/exercise_Diary/updateAllData/${id}`, {
      ...body,
      userType: userType
    }).then((result) => {
      dispatch(FindDaraExcerciseDiary(userId))
    })
  }
};
export const createDataUserData = (body, dispatch,userId) => {
  if (localStorage.getItem('access-token') === null) {
    return '';
  } else {
    const userType = jwtDecode(localStorage.getItem('access-token')).userType;
    axios.post(`${path_API}/exercise_Diary`, {
      ...body,
      userId: userId,
      userType: userType
    }).then(() => {
      dispatch(FindDaraExcerciseDiary(userId))
    })
  }
};