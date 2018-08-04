import {Grid} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import React from 'react';

import Banner from '../asset/banner.jpg';


const styles = {
    img: {
        width: '100%'
    }
};
const Home = () => {
    return (
        <div>
            <Grid container>
            <Grid item xs={12} sm={12}>
                <img src={Banner} alt="" style={styles.img}/>
            </Grid>
        </Grid>
        </div>
    );
};

export default withRouter(Home);
