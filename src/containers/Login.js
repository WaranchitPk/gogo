import React, {Component} from 'react';
import {LoginComponent} from '../components';
import {authenUser} from '../actions/authen';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };

    login = () => {
        if (this.state.email === '' || this.state.password === '') {
            alert('Please Input Email or Password')
        } else {
            const {history: {push}} = this.props;
            const data = {
                ...this.state,
                push
            };
            this.props.dispatch(authenUser(data))
        }
    };

    render() {
        return (
            <div>
                <LoginComponent
                    handleChange={this.handleChange}
                    onSubmit={this.login}/>
            </div>
        );
    }
}

export default connect(null, null)(withRouter(Login));
