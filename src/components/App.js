import React from 'react';
import { Route } from 'react-router-dom';
import {
  LoginContainer,
  HomeContainer,
  RegisterContainer,
  CalculatorTDEEContainer,
  CalculatorBMIContainer,
  CalculatorMHRContainer,
  HistoryContainer,
  ProfileContainer,
  AdminNeutrianContainer,
  AdminEmployeeContainer,
  AdminIncomeContainer
} from '../containers';

import {
  ExerciseRoute,
  NeutrianRoute
} from '../routes';

import { Header } from '../layouts';
import { Grid } from '@material-ui/core';
import { hot } from 'react-hot-loader';
import { Authenticate } from '../libs/AuthenRoute';

const App = () => (
  <div>
    <Grid container>
      <Grid item sm={12} xs={12}>
        <Header/>
      </Grid>
    </Grid>
    {/*Public Route*/}
    <Route path='/' component={(HomeContainer)} exact/>
    <Route path='/login' component={LoginContainer}/>
    {/*Calculate Route*/}
    <Route path='/calculator_tdee' component={CalculatorTDEEContainer}/>
    <Route path='/calculator_bmi' component={CalculatorBMIContainer}/>
    <Route path='/calculator_mhr' component={CalculatorMHRContainer}/>
    {/* Exercise */}
    <Route component={ExerciseRoute}/>


    {/*Private Route*/}
    {/*Profile*/}
    <Route path='/Profile' component={Authenticate(ProfileContainer)}/>
    <Route path='/register' component={Authenticate(RegisterContainer)}/>
    {/* Neutrian */}
    <Route component={NeutrianRoute}/>
    {/* History */}
    <Route path='/history' component={Authenticate(HistoryContainer)}/>
    {/*Admin Route*/}
    <Route path='/admin/neutrian' component={Authenticate(AdminNeutrianContainer)}/>
    <Route path='/admin/employee' component={Authenticate(AdminEmployeeContainer)}/>
    <Route path='/admin/incomes_expenses/income' component={Authenticate(AdminIncomeContainer)}/>
  </div>
);


export default hot(module)(App);
