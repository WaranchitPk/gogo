import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/users';
import { RegisterComponent } from '../components';
import { withRouter } from 'react-router-dom';

class Register extends Component {
  state = {
    username: '',
    password: '',
    gender: 'male',
    fName: '',
    lName: '',
    age: '',
    tel: '',
    month: 1
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = () => {
    const {username,password,fName,lName,tel,age} = this.state;
    if (username === "" || password === "" || fName === "" || lName === "" || tel === "" || age === ""){
      alert('empty')
    } else{
      const { history: { push } } = this.props;
      const body = {
        ...this.state
      };
      this.props.dispatch(createUser(body, push));
    }

  };

  render() {
    console.log(this.props);
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
