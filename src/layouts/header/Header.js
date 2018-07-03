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
    };
    LogoutHandle = () => {
        this.props.dispatch(Logout())
    };

    componentDidMount() {
        // this.props.dispatch(findName());
    }

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {checkIsLogin, token, name} = this.props;
        const {anchorEl} = this.state;
        return (
            <div style={styles.root}>
                {
                    checkIsLogin === true ? <Login
                            onLogout={this.LogoutHandle}
                            name={name}
                            type={token.userType}
                            stateOpen={anchorEl}
                            isOpen={this.handleClick}
                            isClose={this.handleClose}/>
                        : <NotLogin
                            stateOpen={anchorEl}
                            isOpen={this.handleClick}
                            isClose={this.handleClose}/>
                }
            </div>
        );
    }
}

class Login extends Component {
    render() {
        const {onLogout, name, type,stateOpen, isOpen, isClose} = this.props;
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
                            isClose={isClose}/>
                }
            </div>
        )
    }
}

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


function mapStateToProps(state) {
    return {
        checkIsLogin: state.AuthenReducer.isLogin,
        token: state.AuthenReducer.token,
        name: state.findName.name
    }
}

export default connect(mapStateToProps)(withRouter((Header)));
