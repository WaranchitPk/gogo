import React from 'react';
import {withRouter} from 'react-router-dom';
import Banner from '../asset/banner.jpg';
import {Grid} from '@material-ui/core';

const styles = {
    img: {
        width: '100%'
    }
};
const Home = () => (
    <Grid container>
        <Grid item xs={12} sm={12}>
            <img src={Banner} alt="" style={styles.img}/>
        </Grid>
    </Grid>
);

export default withRouter(Home);
