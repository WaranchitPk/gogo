import axios from 'axios';
import {createStatHistory_Success,createStatHistory_Failed,showHistoryUser} from './types';
import swal from 'sweetalert';
import {path_API} from '../config';

export const createHistory = (bodyData) => {
    return dispatch => {
        return axios.post(`${path_API}/history`, {
            detail: bodyData.Detail,
            statDate: bodyData.dateStr,
            id: bodyData.userId
        }).then(() => {
            dispatch({
                type:createStatHistory_Success,
                payload: 'Create Success'
            })
            swal('Create Success','','success')
        }).catch(()=>{
            dispatch({
                type: createStatHistory_Failed,
                payload: 'Created Failed'
            })
        })
    }
};
export const showHistory = (id) =>{
    return dispatch =>{
        return axios.get(`${path_API}/history/${id}`)
            .then((data) =>{
                console.log(data)
                dispatch({
                    type:showHistoryUser,
                    payload: data
                })
            })
    }
};