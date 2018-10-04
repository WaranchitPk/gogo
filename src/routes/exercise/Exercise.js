import React from 'react';
import {Route} from 'react-router-dom';
import {
    ChestsExerciseComponent,
    ArmsExerciseComponent,
    SholdersExerciseComponent,
    BacksExerciseComponent,
    LegsExerciseComponent,
    BellysExerciseComponent
} from '../../components';

import {ExerciseContainer} from '../../containers'

const ExerciseRoute = () => {
    return (
        <div>
            <Route path='/exercise' component={ExerciseContainer}/>
            <Route path='/exercise/chests' component={ChestsExerciseComponent}/>
            <Route path='/exercise/arms' component={ArmsExerciseComponent}/>
            <Route path='/exercise/shoulders' component={SholdersExerciseComponent}/>
            <Route path='/exercise/backs' component={BacksExerciseComponent}/>
            <Route path='/exercise/legs' component={LegsExerciseComponent}/>
            <Route path='/exercise/bellys' component={BellysExerciseComponent}/>
        </div>
    );
};

export default ExerciseRoute;
