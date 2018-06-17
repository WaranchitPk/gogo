import React from 'react';
import {Route} from 'react-router-dom';
import {ChestsExerciseComponent} from '../../components';
import {ExerciseContainer} from '../../containers'

const ExerciseRoute = () => {
    return (
        <div>
            <Route path='/exercise' component={ExerciseContainer}/>
            <Route path='/exercise/chests' component={ChestsExerciseComponent}/>
        </div>
    );
};

export default ExerciseRoute;
