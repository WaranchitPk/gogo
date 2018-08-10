import React, { Component } from 'react';
import { AdminNeutrianComponent } from '../../components';
import { connect } from 'react-redux';
import { loadNeutrianShowCate,createData } from '../../actions/nutrian';
import axios from "axios";
import { path_API } from "../../config";

class AdminNeutrian extends Component {
  state = {
    valueTab: 0,
    foodName: '',
    foodCal: '',
    foodProtein: '',
    foodFat: '',
    foodCarb: '',
    foodPerUnit: '',
    valueCate: 1,
    valueMenu: 1
  };

  componentDidMount() {
    this.props.dispatch(loadNeutrianShowCate(this.state.valueCate))
  }

  //Change Tab
  handleTabChange = (event, value) => {
    this.setState({
      valueTab: value
    })
  };
  //Change Input value
  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };
  //Select Categories Food
  handleSelectCate = ({ target: { value } }) => {
    this.setState({
      valueCate: value
    });
    this.props.dispatch(loadNeutrianShowCate(value))
  };
  //Select Menu Food
  handleSelectMenu = ({ target: { value } }) => {
    this.setState({
      valueMenu: value
    })
  };
  //Submit Form After Input
  handleSubmitFormInput = () => {
    const { foodName, foodCal, foodProtein, foodFat, foodCarb, foodPerUnit, valueCate, valueMenu } = this.state;
    const bodyFood = {
      foodName: foodName,
      foodCal: foodCal,
      foodProtein: foodProtein,
      foodFat: foodFat,
      foodCarb: foodCarb,
      foodPerUnit: foodPerUnit,
      valueCate: valueCate,
      valueMenu: valueMenu
    };
    const {dispatch} = this.props;
  createData(bodyFood,dispatch)
  };

  render() {
    const { valueTab, foodName, foodCal, foodProtein, foodFat, foodPerUnit, valueCate, valueMenu, foodCarb } = this.state;
    const { foodMenuFromDB } = this.props;
    return (
      <div>
        <AdminNeutrianComponent
          value={valueTab}
          onChangeTab={this.handleTabChange}
          inPutFoodName={foodName}
          inPutFoodCal={foodCal}
          inPutFoodProtein={foodProtein}
          inPutFoodFat={foodFat}
          inputFoodCarb={foodCarb}
          inPutFoodPerUnit={foodPerUnit}
          onChangeInput={this.handleChangeInput}
          valueCate={valueCate}
          valueMenu={valueMenu}
          valueMenuFromDB={foodMenuFromDB}
          onSelectCate={this.handleSelectCate}
          onSelectMenu={this.handleSelectMenu}
          onSubmitForm={this.handleSubmitFormInput}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    foodMenuFromDB: state.NeutrianCate.data
  }
);
export default connect(mapStateToProps)(AdminNeutrian);