import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Button} from '@material-ui/core';

const employee = ({styles,onLogout}) => {
    return (
        <div style={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    {/*<Typography variant="title" color="inherit" style={styles.flex}>*/}
                    {/*GO-GYM*/}
                    {/*</Typography>*/}
                    <Button color="inherit" component={Link} to='/' style={styles.flex}>GO-GYM</Button>
                    <Button color="inherit" component={Link} to='/register'>Register</Button>
                    {name}
                    <Button color="inherit" onClick={onLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default employee;