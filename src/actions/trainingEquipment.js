import axios from 'axios';
import { loadDataShowInHome,loadDataSumMachineInHome } from './types';
import { path_API } from '../config';

export const DataInHome = () => (
  dispatch => {
    dispatch({
      type: loadDataShowInHome,
      payload: axios.get(`${path_API}/training_equipment/home`)
    })
  }
);

export const DaTaSumMachineInHome = () =>(
  dispatch =>{
    dispatch({
      type: loadDataSumMachineInHome,
      payload: axios.get(`${path_API}/training_equipment/home/sumMachine`)
    })
  }
);