import React from 'react';
import {Route} from 'react-router-dom';
import {
    LoginContainer,
    HomeContainer,
    RegisterContainer,
    CalculatorTDEEContainer,
    CalculatorBMIContainer,
    CalculatorMHRContainer,
    HistoryContainer
} from '../containers';
import {ExerciseRoute} from '../routes';
import {Header} from '../layouts';
import {Grid} from '@material-ui/core';

const App = () => (
    <div>
        <Grid container>
            <Grid item sm={12} xs={12}>
                <Header/>
            </Grid>
        </Grid>
        <Route path='/' component={(HomeContainer)} exact/>
        <Route path='/login' component={LoginContainer}/>
        <Route path='/register' component={RegisterContainer}/>

        <Route path='/history' component={HistoryContainer}/>
        {/*Calculate Route*/}
        <Route path='/calculator_tdee' component={CalculatorTDEEContainer}/>
        <Route path='/calculator_bmi' component={CalculatorBMIContainer}/>
        <Route path='/calculator_mhr' component={CalculatorMHRContainer}/>

        <Route component={ExerciseRoute}/>
    </div>
);


export default App;
