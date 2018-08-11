import { combineReducers } from "redux";
import { AuthenReducer } from "./Auth";
import {
  findName,
  createUSer,
  findUserData
} from "./users";
import {
  CalculateReducers,
  CalculateReducer_BMI,
  CalculateReducer_MHR
} from "./calculate";
import { reducer as formReducers } from "redux-form";
import {
  CreateHistoryUserReducer,
  ShowHistoryUserReducer
} from "./history_user";
import { NutrianReducer } from "./nutrian";
import {
  NeutrianAllFoodsReducers
} from "./Neutrians/showAll";
import NeutrianCate from './Neutrians/showCate';
import NeutrialFoods from './Neutrians/showFoods';
import NeutrialSelectFoods from './Neutrians/showFoodFromSelect';
import { loadData ,loadAllData} from './employees';

const reducers = combineReducers({
  AuthenReducer,
  findUserData,
  findName,
  createUSer,
  CalculateReducers,
  formReducers,
  CalculateReducer_BMI,
  CalculateReducer_MHR,
  CreateHistoryUserReducer,
  ShowHistoryUserReducer,
  NutrianReducer,
  NeutrianAllFoodsReducers,
  NeutrianCate,
  NeutrialFoods,
  NeutrialSelectFoods,
  loadData,
  loadAllData
});
export default reducers;
