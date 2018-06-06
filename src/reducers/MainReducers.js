import {combineReducers} from 'redux';
import {AuthenReducer} from './Auth';
import {findName,createUSer} from './users';
const reducers = combineReducers({
    AuthenReducer,
    findName,
    createUSer
});
export default reducers;