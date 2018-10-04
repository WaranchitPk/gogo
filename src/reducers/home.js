import {
  loadPricing,
  loadPromotionPrice
} from '../actions/types';

export const loadPricingReducer = (state={},action) =>{
  switch (action.type) {
    case `${loadPricing}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadPricing}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadPricing}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
};
export const loadPromotionPriceReducer = (state={},action) =>{
  switch (action.type) {
    case `${loadPromotionPrice}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${loadPromotionPrice}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${loadPromotionPrice}_REJECTED`:
      return {
        ...state,
        data: null,
        err: 'err'
      };
    default:
      return state;
  }
}