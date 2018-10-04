import React, { Component } from 'react';
import {
  loadData,
  createDate,
  findAllData,
  showDataForUpdate,
  UpdateDataEmp,
  DeleteDataEmp
} from '../../actions/employees';
import { connect } from 'react-redux';
import { AdminEmployeeComponent } from '../../components';
import moment from 'moment';
import swal from "sweetalert";

class Employee extends Component {
  state = {
    userId: 20000 + Math.floor(Math.random() * 10000),
    rowsPerPage: 5,
    page: 0,
    isOpenDialogAdd: false,
    empUsername: '',
    empPassword: '',
    empFname: '',
    empLname: '',
    empBirthDate: new Date(),
    empId: 222,
    empAge: '',
    empIdCard: '',
    empAddress: '',
    empTel: '',
    empSalary: '',
    empStartDate: new Date(),
    isOpenDialogShowData: false,
    isOpenFormChange: false
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
      isOpenDialogAdd: true,
      empUsername: '',
      empPassword: '',
      empFname: '',
      empLname: '',
      empBirthDate: new Date(),
      empId: 20000 + Math.floor(Math.random() * 10000),
      empAge: '',
      empIdCard: '',
      empAddress: '',
      empTel: '',
      empSalary: '',
      empStartDate: new Date(),
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
    const { empId,empUsername, empPassword, empFname, empLname, empBirthDate, empAge,empIdCard, empAddress, empTel, empSalary, empStartDate } = this.state;
    const { dispatch } = this.props;
    if (empId === "" || empUsername === "" || empPassword === "" || empFname === "" || empLname === "" || empAge === "" || empIdCard === "" || empAddress === "" || empTel === "" || empSalary === "") {
      swal({
        title: "ข้อมูลพนักงานไม่ครบ",
        text: "กรุณากรอกข้อมูลให้ครบ",
        icon: "warning",
        button: "ตกลง",
      });
    } else {
      let empIdNoSame = ''
      let findSameEmpId = this.props.showFnameLname.data.result.find(value => value.employee_id === +empId);
      // this.props.showFnameLname.data.result.map(result =>{
      //   if (result.employee_id === +empId){
      //     alert('empId Same')
      //   }
      // })
      if (findSameEmpId){
        swal({
          title: "รหัสพนักงานซ้ำ",
          text: "กรุณากรอกรหัสพนักงานใหม่อีกครั้ง",
          icon: "warning",
          button: "ตกลง",
        });
      }else{
        const bodyEmp = {
          id: empId,
          user: empUsername,
          pass: empPassword,
          fName: empFname,
          lName: empLname,
          birthDate: moment(empBirthDate).format('YYYY-MM-DD'),
          age: empAge,
          idCard: empIdCard,
          address: empAddress,
          tel: empTel,
          salary: empSalary,
          startDate: moment(empStartDate).format('YYYY-MM-DD'),
          status: 'พนักงาน',
          userType: 2
        };
        createDate(bodyEmp, dispatch, this.clearStateAfterSubmit())
      }
      // employee_id


    }
  };
  //Clikc Show All Data - Emp
  handleClickShowDataEmp = (id) => {
    this.setState({
      isOpenDialogShowData: true
    })
    this.props.dispatch(findAllData(id))
  };

  //close Dialog show All Data
  handleCloseDialogShowAllData = () => {
    this.setState({
      isOpenDialogShowData: false
    })
  };
  //Click show  Form Change
  handleClickFormChange = (id) => {
    showDataForUpdate(id).then(({ data: { result } }) => {
      this.setState({
        isOpenFormChange: true,
        userId: result[0].employee_id,
        empFname: result[0].employee_Fname,
        empLname: result[0].employee_Lname,
        empBirthDate: moment(result[0].employee_Birthdate).format('YYYY-MM-DD'),
        empAge: result[0].employee_Age,
        empAddress: result[0].employee_Address,
        empTel: result[0].employee_Tel,
        empSalary: result[0].employee_Salary,
        empStartDate: moment(result[0].employee_Start).format('YYYY-MM-DD'),
      })
    });

  };
  // on close Dialog Form Change
  handleCloseDialogFormChange = () => {
    this.setState({
      isOpenFormChange: false
    })
  };
  //submit Form Change
  handleSubmitAfterChangeInForm = () => {
    console.log({ ...this.state })
    const { userId, empFname, empLname, empBirthDate, empAge, empAddress, empTel, empSalary, empStartDate } = this.state;
    this.setState({
      isOpenFormChange: false
    });

    const bodyEmp = {
      fName: empFname,
      lName: empLname,
      birthDate: moment(empBirthDate).format('YYYY-MM-DD'),
      age: empAge,
      address: empAddress,
      tel: empTel,
      salary: empSalary,
      startDate: moment(empStartDate).format('YYYY-MM-DD'),

    };
    //update data - action
    UpdateDataEmp(bodyEmp, userId, this.props.dispatch)
  };
  //click to delete data employee
  handleDeleteDataEmp = (id) => {
    DeleteDataEmp(id, this.props.dispatch)
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
    const { showFnameLname, showAllData } = this.props;
    const { isOpenDialogAdd, isOpenDialogShowData } = this.state;
    let dataShowFnameLname = [];
    let lengthDataShowFnameLname = '';
    let dataShowAllEmp = [];
    if (showFnameLname !== null && showFnameLname !== undefined) {
      dataShowFnameLname = showFnameLname.data.result;
      lengthDataShowFnameLname = showFnameLname.data.result.length;
    }
    if (showAllData !== null && showAllData !== undefined) {
      dataShowAllEmp = showAllData.data.result
    }
    return (
      <div>
        <AdminEmployeeComponent
          {...this.state}
          showFnameLname={dataShowFnameLname}
          showFnameLnameLength={+lengthDataShowFnameLname}
          showAllDataEmp={dataShowAllEmp}
          onChangePage={this.handleChangePage}
          onChangeRowPage={this.handleChangeRowsPerPage}
          isOpenDialogAdd={isOpenDialogAdd}
          onOpenDialogAdd={this.handleOpenDialogAdd}
          onCloseDialogAdd={this.handleCloseDialogAdd}
          onChangeBirthDate={this.handleBirthDateChange}
          onChangeInput={this.handleChangeInput}
          onChangeStartDate={this.handleStartDateChange}
          onSubmitAddEmp={this.handleSubmitAddEmp}
          onClickShowData={this.handleClickShowDataEmp}
          isOpenDialogShowAllData={isOpenDialogShowData}
          onCloseDialogShowData={this.handleCloseDialogShowAllData}
          onClickFormChange={this.handleClickFormChange}
          onCloseDialogFormChange={this.handleCloseDialogFormChange}
          onSubmitFormChange={this.handleSubmitAfterChangeInForm}
          onDeleteDataEmp={this.handleDeleteDataEmp}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    showFnameLname: state.loadData.data,
    showAllData: state.loadAllData.data
  }
);

export default connect(mapStateToProps)(Employee);
