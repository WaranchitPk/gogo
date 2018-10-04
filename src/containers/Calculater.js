import React, { Component } from 'react';
import {
  CalculatorComponent
} from '../components';
import {
  CalBMR_TDEE,
  CalMHR,
  CalBMI,
  unmountValueCal
} from '../actions/calculate';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Calculator extends Component {
  state = {
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activity: '',
    resultBmr: '',
    resultTdee: '',
    isOpenDialogShowExercise: false,
    bmi: ''
  };

  handleChangeInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitForm = () => {
    const { gender, height, weight, age, activity } = this.state;
    const { dispatch } = this.props;
    if (gender === "" || height === "" || weight === "" || age === "" || activity === "") {
      swal("กรุณากรอกข้อมูลให้ครบ", "กดปุ่มเพื่อดำเนินการต่อ", "warning");
    } else {
      this.setState({
        gender: '',
        height: '',
        weight: '',
        age: '',
        activity: ''
      });
      dispatch(CalBMR_TDEE(gender, height, weight, age, activity));
      dispatch(CalMHR(+age));
      dispatch(CalBMI(+height, +weight))
    }
  };
  handleOpenDialogShowExercise = () => {
    this.setState({
      isOpenDialogShowExercise: true
    })
  };
  handleCloseDialogShowExercise = () => {
    this.setState({
      isOpenDialogShowExercise: false
    })
  };

  render() {
    const { resultTDEE, resultMHR, resultBMI } = this.props;
    const { isOpenDialogShowExercise } = this.state;
    let tdee = "";
    let bmr = "";
    let mhr = "";
    let bmiData = "";
    let bmiStatus = "";

    if (resultTDEE !== undefined) {
      tdee = resultTDEE.resultTdee;
      bmr = resultTDEE.resultBmr;
    }
    if (resultMHR !== undefined) {
      mhr = resultMHR;
    }
    if (resultBMI !== undefined) {
      bmiData = resultBMI.data;
      bmiStatus = resultBMI.status;
    }
    let type = "";
    if (this.props.token === null || this.props.token === undefined){
      type = "";
    } else{
      type = this.props.token.userType
    }
    return (
      <div>
        <CalculatorComponent
          valueGender={this.state.gender}
          onChangeInput={this.handleChangeInput}
          valueActivity={this.state.activity}
          calculate={this.onSubmitForm}
          resultTdee={tdee}
          resultBmr={bmr}
          resultMhr={mhr}
          resultBmiData={bmiData}
          resultBmiStatus={bmiStatus}
          isOpenDialogShowExercise={isOpenDialogShowExercise}
          onOpenDialogShowExercise={this.handleOpenDialogShowExercise}
          onCloseDialogShowExercise={this.handleCloseDialogShowExercise}
          userType={type}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    resultTDEE: state.CalculateReducers.data,
    resultMHR: state.CalculateReducer_MHR.data,
    resultBMI: state.CalculateReducer_BMI.data,
    token: state.AuthenReducer.token,
  }
)
export default connect(mapStateToProps)(Calculator);