import React, { Component } from 'react'
import { Show_All_Dessert } from "../../../components/Neutrians";
import {connect} from 'react-redux';
import {loadNutrianShowAllDessert} from '../../../actions/nutrian';
class dessert extends Component {
  state = {
    rowsPerPage: 5,
    page: 0
  };
  componentDidMount(){
    this.props.dispatch(loadNutrianShowAllDessert())
  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {
    const { page, rowsPerPage } = this.state;
    return (
      <div>
        {this.props.result && (
          <Show_All_Dessert
            data={this.props.result.data}
            page={page}
            rowPerPage={rowsPerPage}
            onChangePage={this.handleChangePage}
            onChangeRow={this.handleChangeRowsPerPage}
          />
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.NeutrianAllDessertsReducers.data
  }
}
export default connect(mapStateToProps)(dessert);