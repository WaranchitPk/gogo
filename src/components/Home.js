import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getTokenInStorage} from '../libs';
import {Redirect,withRouter} from 'react-router-dom';
import Banner from '../asset/banner.jpg';
import {Grid} from '@material-ui/core';
const styles = {
    img: {
        width: '100%'
    }
};
class Home extends Component {

    render() {

        return (
            <div>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <img src={Banner} alt="" style={styles.img}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Home.propTypes = {};

export default withRouter(Home);
