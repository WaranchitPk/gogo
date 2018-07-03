import axios from 'axios';
import {createStatHistory_Success,createStatHistory_Failed,showHistoryUser} from './types';
import swal from 'sweetalert';

export const createHistory = (bodyData) => {
    return dispatch => {
        return axios.post('http://localhost:9999/api/history', {
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
        return axios.get(`http://localhost:9999/api/history/${id}`)
            .then((data) =>{
                console.log(data)
                dispatch({
                    type:showHistoryUser,
                    payload: data
                })
            })
    }
};