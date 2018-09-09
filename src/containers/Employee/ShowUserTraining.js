import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FindDataTraining,
  FindDaraExcerciseDiary,
  updateDataStatus,
  updateAllDataEmployee,
  createDataUserData
} from '../../actions/employees';
import {
  EmployeeShowUserTraining,
  ExerciseDiaryComponent
} from '../../components';
import {
  createData,
  loadAllDataForUpdate,
  loadStatusData,
} from "../../actions/exerciseDiary";
import moment from "moment";

class UserTraining extends Component {
  state = {
    isOpenDialogShowExerciseDiary: false,
    isOpenDialogFormUpdate: false,
    isOpenChangeStatus: false,
    isOpenDialogCreatedData: false,
    diaryDate: new Date(),
    diaryDetail: '',
    diaryRecomend: '',
    diaryStatus: '',
    idDiary: '',
    userId: ''
  };
  handleOpenDialogExerciseDiary = (id) => {
    this.setState({
      isOpenDialogShowExerciseDiary: true,
      userId: id,
    })
    this.props.dispatch(FindDaraExcerciseDiary(id))
  };
  handleCloseDialogExerciseDiary = () => {
    this.setState({
      isOpenDialogShowExerciseDiary: false
    })
  };
  handleChangeStatus = (id) => {
    this.setState({
      isOpenChangeStatus: true,
      idDiary: id
    })
    loadStatusData(id).then(value => {
      this.setState({
        diaryStatus: value.data.result[0].exDiary_status
      })
    })
  };
  handleOpenDialogFormUpdate = (id) => {
    this.setState({
      isOpenDialogFormUpdate: true,
      idDiary: id
    })
    loadAllDataForUpdate(id).then(value => {
      this.setState({
        diaryDate: value.data.result[0].exDiary_date,
        diaryDetail: value.data.result[0].exDiary_details,
        diaryRecomend: value.data.result[0].exDiary_recomend
      })
    })
  };
  handleCloseDialogFormUpdate = () => {
    this.setState({
      isOpenDialogFormUpdate: false
    })
  }
  handleChangeDateDiary = (date) => {
    this.setState({ diaryDate: date });
  };
  handleChangeDataInForm = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  };
  handleCloseDialogUpdate = () => {
    this.setState({
      isOpenChangeStatus: false
    })
  };
  handleOpenDialogCreated = () => {
    this.setState({
      isOpenDialogCreatedData: true,
      diaryDetail: '',
      diaryRecomend: '',
      diaryStatus: '',
    })
  };
  handleCloseDialogCreated = () => {
    this.setState({
      isOpenDialogCreatedData: false
    })
  };
  handleSubmitUpdate = () => {
    const { diaryStatus, idDiary, userId } = this.state;
    const { dispatch } = this.props;
    const bodyStatus = {
      status: diaryStatus
    };
    updateDataStatus(bodyStatus, idDiary, dispatch, userId);
    this.setState({
      isOpenChangeStatus: false
    });
  };
  handleSubmitUpdateAllData = () => {
    const { diaryDate, diaryDetail, idDiary, diaryRecomend, userId } = this.state;
    const { dispatch } = this.props;
    this.setState({
      isOpenDialogFormUpdate: false
    });
    const body = {
      date: moment(diaryDate).format('YYYY-MM-DD'),
      details: diaryDetail,
      recomend: diaryRecomend
    };
    updateAllDataEmployee(body, idDiary, dispatch, userId)
  };
  handleSubmitFormDiary = () => {
    const { diaryDate, diaryDetail, diaryStatus,diaryRecomend,userId } = this.state;
    const { dispatch,token} = this.props;
    if (diaryDetail === "" || diaryStatus === "" || diaryRecomend === ""){
      alert('please input')
    } else{
      this.setState({
        isOpenDialogCreatedData: false
      });
      const body = {
        date: moment(diaryDate).format('YYYY-MM-DD'),
        status: diaryStatus,
        details: diaryDetail,
        recomend: diaryRecomend,
        created_by: token.userId,
        by_name: 'เทรนเนอร์'
      };
      createDataUserData(body, dispatch,userId);
    }
    // console.log(`date: ${diaryDate}, Detail: ${diaryDetail}, Status: ${diaryStatus}`)
  };

  componentDidMount() {
    this.props.dispatch(FindDataTraining())

  }

  render() {
    const { dataUserTraining, dataUserExerciseDiary } = this.props;
    const { isOpenDialogShowExerciseDiary, isOpenDialogFormUpdate, diaryDate, diaryDetail, diaryRecomend, isOpenChangeStatus, diaryStatus, isOpenDialogCreatedData } = this.state;
    let resultUserTraining = [];
    let resultDataUserExercise = [];
    if (dataUserTraining !== null && dataUserTraining !== undefined) {
      resultUserTraining = dataUserTraining.data.result;
    }
    if (dataUserExerciseDiary !== null && dataUserExerciseDiary !== undefined) {
      resultDataUserExercise = dataUserExerciseDiary.data.result;
    }
    return (
      <div>
        <EmployeeShowUserTraining
          resultUserTraining={resultUserTraining}
          isOpenDialogExerciseDiary={isOpenDialogShowExerciseDiary}
          onOpenDialogExerciseDiary={this.handleOpenDialogExerciseDiary}
          onCloseDialogExerciseDiary={this.handleCloseDialogExerciseDiary}
          resultUserExerciseDiary={resultDataUserExercise}
          isOpenDialogFormUpdate={isOpenDialogFormUpdate}
          onChangeStatus={this.handleChangeStatus}
          onOpenDialogFormUpdate={this.handleOpenDialogFormUpdate}
          onCloseDialogFormUpdate={this.handleCloseDialogFormUpdate}
          diaryDate={diaryDate}
          onDateFormDiary={this.handleChangeDateDiary}
          diaryDetail={diaryDetail}
          onChangeDataForm={this.handleChangeDataInForm}
          diaryRecomend={diaryRecomend}
          onSubmitFormUpdate={this.handleSubmitUpdateAllData}
          isOpenDialogUpdate={isOpenChangeStatus}
          onCloseDialogUpdate={this.handleCloseDialogUpdate}
          diaryStatus={diaryStatus}
          isOpenDialogCreatedData={isOpenDialogCreatedData}
          DialogCreatedDataOnClose={this.handleCloseDialogCreated}
          onSubmitUpdate={this.handleSubmitUpdate}
          onSubmitFormDiary={this.handleSubmitFormDiary}
          onOpenDialogFormCreateDataDiary={this.handleOpenDialogCreated}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    dataUserTraining: state.loadFindDataUserTrainingReducer.data,
    dataUserExerciseDiary: state.loadFindDataUserDiaryExerciseReducer.data,
    token: state.AuthenReducer.token,
  }
);
export default connect(mapStateToProps)(UserTraining);