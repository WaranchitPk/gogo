import {calculate} from './types';
import {bmr_Calculate,tdee_calculate} from '../libs';

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
            })
        })
    }
};