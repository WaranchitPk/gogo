import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Button} from '@material-ui/core';
import {Exercise_calculate} from '../../';
const member = ({styles, onLogout, isOpen, stateOpen, isClose}) => {
    return (
        <div style={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    {/*<Typography variant="title" color="inherit" style={styles.flex}>*/}
                    {/*GO-GYM*/}
                    {/*</Typography>*/}
                    <Button color="inherit" component={Link} to='/' style={styles.flex}>GO-GYM</Button>
                    <Button color="inherit" component={Link} to='/neutrian'>Neutrian</Button>

                    <Button color="inherit" component={Link} to='/history'>History</Button>
                    <Exercise_calculate isOpen={isOpen} stateOpen={stateOpen} isClose={isClose}/>
                    <Button color="inherit" onClick={onLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default member;