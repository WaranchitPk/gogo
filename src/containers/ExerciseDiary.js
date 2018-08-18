import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  loadAllData,
  createData,
  updateData
} from '../actions/exerciseDiary';
import { ExerciseDiaryComponent } from '../components';
import moment from 'moment';

class ExerciseDiary extends Component {
  state = {
    rowsPerPage: 5,
    page: 0,
    isOpenDialogForm: false,
    diaryDate: new Date(),
    diaryDetail: '',
    diaryStatus: "มา",
    isOpenChangeStatus: false,
    idDiary: ''
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
      isOpenChangeStatus: true
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
  //On Change status
  handleChangeStatus = (id) => {
    this.setState({
      isOpenChangeStatus: true,
      idDiary: id
    })
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
    const { dispatch } = this.props;
    this.setState({
      isOpenDialogForm: false
    });
    const body = {
      date: moment(diaryDate).format('YYYY-MM-DD'),
      status: diaryStatus,
      details: diaryDetail,
    };
    createData(body, dispatch);
    // console.log(`date: ${diaryDate}, Detail: ${diaryDetail}, Status: ${diaryStatus}`)
  };

  render() {
    const { page, rowsPerPage, isOpenDialogForm, diaryDate, diaryDetail, diaryStatus, isOpenChangeStatus } = this.state;
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
          onSubmitUpdate={this.handleSubmitUpdate}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    AllData: state.ExerciseDiaryLoadAllData.data
  }
);
export default connect(mapStateToProps)(ExerciseDiary);