import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ShowAllUSer,
  InsertUser,
  UpdateStatusTrainingUser,
  loadData
} from '../../actions/employees';
import {
  EmployeeShowAllUser,
  NeutrianComponent,
} from '../../components';
import axios from "axios";
import { path_API } from "../../config";

class showUser extends Component {
  state = {
    rowsPerPage: 5,
    page: 0,
    selected: [],
    dataEmployee: "",
    isOpenDialogShowSelectEmp: false,
    isSelectEmp: false,
    selectedEmp: [],
    empId: ''
  };

  componentDidMount() {
    this.props.dispatch(ShowAllUSer())
    this.props.dispatch(loadData());
  }

  //change Page in Table Show Data User
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  //Change RowPerPage In Table Show Data User
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  //show user
  handleSelectFood = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    this.setState({ selected: newSelected });
  };
  //submit user
  handleSubmitSelectUser = () => {
    this.props.dispatch(loadData());
    axios.get(`${path_API}/employees/findCountUserTrainingEmp`).then((result) => {
      this.setState({
        dataEmployee: result.data.result,
        isOpenDialogShowSelectEmp: true
      })
    })
    // UpdateStatusTrainingUser(this.state.selected,this.props.dispatch)
  };
  handleCloseDialogShowSelectEmp = () => {
    this.setState({
      isOpenDialogShowSelectEmp: false
    })
  };

  handleSelectEmp = (event,id) =>{
    const { selectedEmp } = this.state;
    const selectedIndex = selectedEmp.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedEmp, id);
      console.log('1')
      this.setState({
        empId: id
      })
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedEmp.slice(1));
      console.log('2')
    } else if (selectedIndex === selectedEmp.length - 1) {
      newSelected = newSelected.concat(selectedEmp.slice(0, -1));
      console.log('3')
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedEmp.slice(0, selectedIndex),
        selectedEmp.slice(selectedIndex + 1),
      );
    }
    this.setState({ selectedEmp: newSelected });

  };
  handleSubmitSelectEmp = () =>{
    console.log('user Selected',this.state.selected,'emp id',this.state.selectedEmp[0]);
    UpdateStatusTrainingUser(this.state.selected,this.state.selectedEmp[0],this.props.dispatch)
    this.setState({
      isOpenDialogShowSelectEmp: false
    })

  }
  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {

    const { dataUser, showAllData } = this.props;
    const { page, rowsPerPage, selected, dataEmployee,isOpenDialogShowSelectEmp,isSelectEmp,selectedEmp } = this.state;
    let resultShowUser = [];
    let resultShowUserLength = "";
    // if (selectedEmp.length === 0){
    //   console.log('0')
    // } else{
    //   console.log(selectedEmp)
    // }
    if (dataUser !== null && dataUser !== undefined) {
      resultShowUser = dataUser.data.result;
      resultShowUserLength = dataUser.data.result.length
    }
    return (
      <div>
        <EmployeeShowAllUser
          page={page}
          rowsPerPage={rowsPerPage}
          onChangeTablePage={this.handleChangePage}
          onChangeTableRowsPerPage={this.handleChangeRowsPerPage}
          dataShowAllUserInTable={resultShowUser}
          dataShowAllUserInTableLength={resultShowUserLength}
          selectUser={this.handleSelectFood}
          afterSelect={selected}
          statusSelected={this.isSelected}
          onSubmitSelectUser={this.handleSubmitSelectUser}
          dataEmployee={dataEmployee}
          isOpenDialogShowSelectEmp={isOpenDialogShowSelectEmp}
          onCloseDialogShowSelectEmp={this.handleCloseDialogShowSelectEmp}
          onSelectEmp={this.handleSelectEmp}
          isSelectEmp={isSelectEmp}
          selectedEmp={selectedEmp}
          onSubmitSelectEmp={this.handleSubmitSelectEmp}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    dataUser: state.loadDataUserForChooseReducer.data,
    showAllData: state.loadAllData.data
  }
);
export default connect(mapStateToProps)(showUser);