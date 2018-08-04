import React, {Component} from 'react';
import {HomeComponent} from '../components';
import {loadNutrianData} from '../actions/nutrian';
import {connect} from 'react-redux';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(loadNutrianData())
    }

    render() {
        return (
            <div>
                <HomeComponent/>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        result: state.NutrianReducer.data
    }
}
export default connect(mapStateToProp)(Home);
