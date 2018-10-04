import React, {Component} from 'react';
import {BMI_Calculate} from '../../components';
import {connect} from 'react-redux';
import {CalBMI} from '../../actions/calculate'

class Calculate_BMI extends Component {
    state = {
        height: '',
        weight: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onSubmit = () => {
        const {weight, height} = this.state;
        console.log(typeof(+height));
        this.props.dispatch(CalBMI(+height, +weight))
    };

    render() {
        return (
            <div>
                <BMI_Calculate
                    handleChange={this.handleChange}
                    onSubmit={this.onSubmit}
                    result={this.props.result.data}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.CalculateReducer_BMI
    }
};
export default connect(mapStateToProps)(Calculate_BMI);
