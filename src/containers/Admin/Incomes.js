import React, { Component } from 'react';
import { AdminIncomeComponent } from '../../components';
import {
  dataIncome,
  createIncome
} from '../../actions/incomes';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Incomes extends Component {
  state = {
    incomeName: '',
    incomeDetail: '',
    incomeAmount: '',
    incomeDate: new Date(),
    isOpenDialogAddIncome: false,
    rowsPerPage: 5,
    page: 0,
  };

  componentDidMount() {
    this.props.dispatch(dataIncome())
  }

  //change data income
  handleChangeInputFormAddIncome = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  };
  //change date income
  handleChangeDateIncome = (date) => {
    this.setState({ incomeDate: date });
  };
  //change page in table
  handleChangePageIncome = (event, page) => {
    this.setState({ page });
  };
  //change row per page in table
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  //open dialog add data incomes
  handleOpenDialogAddIncome = () => {
    this.setState({
      isOpenDialogAddIncome: true
    })
  };
  //close dialog add data incomes
  handleCloseDialogAddIncome = () => {
    this.setState({
      isOpenDialogAddIncome: false
    })
  };
  //submit form data income
  handleSubmitFormAddIncome = () => {
    const { incomeName, incomeDetail, incomeAmount, incomeDate } = this.state;
    const { dispatch } = this.props;
    swal("รายรับ", "เพิ่มข้อมูลรายรับสำเร็จ", "success").then(() => {
      this.setState({
        isOpenDialogAddIncome: false
      });
      const body = {
        IncomeName: incomeName,
        IncomeDetail: incomeDetail,
        IncomeAmount: incomeAmount,
        IncomeDate: incomeDate
      };
      createIncome(body).then((result) => {
        console.log(result);
        dispatch(dataIncome())
      })
    })
  };

  render() {
    const { LoadIncomeData } = this.props;
    let receiveDataIncomes = [];
    let receiveDataIncomesLength = '';
    if (LoadIncomeData !== null && LoadIncomeData !== undefined) {
      receiveDataIncomes = LoadIncomeData.data.result;
      receiveDataIncomesLength = LoadIncomeData.data.result.length
    }
    return (
      <div>
        <AdminIncomeComponent
          {...this.state}
          onOpenDialogAdd={this.handleOpenDialogAddIncome}
          showDataIncomes={receiveDataIncomes}
          showDataIncomesLength={receiveDataIncomesLength}
          onChangeRowPage={this.handleChangeRowsPerPage}
          onCloseDialogAdd={this.handleCloseDialogAddIncome}
          onChangeDateIncome={this.handleChangeDateIncome}
          onChangeInput={this.handleChangeInputFormAddIncome}
          onSubmitAddIncome={this.handleSubmitFormAddIncome}
          onChangePage={this.handleChangePageIncome}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    LoadIncomeData: state.DataIncome.data
  }
)
export default connect(mapStateToProps)(Incomes);
