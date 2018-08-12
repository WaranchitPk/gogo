import { loadDataIncome } from './types';
import axios from 'axios';
import { path_API } from '../config';

export const dataIncome = () => (
  dispatch => {
    dispatch({
      type: loadDataIncome,
      payload: axios.get(`${path_API}/income`)
    })
  }
);

export const createIncome = (body) => {
  return axios.post(`${path_API}/income`, {
    ...body
  })
}