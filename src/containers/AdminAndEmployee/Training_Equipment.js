import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  DataInHome,
  DaTaSumMachineInHome
} from '../../actions/trainingEquipment';
import { TrainingEquipmentComponent } from '../../components';

class Training_Equipment extends Component {
  state = {
    tabChange: 0,
    rowsPerPage: 5,
    page: 0
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(DataInHome());
    dispatch(DaTaSumMachineInHome())
  }

  //change tabs
  handleChangeTabs = (event, value) => {
    this.setState({ tabChange: value });
  };
  //Table Page: Home
  handleChangeTablePage = (event, page) => {
    this.setState({ page });
  };
  //Table Row Per Page : Home
  handleChangeTableRowPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    // console.log(this.props.dataInHome);
    const { dataInHome, dataSumMachineInHome } = this.props;
    const { tabChange, page, rowsPerPage } = this.state;
    let resultDataShowInHome = [];
    let resultDataSumMachineInHome = [];
    if (dataInHome !== null && dataInHome !== undefined) {
      resultDataShowInHome = dataInHome.data.result
    }
    if (dataSumMachineInHome !== null && dataSumMachineInHome !== undefined){
      resultDataSumMachineInHome = dataSumMachineInHome.data.result
    }
    return (
      <div>
        <TrainingEquipmentComponent
          resultDataShowHome={resultDataShowInHome}
          resultDataSumMachineInHome={resultDataSumMachineInHome}
          tabValue={tabChange}
          onChangeTab={this.handleChangeTabs}
          valueTableChangePageHome={page}
          valueTableChangeRowPerPageHome={rowsPerPage}
          changeTablePageHome={this.handleChangeTablePage}
          changeTableRowPerPageHome={this.handleChangeTableRowPerPage}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    dataInHome: state.ShowDataInHomeReducer.data,
    dataSumMachineInHome: state.ShowDataSumMachineInHomeReducer.data
  }
);
export default connect(mapStateToProps)(Training_Equipment);