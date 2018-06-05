import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getTokenInStorage} from '../libs';
import {Redirect,withRouter} from 'react-router-dom';
class Home extends Component {

    render() {

        return (
            <div>
                Home Page
            </div>
        );
    }
}

Home.propTypes = {};

export default withRouter(Home);
