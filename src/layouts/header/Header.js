import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppBar, Typography,Toolbar} from '@material-ui/core';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            GO-GYM
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
