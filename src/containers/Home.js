import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {HomeComponent} from '../components';
class Home extends Component {
    render() {
        return (
            <div>
                <HomeComponent />
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
