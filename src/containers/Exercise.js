import React, {Component} from 'react';
import {ExerciseComponent} from '../components';

class Exercise extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        console.log(value);
        this.setState({value});
    };

    render() {
        return (
            <div>
                <ExerciseComponent
                    value={this.state.value}
                    handleChange={this.handleChange}/>
            </div>
        );
    }
}

export default Exercise;
