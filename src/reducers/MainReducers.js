import {combineReducers} from 'redux';
import {AuthenReducer} from './Auth';
import {findName,createUSer} from './users';
import {CalculateReducers,CalculateReducer_BMI,CalculateReducer_MHR} from './calculate';
import {reducer as formReducers} from 'redux-form';
import {CreateHistoryUserReducer,ShowHistoryUserReducer} from './history_user';
const reducers = combineReducers({
    AuthenReducer,
    findName,
    createUSer,
    CalculateReducers,
    formReducers,
    CalculateReducer_BMI,
    CalculateReducer_MHR,
    CreateHistoryUserReducer,
    ShowHistoryUserReducer
});
export default reducers;