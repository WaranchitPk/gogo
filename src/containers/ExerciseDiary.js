import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  loadAllData,
  createData,
  updateData,
  loadStatusData,
  loadAllDataForUpdate,
  updateAllData
} from '../actions/exerciseDiary';
import { ExerciseDiaryComponent } from '../components';
import moment from 'moment';
import jwtDecode from "jwt-decode";

class ExerciseDiary extends Component {
  state = {
    rowsPerPage: 5,
    page: 0,
    isOpenDialogForm: false,
    diaryDate: new Date(),
    diaryDetail: '',
    diaryStatus: "มา",
    isOpenChangeStatus: false,
    idDiary: '',
    isOpenDialogFormUpdate: false
  };

  componentDidMount() {
    this.props.dispatch(loadAllData())
  }

  //change Page in Table Show Data Diary Exercise
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  //Change RowPerPage In Table Show Data Diary Exercise
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  //Open Dialog Create Form
  handleOpenDialogCreated = () => {
    this.setState({
      isOpenDialogForm: true
    })
  };
  //Close Dialog Create Form
  handleCloseDialogCreated = () => {
    this.setState({
      isOpenDialogForm: false
    })
  };

  //Close Dialog Update Status
  handleCloseDialogUpdate = () => {
    this.setState({
      isOpenChangeStatus: false
    })
  };
  //Change Date Form
  handleChangeDateDiary = (date) => {
    this.setState({ diaryDate: date });
  };
  //Change Data In Form
  handleChangeDataInForm = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  };
  //On Change status Open Dialog
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
  //Open Dialog Form Update
  handleOpenDialogFormUpdate = (id) => {
    this.setState({
      isOpenDialogFormUpdate: true,
      idDiary: id
    })
    loadAllDataForUpdate(id).then(value => {
      this.setState({
        diaryDate: value.data.result[0].exDiary_date,
        diaryDetail: value.data.result[0].exDiary_details,
      })
    })
  };
  //Close Dialog Form Update
  handleCloseDialogFormUpdate = () => {
    this.setState({
      isOpenDialogFormUpdate: false
    })
  }
  //onSUbmitUpdateAllData
  handleSubmitUpdateAllData = () => {
    const { diaryDate, diaryDetail, idDiary } = this.state;
    const { dispatch } = this.props;
    this.setState({
      isOpenDialogFormUpdate: false
    });
    const body = {
      date: moment(diaryDate).format('YYYY-MM-DD'),
      details: diaryDetail,
    };
    updateAllData(body, idDiary, dispatch)
  };
  //On Submit form Update Diary
  handleSubmitUpdate = () => {
    const { diaryStatus, idDiary } = this.state;
    const { dispatch } = this.props;
    const bodyStatus = {
      status: diaryStatus
    };
    updateData(bodyStatus, idDiary, dispatch);
    this.setState({
      isOpenChangeStatus: false
    });
  };

  //On Submit form Diary
  handleSubmitFormDiary = () => {
    const { diaryDate, diaryDetail, diaryStatus } = this.state;
    const { dispatch ,token: { userId },name} = this.props;
    this.setState({
      isOpenDialogForm: false
    });
    const body = {
      date: moment(diaryDate).format('YYYY-MM-DD'),
      status: diaryStatus,
      details: diaryDetail,
      created_by: userId,
      by_name: 'ผู้ใช้'
    };
    console.log(body)
    createData(body, dispatch);
    // console.log(`date: ${diaryDate}, Detail: ${diaryDetail}, Status: ${diaryStatus}`)
  };

  render() {
    const { page, rowsPerPage, isOpenDialogForm, diaryDate, diaryDetail, diaryStatus, isOpenChangeStatus, isOpenDialogFormUpdate } = this.state;
    const { AllData } = this.props;
    let resultDataExerciseDiary = [];
    let resultDataExerciseDiaryLength = '';
    if (AllData !== null && AllData !== undefined) {
      resultDataExerciseDiary = AllData.data.result;
      resultDataExerciseDiaryLength = AllData.data.result.length;
    }
    return (
      <div>
        <ExerciseDiaryComponent
          TablePage={page}
          TableRowsPerPage={rowsPerPage}
          TableOnChangePage={this.handleChangePage}
          TableOnChangeRowsPerPage={this.handleChangeRowsPerPage}
          dataExerciseDiaryInTable={resultDataExerciseDiary}
          dataExerciseDiaryLengthInTable={resultDataExerciseDiaryLength}
          onOpenDialogCreateData
          isOpenDialogCreatedData={isOpenDialogForm}
          DialogCreatedDataOnOpen={this.handleOpenDialogCreated}
          DialogCreatedDataOnClose={this.handleCloseDialogCreated}
          diaryDate={diaryDate}
          onDateFormDiary={this.handleChangeDateDiary}
          diaryDetail={diaryDetail}
          onChangeDataForm={this.handleChangeDataInForm}
          diaryStatus={diaryStatus}
          onSubmitFormDiary={this.handleSubmitFormDiary}
          onChangeStatus={this.handleChangeStatus}
          isOpenDialogUpdate={isOpenChangeStatus}
          onCloseDialogUpdate={this.handleCloseDialogUpdate}
          onSubmitUpdate={this.handleSubmitUpdate}
          isOpenDialogFormUpdate={isOpenDialogFormUpdate}
          onOpenDialogFormUpdate={this.handleOpenDialogFormUpdate}
          onCloseDialogFormUpdate={this.handleCloseDialogFormUpdate}
          onSubmitFormUpdate={this.handleSubmitUpdateAllData}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    AllData: state.ExerciseDiaryLoadAllData.data,
    token: state.AuthenReducer.token,
    name: state.findName.data
  }
);
export default connect(mapStateToProps)(ExerciseDiary);