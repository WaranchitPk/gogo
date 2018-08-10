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
export const authenUser = ({ username, password, push }) => {
  return dispatch => {
    return FetchData.post(`${path_API}/signin`, {
      username, password
    }).then(({ data }) => {
      console.log(typeof(data.token));
      if (data.isLogin === true) {
        localStorage.setItem('access-token', data.token);

        swal("Login Success!", "Hello User", "success").then(() => {
          dispatch({
            type: authen_Success,
            payload: jwtDecode(localStorage.getItem('access-token'))

          });
          push('/')
        });
      } else {
        swal("Login Failed!", "Please Login Again", "error");
        dispatch({
          type: authen_Failed,
          payload: data.isLogin
        });
      }
      push('/')
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