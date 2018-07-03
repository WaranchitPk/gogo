import React, {Component} from 'react';
import {MHR_Calculate} from '../../components';
import {CalMHR} from '../../actions/calculate';
import {connect} from 'react-redux';

class Calculate_MHR extends Component {
    state = {
        age: ''
    };

    handleChange = (event) => {
        this.setState({
            age: event.target.value
        })
    };

    onSubmit = () => {
        const {age} = this.state;
        this.props.dispatch(CalMHR(+age))
    };

    render() {
        return (
            <div>
                <MHR_Calculate
                    handleChange={this.handleChange}
                    onSubmit={this.onSubmit}
                    result={this.props.data.data}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.CalculateReducer_MHR
    }
};

export default connect(mapStateToProps)(Calculate_MHR);
