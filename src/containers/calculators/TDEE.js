import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CalBMR_TDEE} from '../../actions/calculate';
import {TDEE_BMR_Calculate} from '../../components';

class Calculate_TDEE extends Component {
    state = {
        gender: 'male',
        age: '',
        height: '',
        weight: '',
        activity: '',
        resultBmr: '',
        resultTdee: ''
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };
    onSubmit = () => {
        const {gender, height, weight, age, activity} = this.state;
        this.props.dispatch(CalBMR_TDEE(gender, height, weight, age, activity))
    };

    render() {
        return (
            <div>
                <TDEE_BMR_Calculate
                    valueGender={this.state.gender}
                    handleChange={this.handleChange}
                    valueActivity={this.state.activity}
                    calculate={this.onSubmit}
                    result={this.props.result.data}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.CalculateReducers
    }
};
export default connect(mapStateToProps)(Calculate_TDEE);
