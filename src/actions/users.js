import FetchData from 'axios';
import {authen_Success, user_find_name, user_create, user_logout} from './types';
import jwtDecode from "jwt-decode";
import {getTokenInStorage} from '../libs';
import swal from 'sweetalert';

export const findName = () => {
    const token = getTokenInStorage();

    return dispatch => {
        if (token === null){
            dispatch({
                type: user_logout
            })
        } else{
            return FetchData.get(`http://localhost:9999/api/users/${token.userId}`)
                .then(data => {
                    console.log(data.data.name);
                    dispatch({
                        type: user_find_name,
                        payload: data.data.name
                    });
                })
        }
    }
};
export const createUser = (body, push) => {
    const test = {
        ...body,
        type: 3
    }
    console.log(test);
    return dispatch => {
        return FetchData.post('http://localhost:9999/api/users', {
            ...test
        }).then(() => {
            dispatch({
                type: user_create
            });
            swal('Register Success','','success').then(()=>{
                push('/')
            })
        })
    }
};