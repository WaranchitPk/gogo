import React, { Component } from 'react';
import { HomeComponent } from '../components';
import { loadNutrianData } from '../actions/nutrian';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(loadNutrianData())
  }

  render() {
    let userType = "";

    if (this.props.token !== null && this.props.token !== undefined) {
      if (this.props.token.userType === 1) {
        userType = this.props.token.userType
      } else {
        userType = ""
      }
    } else {
      userType = ""
    }

    return (
      <div>
        <HomeComponent checktypeUser={userType}/>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    result: state.NutrianReducer.data,
    token: state.AuthenReducer.token,
  }
}
export default connect(mapStateToProp)(Home);
