import React, { Component } from 'react';
import { AdminExpensesComponent } from '../../components';
import {
  dataExpenses,
  createDataExpenses,
  yearSelect,
  monthSelect
} from '../../actions/IncomesExpenses';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import moment from 'moment';
import {
  MonthSelectExpenses,
  YearSelectExpenses
} from "../../reducers/expenses";

class Expenses extends Component {
  state = {
    expensesName: '',
    expensesDetail: '',
    expensesAmount: '',
    expensesDate: new Date(),
    isOpenDialogAddExpenses: false,
    rowsPerPage: 5,
    page: 0,
    yearSelect: '',
    monthSelect: '',
    year: moment().format('YYYY'),
    month: moment().format('MM'),
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const { year } = this.state;
    dispatch(dataExpenses());
    dispatch(yearSelect());
    dispatch(monthSelect(year));
  }

  //change data income
  handleChangeInputFormAddExpenses = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  };
  //change date income
  handleChangeDateExpenses = (date) => {
    this.setState({ expensesDate: date });
  };
  //change page in table
  handleChangePageExpenses = (event, page) => {
    this.setState({ page });
  };
  //change row per page in table
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  //open dialog add data incomes-expenses
  handleOpenDialogAddExpenses = () => {
    this.setState({
      isOpenDialogAddExpenses: true
    })
  };
  //close dialog add data incomes-expenses
  handleCloseDialogAddExpenses = () => {
    this.setState({
      isOpenDialogAddExpenses: false
    })
  };
  handleSelectYear = ({target: {value}}) =>{
    this.setState({
      yearSelect: value
    })
  };
  handleSelectMonth = ({target: {value}}) =>{
    this.setState({
      monthSelect: value
    })
  }
  //submit form data income
  handleSubmitFormAddExpenses = () => {
    const { expensesName, expensesDetail, expensesAmount, expensesDate } = this.state;
    const { dispatch } = this.props;
    swal("รายจ่าย", "เพิ่มข้อมูลรายจ่ายสำเร็จ", "success").then(() => {
      this.setState({
        isOpenDialogAddExpenses: false
      });
      const body = {
        ExpensesName: expensesName,
        ExpensesDetail: expensesDetail,
        ExpensesAmount: expensesAmount,
        ExpensesDate: expensesDate
      };
      createDataExpenses(body).then((result) => {
        console.log(result);
        dispatch(dataExpenses())
      })
    })
  };

  render() {
    const { LoadExpensesData,yearSelect,monthSelect} = this.props;
    let receiveDataExpenses = [];
    let receiveDataExpensesLength = '';
    let receiveYearSelect = [];
    let receiveMonthSelect = []
    if (LoadExpensesData !== null && LoadExpensesData !== undefined) {
      receiveDataExpenses = LoadExpensesData.data.result;
      receiveDataExpensesLength = LoadExpensesData.data.result.length
    }
    if (yearSelect !== null && yearSelect !== undefined) {
      receiveYearSelect = yearSelect.data.result;
    }
    if (monthSelect !== null && monthSelect !== undefined) {
      receiveMonthSelect = monthSelect.data.result;
    }
    return (
      <div>
        <AdminExpensesComponent
          {...this.state}
          onOpenDialogAdd={this.handleOpenDialogAddExpenses}
          showDataExpenses={receiveDataExpenses}
          showDataExpensesLength={receiveDataExpensesLength}
          onChangeRowPage={this.handleChangeRowsPerPage}
          onCloseDialogAdd={this.handleCloseDialogAddExpenses}
          onChangeDateExpenses={this.handleChangeDateExpenses}
          onChangeInput={this.handleChangeInputFormAddExpenses}
          onSubmitAddExpenses={this.handleSubmitFormAddExpenses}
          onChangePage={this.handleChangePageExpenses}
          onSelectYear={this.handleSelectYear}
          onSelectMonth={this.handleSelectMonth}
          dataYearSelectExpenses={receiveYearSelect}
          dataMonthSelectExpenses={receiveMonthSelect}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    LoadExpensesData: state.DataExpenses.data,
    yearSelect: state.YearSelectExpenses.data,
    monthSelect: state.MonthSelectExpenses.data
  }
)
export default connect(mapStateToProps)(Expenses);
