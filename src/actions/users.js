import FetchData from 'axios';
import {user_find_name, user_create, user_logout, user_modifyInform} from './types';
import jwtDecode from "jwt-decode";
import swal from 'sweetalert';
import {path_API} from '../config';
// export const a = () =>{
//     const userId = jwtDecode(localStorage.getItem('access-token')).userId;
//     return dispatch => {
//         if (userId === undefined) {
//             dispatch({
//                 type: user_logout
//             })
//         } else {
//             dispatch({
//                 type: user_findInform,
//                 payload: FetchData.get(`${path_API}/users/${userId}`)
//             })
//         }
//     }
// }

export  const findInfomUser = async () => {
    const userId = jwtDecode(localStorage.getItem('access-token')).userId;
    return FetchData.get(`${path_API}/users/${userId}`);
};

export const findName = () => {
    const TokenId = jwtDecode(localStorage.getItem('access-token')).userId;
    return dispatch => {
        if (TokenId === undefined) {
            dispatch({
                type: user_logout
            })
        } else {
            dispatch({
                type: user_find_name,
                payload: FetchData.get(`${path_API}/users/name/${TokenId}`)
            })
        }
    }
};
export const createUser = (body, push) => {
    const test = {
        ...body,
        type: 3
    }
    return dispatch => {
        return FetchData.post(`${path_API}/users`, {
            ...test
        }).then(() => {
            dispatch({
                type: user_create
            });
            swal('Register Success', '', 'success').then(() => {
                push('/')
            })
        })
    }
};
export const updateData = (body,push) => {
    const userId = jwtDecode(localStorage.getItem('access-token')).userId;
    FetchData.patch(`${path_API}/users/${userId}`,{
        ...body
    }).then(() =>{
        swal('Register Success', '', 'success').then(() => {
            push('/')
        })
    })
};