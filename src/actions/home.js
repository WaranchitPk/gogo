import {loadPromotionPrice,loadPricing} from './types';
import axios from 'axios';
import {path_API} from '../config';

//load Data Pricing And Promotion Price
export const loadPricingData = () =>(
  dispatch => {
    dispatch({
      type: loadPricing,
      payload: axios.get(`${path_API}/home/pricing`)
    });
    dispatch({
      type: loadPromotionPrice,
      payload: axios.get(`${path_API}/home/pricing/promotion`)
    });
  }
);