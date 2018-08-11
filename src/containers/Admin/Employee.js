import React, { Component } from 'react';
import {
  loadData,
  createDate
} from '../../actions/employees';
import { connect } from 'react-redux';
import { AdminEmployeeComponent } from '../../components';
import moment from 'moment';

class Employee extends Component {
  state = {
    rowsPerPage: 5,
    page: 0,
    isOpenDialogAdd: false,
    empUsername: '',
    empPassword: '',
    empFname: '',
    empLname: '',
    empBirthDate: new Date(),
    empAge: '',
    empAddress: '',
    empTel: '',
    empSalary: '',
    empStartDate: new Date(),
  };

  componentDidMount() {
    this.props.dispatch(loadData());
  }

  //change page
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  // change row per page
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  //open Dialog Add Employee
  handleOpenDialogAdd = () => {
    this.setState({
      isOpenDialogAdd: true
    })
  };
  //close Dialog Add Employee
  handleCloseDialogAdd = () => {
    this.setState({
      isOpenDialogAdd: false
    })
  };
  //change Input
  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  };
  // Birth date Change
  handleBirthDateChange = (date) => {
    this.setState({ empBirthDate: date });
  };
  //Start date change
  handleStartDateChange = (date) => {
    this.setState({ empStartDate: date })
  };
  //submit form Add
  handleSubmitAddEmp = () => {
    const { empUsername, empPassword, empFname, empLname, empBirthDate, empAge, empAddress, empTel, empSalary, empStartDate } = this.state;
    const { dispatch } = this.props;
    const bodyEmp = {
      user: empUsername,
      pass: empPassword,
      fName: empFname,
      lName: empLname,
      birthDate: moment(empStartDate).format('YYYY-MM-DD'),
      age: empAge,
      address: empAddress,
      tel: empTel,
      salary: empSalary,
      startDate: moment(empBirthDate).format('YYYY-MM-DD'),
      status: 'พนักงาน'
    };
    createDate(bodyEmp, dispatch,this.clearStateAfterSubmit())
  };
  clearStateAfterSubmit = () => {
    this.setState({
      isOpenDialogAdd: false,
      empUsername: '',
      empPassword: '',
      empFname: '',
      empLname: '',
      empBirthDate: new Date(),
      empAge: '',
      empAddress: '',
      empTel: '',
      empSalary: '',
      empStartDate: new Date(),
    })
  }

  render() {
    const { showFnameLname } = this.props;
    const { isOpenDialogAdd } = this.state;
    let dataShowFnameLname = [];
    let lengthDataShowFnameLname = '';
    if (showFnameLname !== null && showFnameLname !== undefined) {
      dataShowFnameLname = showFnameLname.data.result;
      lengthDataShowFnameLname = showFnameLname.data.result.length;
    }
    return (
      <div>
        <AdminEmployeeComponent
          {...this.state}
          showFnameLname={dataShowFnameLname}
          showFnameLnameLength={+lengthDataShowFnameLname}
          onChangePage={this.handleChangePage}
          onChangeRowPage={this.handleChangeRowsPerPage}
          isOpenDialogAdd={isOpenDialogAdd}
          onOpenDialogAdd={this.handleOpenDialogAdd}
          onCloseDialogAdd={this.handleCloseDialogAdd}
          onChangeBirthDate={this.handleBirthDateChange}
          onChangeInput={this.handleChangeInput}
          onChangeStartDate={this.handleStartDateChange}
          onSubmitAddEmp={this.handleSubmitAddEmp}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    showFnameLname: state.loadData.data
  }
);

export default connect(mapStateToProps)(Employee);