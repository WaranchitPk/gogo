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
  AdminIncomeContainer,
  AdminExpensesContainer,
  PromotionContainer,
  CalculatorContainer,
  NeutrianContainer,
  ExerciseDiaryContainer,
  EmployeeShowUserForChooseContainer,
  EmployeeShowUserTrainingContainer,
  TrainingEquipmentContainer,
  Pricing_AdminContainer
} from '../containers';

import {
  ExerciseRoute,
  NeutrianRoute
} from '../routes';
import './App.css';
import { Header } from '../layouts';
import { Grid } from '@material-ui/core';
import { hot } from 'react-hot-loader';
import { Authenticate } from '../libs/AuthenRoute';
import Promotions from "../containers/Pricing";

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
    <Route path='/pricing' component={Promotions}/>
    {/*Calculate Route*/}
    <Route path='/calculator_tdee' component={CalculatorTDEEContainer}/>
    <Route path='/calculator_bmi' component={CalculatorBMIContainer}/>
    <Route path='/calculator_mhr' component={CalculatorMHRContainer}/>
    {/* Exercise */}
    <Route component={ExerciseRoute}/>

    <Route path='/calculator' component={CalculatorContainer}/>
    {/*Private Route*/}

    {/*Employee*/}
    {/*show User*/}
    <Route path='/employee/showUser' component={Authenticate(EmployeeShowUserForChooseContainer)}/>
    <Route path='/employee/showUserTraining' component={Authenticate(EmployeeShowUserTrainingContainer)}/>
    {/*Profile*/}
    <Route path='/Profile' component={Authenticate(ProfileContainer)}/>
    <Route path='/register' component={Authenticate(RegisterContainer)}/>
    {/* Neutrian */}
    <Route path="/neutrian" component={Authenticate(NeutrianContainer)}/>
    {/* History */}
    <Route path='/history' component={Authenticate(HistoryContainer)}/>
    <Route path='/TrainingEquipment' component={Authenticate(TrainingEquipmentContainer)}/>
    {/*Admin Route*/}
    <Route path='/admin/neutrian' component={Authenticate(AdminNeutrianContainer)}/>
    <Route path='/admin/employee' component={Authenticate(AdminEmployeeContainer)}/>
    <Route path='/admin/incomes_expenses/income' component={Authenticate(AdminIncomeContainer)}/>
    <Route path='/admin/incomes_expenses/expenses' component={Authenticate(AdminExpensesContainer)}/>
    <Route path='/ExerciseDiary/showData' component={ExerciseDiaryContainer}/>
    <Route path='/admin/pricing_promotion' component={Pricing_AdminContainer}/>
  </div>
);


export default hot(module)(App);
