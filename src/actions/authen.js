import FetchData from 'axios';
import {
  authen_Success,
  authen_Failed,
  user_logout
} from './types';
import swal from 'sweetalert';
import jwtDecode from 'jwt-decode';
import { path_API } from '../config'
import {
  removeTokenINStorage,
  getTokenInStorage
} from '../libs';

//login
export const authenUser = ({ username, password, push, userType }) => {
  return dispatch => {
    return FetchData.post(`${path_API}/signin`, {
      username, password ,userType
    }).then(({ data }) => {
      if (data.isLogin === true) {
        localStorage.setItem('access-token', data.token);

        swal("เข้าสู่ระบบสำเร็จ!", "สวัสดีผู้ใช้", "success").then(() => {
          dispatch({
            type: authen_Success,
            payload: jwtDecode(localStorage.getItem('access-token'))
          });
        });
        push('/')
      } else {
        swal("เข้าสู่ระบบไม่สำเร็จ!", "กรุณาเข้าสู่ระบบใหม่อีกครั้ง", "error");
        dispatch({
          type: authen_Failed,
          payload: data.isLogin
        });
        // push('/login')
      }

    })
  }
};

//logout
export const Logout = push => {
  return dispatch => {
    removeTokenINStorage();
    dispatch({
      type: user_logout
    });
    push('/')
  }
};