import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/MainReducers';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {getTokenInStorage} from './libs';
import {authen_Success} from '../src/actions/types';
import jwtDecode from 'jwt-decode';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

const store = createStore(reducers,applyMiddleware(promiseMiddleware(),thunk));

const checkIsLogin = getTokenInStorage();

if (checkIsLogin) {
    const token = jwtDecode(checkIsLogin);
    store.dispatch({
        type: authen_Success,
        payload: token
    });
    console.log('login Success')
}else{
    console.log('no login')
}
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <App/>
            </MuiPickersUtilsProvider>
        </Router>
    </Provider>,
    document.getElementById('root'));
