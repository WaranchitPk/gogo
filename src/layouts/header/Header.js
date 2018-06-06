import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppBar, Typography,Toolbar,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Logout} from '../../actions/authen';
import {findName} from '../../actions/users';
import {withRouter,Redirect} from 'react-router-dom';
const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
};
class Header extends Component {
    LogoutHandle = () =>{
        this.props.dispatch(Logout())
    };
    componentDidMount(){
            this.props.dispatch(findName());

    }

    render() {
        const {checkIsLogin,token,name} = this.props;
        return (
            <div style={styles.root}>
                {
                    checkIsLogin === true ? <Login
                        onLogout={this.LogoutHandle}
                        name={name}/> : <NotLogin />
                }
            </div>
        );
    }
}

class Login extends Component{
    render(){
        const {onLogout,name} = this.props;
        return(
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
        )
    }
}
class NotLogin extends Component{
    render() {
        return (
            <div style={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" style={styles.flex}>
                            GO-GYM
                        </Typography>
                        <Button color="inherit" component={Link} to='/login'>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        checkIsLogin: state.AuthenReducer.isLogin,
        token: state.AuthenReducer.token,
        name: state.findName.name
    }
}
export default connect(mapStateToProps)(withRouter((Header)));
