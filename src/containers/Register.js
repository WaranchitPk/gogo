import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/users';
import { RegisterComponent } from '../components';
import { withRouter } from 'react-router-dom';

class Register extends Component {

  state = {
    userId: '',
    username: '',
    password: '',
    gender: 'male',
    fName: '',
    lName: '',
    age: '',
    userIdCard: '',
    tel: '',
    month: 1
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const { userId, username, password, fName, lName, tel, age, userIdCard } = this.state;
    if (userId === "", username === "" || password === "" || fName === "" || lName === "" || tel === "" || age === "", userIdCard === "") {
      alert('empty')
    } else {
      const { history: { push } } = this.props;
      const body = {
        ...this.state
      };
      this.props.dispatch(createUser(body, push));
    }
  };

  render() {
    return (
      <div>
        <RegisterComponent
          valueGender={this.state.gender}
          valueMonth={this.state.month}
          valueFname={this.state.fName}
          valueLname={this.state.lName}
          valueTel={this.state.tel}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default connect(null)(withRouter(Register));
