import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect, Switch} from 'react-router-dom';
import {LoginContainer, HomeContainer} from '../containers';
import {Header} from '../layouts';
import {Grid} from '@material-ui/core';
import {Authenticate} from '../libs/AuthenRoute';
import {getTokenInStorage} from '../libs'
const NotIsLogin = true;

class App extends Component {

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item sm={12} xs={12}>
                        <Header/>
                    </Grid>
                </Grid>
                        <Route path="/" component={Authenticate(HomeContainer)} exact />

                        <Route path='/login' render={() =>(
                            getTokenInStorage() ? (<Redirect to='/'/>): (<Route component={LoginContainer}/>)
                        )}/>

            </div>
        );
    }
}

App.propTypes = {};

export default App;
