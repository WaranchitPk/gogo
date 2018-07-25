import axios from 'axios';
import {
    loadNutrian,
    loadNeutriansAllFoods,
    loadNeutriansAllDrinks,
    loadNeutriansAllDessert,
    loadNeutrianCate
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

export const loadNutrianShowAllFoods = () => {
    return dispatch => {
        dispatch({
            type: loadNeutriansAllFoods,
            payload: axios.get(`${path_API}/nutrian/showAll/foods`)
        })
    }
}

export const loadNutrianShowAllDrinks = () => {
    return dispatch => {
        dispatch({
            type: loadNeutriansAllDrinks,
            payload: axios.get(`${path_API}/nutrian/showAll/drinks`)
        })
    }
};

export const loadNutrianShowAllDessert = () => {
    return dispatch => {
        dispatch({
            type: loadNeutriansAllDessert,
            payload: axios.get(`${path_API}/nutrian/showAll/desserts`)
        })
    }
};

export const loadNeutrianShowCate = (cate) => {
    // axios.get(`${path_API}/nutrian/show/${cate}`)
    //     .then((data)=>{
    //         console.log(data);
    //     })
    return dispatch => {
        dispatch({
            type: loadNeutrianCate,
            payload: axios.get(`${path_API}/nutrian/show/${cate}`)
        })
    }
};