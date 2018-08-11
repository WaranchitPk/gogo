import axios from 'axios';
import {
  loadNutrian,
  loadNeutriansAllFoods,
  loadNeutrianCate,
  loadFoodsFromMenuID,
  loadFoodFromSelect,
  createDataFood
} from './types';
import { path_API } from '../config';
import swal from "sweetalert";

export const loadNutrianData = () => {
  return dispatch => {
    dispatch({
      type: loadNutrian,
      payload: axios.get(`${path_API}/nutrian`)
    })
  }
}

export const loadNutrianShowAllFoods = (id) => {
  return dispatch => {
    dispatch({
      type: loadNeutriansAllFoods,
      payload: axios.get(`${path_API}/nutrian/showAll/foods/${id}`)
    })
  }
};


export const loadNeutrianShowCate = (cate) => {
  return dispatch => {
    dispatch({
      type: loadNeutrianCate,
      payload: axios.get(`${path_API}/nutrian/show/${cate}`)
    })
  }
};

export const loadNeutrianFoods = (id) => {
  return dispatch => {
    dispatch({
      type: loadFoodsFromMenuID,
      payload: axios.get(`${path_API}/nutrian/show/foods/${id}`)
    })
  }
};

export const loadSelectNeutrian = selected => {
  return dispatch => {
    dispatch({
      type: loadFoodFromSelect,
      payload: axios.get(`${path_API}/nutrian/show/selectFood/${selected}`)
    })
  }
};

export const createData = (body,dispatch) => {
  axios.post(`${path_API}/nutrian`, {
    ...body
  }).then(_ => {
    swal('เพิ่มข้อมูลสำเร็จ', '', 'success')
    if (body.valueCate === 1) {
      dispatch(loadNutrianShowAllFoods(1))
    } else if (body.valueCate === 2) {
      dispatch(loadNutrianShowAllFoods(2))
    } else if (body.valueCate === 3) {
      dispatch(loadNutrianShowAllFoods(3))
    }
  })
}