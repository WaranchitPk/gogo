import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShowAllUSer,InsertUser,UpdateStatusTrainingUser } from '../../actions/employees';
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
  };

  componentDidMount() {
    this.props.dispatch(ShowAllUSer())

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
    UpdateStatusTrainingUser(this.state.selected,this.props.dispatch)
  }
  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { dataUser } = this.props;
    const { page, rowsPerPage, selected } = this.state;
    let resultShowUser = [];
    let resultShowUserLength = "";
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
          onSubmitSelectUser={this.handleSubmitSelectUser}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    dataUser: state.loadDataUserForChooseReducer.data
  }
);
export default connect(mapStateToProps)(showUser);