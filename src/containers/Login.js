import React, { Component } from 'react';
import { LoginComponent } from '../components';
import { authenUser } from '../actions/authen';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';

class Login extends Component {
  state = {
    username: '',
    password: '',
    userType: ''
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  };

  login = () => {
    if (this.state.username === '' || this.state.password === '' || this.state.userType === '') {
      swal("กรุณากรอกข้อมูลให้ครบ", "You clicked the button!", "warning");
    } else {
      // console.log({...this.state})
      const { history: { push } } = this.props;
      const data = {
        ...this.state,
        push
      };
      this.props.dispatch(authenUser(data))
    }
  };

  render() {
    const { username, password, userType } = this.state;
    return (
      <div>
        <LoginComponent
          {...this.state}
          handleChange={this.handleChange}
          onSubmit={this.login}/>
      </div>
    );
  }
}

export default connect(null, null)(withRouter(Login));
