import axios from 'axios';
import {
  loadDataShowInHome,
  loadDataSumMachineInHome,
  loadDataForCategoryMachine,
  loadDataFullMachine
} from './types';
import { path_API } from '../config';

export const DataInHome = () => (
  dispatch => {
    dispatch({
      type: loadDataShowInHome,
      payload: axios.get(`${path_API}/training_equipment/home`)
    })
  }
);

export const DaTaSumMachineInHome = () => (
  dispatch => {
    dispatch({
      type: loadDataSumMachineInHome,
      payload: axios.get(`${path_API}/training_equipment/home/sumMachine`)
    })
  }
);

export const DataCateMachine = (id) => (
  dispatch => {
    dispatch({
      type: loadDataForCategoryMachine,
      payload: axios.get(`${path_API}/training_equipment/${id}`)
    })
  }
);

export const DataFullMachine = (id) =>(
  dispatch => {
    dispatch({
      type: loadDataFullMachine,
      payload: axios.get(`${path_API}/training_equipment/alldataMachine/${id}`)
    })
  }
);

export const CreateDataMachine = (body) =>{
  return axios.post(`${path_API}/training_equipment`,{
    ...body
  })
};
