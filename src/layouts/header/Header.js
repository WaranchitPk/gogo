import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppBar, Typography, Toolbar, Button, Menu, MenuItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Logout} from '../../actions/authen';
import {findName} from '../../actions/users';
import {withRouter} from 'react-router-dom';

import {Exercise_calculate, AdminHeader, MemberHeader} from '../';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
};

class Header extends Component {
    state = {
        anchorEl: null,
        mouseOverButton: false,
        mouseOverMenu: false,
        isOpenDrawer: false
    };
    LogoutHandle = () => {
        this.props.dispatch(Logout())
    };

    componentDidMount() {
        this.props.dispatch(findName());
    }

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };
    openDrawer = () => {
        this.setState({
            isOpenDrawer: true
        })
    };
    closeDrawer = () => {
        this.setState({
            isOpenDrawer: false
        })
    };

    render() {
        const {checkIsLogin, token, name} = this.props;
        const {anchorEl, isOpenDrawer} = this.state;
        return (
            <div style={styles.root}>
                {
                    checkIsLogin === true ? <Login
                            onLogout={this.LogoutHandle}
                            name={name}
                            type={token.userType}
                            stateOpen={anchorEl}
                            isOpen={this.handleClick}
                            isClose={this.handleClose}
                            openDrawer={this.openDrawer}
                            closeDrawer={this.closeDrawer}
                            isOpenDrawer={isOpenDrawer}/>
                        : <NotLogin
                            stateOpen={anchorEl}
                            isOpen={this.handleClick}
                            isClose={this.handleClose}/>
                }
            </div>
        );
    }
}

const Login = ({onLogout, name, type, stateOpen, isOpen, isClose, openDrawer, closeDrawer, isOpenDrawer}) => {
    return (
        <div style={styles.root}>
            {
                type === 1 ? <AdminHeader
                        styles={styles}
                        onLogout={onLogout}
                        isOpen={isOpen}
                        stateOpen={stateOpen}
                        isClose={isClose}/>
                    : <MemberHeader
                        styles={styles}
                        onLogout={onLogout}
                        isOpen={isOpen}
                        stateOpen={stateOpen}
                        isClose={isClose}
                        name={name}
                        openDrawer={openDrawer}
                        closeDrawer={closeDrawer}
                        isOpenDrawer={isOpenDrawer}/>
            }
        </div>
    )
};

//Home
class NotLogin extends Component {
    render() {
        const {stateOpen, isOpen, isClose} = this.props;
        return (
            <div style={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" style={styles.flex}>
                            GO-GYM
                        </Typography>
                        <Exercise_calculate
                            isOpen={isOpen}
                            stateOpen={stateOpen}
                            isClose={isClose}/>
                        <Button color="inherit" component={Link} to='/login'>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        checkIsLogin: state.AuthenReducer.isLogin,
        token: state.AuthenReducer.token,
        name: state.findName.data
    }
};

export default connect(mapStateToProps)(withRouter((Header)));
