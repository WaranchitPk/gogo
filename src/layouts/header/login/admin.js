import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Button} from '@material-ui/core';
import {Exercise_calculate} from '../../';

const admin = ({styles,onLogout,isOpen,stateOpen,isClose}) => {
    return (
        <div style={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={Link} to='/' style={styles.flex}>GO-GYM</Button>
                    <Exercise_calculate
                        isOpen={isOpen}
                        stateOpen={stateOpen}
                        isClose={isClose}/>
                    <Button color="inherit" component={Link} to='/register'>Register</Button>
                    <Button color="inherit" onClick={onLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default admin;
