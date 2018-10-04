import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTokenInStorage } from "./";

// import {} from './'
export const Authenticate = (WrappedComponent) => {
  class isLogin extends Component {
    componentWillMount() {
      if (localStorage.getItem('access-token') === null) {
        this.props.history.push('/login')
      }
    }

    componentWillUpdate(nextProps) {
      if (localStorage.getItem('access-token') === null) {
        this.props.history.push('/login')
      }
    }

    render() {
      return (
        <WrappedComponent/>
      )
    }
  }

  return (isLogin)
};
