import {combineReducers} from 'redux';
import {AuthenReducer} from './Auth';
import {findName,createUSer} from './users';
import {CalculateReducers} from './calculate';
const reducers = combineReducers({
    AuthenReducer,
    findName,
    createUSer,
    CalculateReducers
});
export default reducers;