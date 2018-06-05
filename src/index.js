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
// localStorage.setItem('access-token','test1234');
const store = createStore(reducers,applyMiddleware(promiseMiddleware(),thunk));

const checkIsLogin = getTokenInStorage();
if (checkIsLogin) {
    const isLogin = true;
    store.dispatch({
        type: authen_Success,
        payload: isLogin
    })
    console.log('login Success')
}else{
    console.log('no login')
}
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root'));
