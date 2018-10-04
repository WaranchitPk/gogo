import {
    loadDataIncome,
    loadDataExpenses,
    loadYearSelect,
    loadMonthSelect,
    loadDataIncomeCate,
    loadDataIncomeCateChange,
    loadDataExpensesCate,
    loadDataExpensesCateChange
} from './types';
import axios from 'axios';
import {path_API} from '../config';

export const dataIncome = () => (
    dispatch => {
        dispatch({
            type: loadDataIncome,
            payload: axios.get(`${path_API}/income-expenses/incomes`)
        })
    }
);
export const dataIncomeCate = () => (
    dispatch => {
        dispatch({
            type: loadDataIncomeCate,
            payload: axios.get(`${path_API}/income-expenses/incomes/categories`)
        })
    }
);
export const dataIncomeCateChange = (cateId) => (
    dispatch => {
        dispatch({
            type: loadDataIncomeCateChange,
            payload: axios.get(`${path_API}/income-expenses/incomes/categories/${cateId}`)
        })
    }
);
export const createIncome = (body) => {
    return axios.post(`${path_API}/income-expenses/incomes`, {
        ...body
    })
};

export const dataExpenses = () => (
    dispatch => {
        dispatch({
            type: loadDataExpenses,
            payload: axios.get(`${path_API}/income-expenses/expenses`)
        })
    }
);
export const dataExpensesCate = () => (
    dispatch => {
        dispatch({
            type: loadDataExpensesCate,
            payload: axios.get(`${path_API}/income-expenses/expenses/categories`)
        })
    }
);
export const dataExpensesCateChange = (cateId) => (
    dispatch => {
        dispatch({
            type: loadDataExpensesCateChange,
            payload: axios.get(`${path_API}/income-expenses/expenses/categories/${cateId}`)
        })
    }
);
export const createDataExpenses = (body) => {
    return axios.post(`${path_API}/income-expenses/expenses`, {
        ...body
    })
};
export const yearSelect = () => (
    dispatch => {
        dispatch({
            type: loadYearSelect,
            payload: axios.get(`${path_API}/income-expenses/expenses/SelectYear`)
        })
    }
);
export const monthSelect = (year) => (
    dispatch => {
        dispatch({
            type: loadMonthSelect,
            payload: axios.get(`${path_API}/income-expenses/expenses/SelectMonth/${year}`)
        })
    }
)
