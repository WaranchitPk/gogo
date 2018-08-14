import { loadDataIncome,loadDataExpenses,loadYearSelect,loadMonthSelect } from './types';
import axios from 'axios';
import { path_API } from '../config';

export const dataIncome = () => (
  dispatch => {
    dispatch({
      type: loadDataIncome,
      payload: axios.get(`${path_API}/income-expenses/incomes`)
    })
  }
);

export const createIncome = (body) => {
  return axios.post(`${path_API}/income-expenses/incomes`, {
    ...body
  })
};

export const dataExpenses = () =>(
  dispatch => {
    dispatch({
      type: loadDataExpenses,
      payload: axios.get(`${path_API}/income-expenses/expenses`)
    })
  }
);
export const createDataExpenses = (body) => {
  return axios.post(`${path_API}/income-expenses/expenses`,{
    ...body
  })
};
export const yearSelect = () => (
  dispatch => {
    dispatch({
      type: loadYearSelect,
      payload:axios.get(`${path_API}/income-expenses/expenses/SelectYear`)
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