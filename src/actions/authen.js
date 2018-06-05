import FetchData from 'axios';
import {authen_Success,authen_Failed} from './types';

export const authenUser = ({username,password,push}) =>{
    console.log(username,password)
    return dispatch =>{
        return FetchData.post('http://localhost:9999/api/signin',{
            username,password
        }).then(({data})=>{
            if (data.isLogin === true){
                localStorage.setItem('access-token','test');
                alert('Login Success');
                dispatch({
                    type: authen_Success,
                    payload: data.isLogin
                });
                push('/')
            }else{
                alert('Login Failed');
                dispatch({
                    type: authen_Failed,
                    payload: data.isLogin
                });
            }
            // push('/')
        })
    }
};