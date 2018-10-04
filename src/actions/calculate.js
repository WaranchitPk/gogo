import {calculate,calculate_bmi,calculate_mhr} from './types';
import {bmr_Calculate,tdee_calculate,bmi_Calculate,bmi_status} from '../libs';

export const unmountValueCal = () =>(
  dispatch => {
    dispatch({
      type: calculate,
      payload: ""
    })
  }
);
export const CalBMR_TDEE = (gender,height,weight,age,activity) =>{
    return dispatch => {
        const bmr = new Promise((resolve) => {
            const resultBmr = bmr_Calculate(gender, height, weight, age);
            resolve(resultBmr)
        });
        bmr.then((bmr) => {
            const Tdee = tdee_calculate(activity, bmr);
            const data = {
                resultBmr: bmr,
                resultTdee: +Tdee
            };
            dispatch({
                type: calculate,
                payload: data
            });
            CalMHR(+age)
        })
    }
};
export const CalBMI = (height,weight) =>{
    return dispatch =>{
        const bmi = new Promise((resolve) =>{
            const resultBmi = bmi_Calculate(height,weight);
            resolve(resultBmi)
        });
        bmi.then((result)=>{
            const resultBMI = {
                data: result,
                status: bmi_status(result)
            };
            dispatch({
                type: calculate_bmi,
                payload: resultBMI
            })
        });

    }
};
export const CalMHR = (age) =>{
    return dispatch =>{
        const mhr = 220- age;
        dispatch({
            type: calculate_mhr,
            payload: mhr
        })
    }
} ;