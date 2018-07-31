import axios from 'axios';
import {
    loadNutrian,
    loadNeutriansAllFoods,
    loadNeutrianCate,
    loadFoodsFromMenuID,
    loadFoodFromSelect
} from './types';
import {path_API} from '../config';

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

export const loadNeutrianFoods = (id) =>{
    return dispatch =>{
        dispatch({
            type: loadFoodsFromMenuID,
            payload: axios.get(`${path_API}/nutrian/show/foods/${id}`)
        })
    }
};

export const loadSelectNeutrian = selected =>{
    return dispatch =>{
        dispatch({
            type: loadFoodFromSelect,
            payload: axios.get(`${path_API}/nutrian/show/selectFood/${selected}`)
        })
    }
};