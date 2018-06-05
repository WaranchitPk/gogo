import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getTokenInStorage} from "./";

// import {} from './'
export const Authenticate = (WrappedComponent) =>{
    class isLogin extends Component {
        componentWillMount() {
            if (!this.props.authenticate.status) {
                this.props.history.push('/login')
            }
            // console.log(this.)
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticate.status) {
                this.props.history.push('/login')
            }
        }

        render() {
            console.log(this.props);
            return (
                <WrappedComponent/>
            )
        }
    }
    function mapStateToProps(state) {
        return {
            authenticate: state.AuthenReducer
        }
    }
    return connect(mapStateToProps)(isLogin)
};
