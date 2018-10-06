import React, {Component} from 'react';
import {AdminIncomeExpensesComponent} from '../../components'
import {dataIncomeTrends, dataExpensesTrends} from "../../actions/IncomesExpenses";
import {connect} from 'react-redux'

class HomeIncomeExpenses extends Component {
    state = {
        yearTrends: 2018,
        yearTrendsExpenses: 2018,
        yearSelectIncome: 2018,
        yearSelectExpenses: 2018,
        yearShowTrendIncome: 2018,
        yearShowTrendExpenses: 2018
    }

    componentDidMount() {
        this.props.dispatch(dataIncomeTrends(this.state.yearTrends))
        this.props.dispatch(dataExpensesTrends(this.state.yearTrendsExpenses))
    }

    handleSelectYearIncome = ({target: {value}}) => {
        this.setState({
            yearSelectIncome: value
        })
    }
    handleSelectYearExpenses = ({target: {value}}) => {
        this.setState({
            yearSelectExpenses: value
        })
    }
    handleSubmitYearSelectIncome = () => {
        const {yearSelectIncome} = this.state;
        this.props.dispatch(dataIncomeTrends(yearSelectIncome))

    }
    handleSubmitYearSelectExpenses = () => {
        const {yearSelectExpenses} = this.state;
        this.props.dispatch(dataExpensesTrends(yearSelectExpenses))
    }

    render() {
        const {LoadIncomeDataTrend, LoadExpensesDataTrend} = this.props;
        const {yearTrends, yearTrendsExpenses, yearSelectIncome, yearSelectExpenses, yearShowTrendIncome,yearShowTrendExpenses} = this.state;
        let receiveDataIncomeTrends = [];
        let receiveDataExpensesTrends = [];
        if (LoadIncomeDataTrend !== null && LoadIncomeDataTrend !== undefined) {
            LoadIncomeDataTrend.data.result.map(result => {
                //    result.incomeMonth
                if (result.incomeMonth === 1) {
                    result.incomeMonth = "ม.ค"
                }
                if (result.incomeMonth === 2) {

                    result.incomeMonth = "ก.พ"
                }
                if (result.incomeMonth === 3) {
                    result.incomeMonth = "มี.ค"
                }
                if (result.incomeMonth === 4) {
                    result.incomeMonth = "เม.ย"
                }
                if (result.incomeMonth === 5) {
                    result.incomeMonth = "พ.ค"
                }
                if (result.incomeMonth === 6) {
                    result.incomeMonth = "มิ.ย"
                }
                if (result.incomeMonth === 6) {
                    result.incomeMonth = "มิ.ย"
                }
                if (result.incomeMonth === 7) {

                    result.incomeMonth = "ก.ค"
                }
                if (result.incomeMonth === 8) {
                    result.incomeMonth = "ส.ค"
                }
                if (result.incomeMonth === 9) {
                    result.incomeMonth = "ก.ย"
                }
                if (result.incomeMonth === 10) {
                    result.incomeMonth = "ต.ค"
                }
                if (result.incomeMonth === 11) {
                    result.incomeMonth = "พ.ย"
                }
                if (result.incomeMonth === 12) {
                    result.incomeMonth = "ธ.ค"
                }
                receiveDataIncomeTrends = LoadIncomeDataTrend.data.result;

            })
        }
        if (LoadExpensesDataTrend !== null && LoadExpensesDataTrend !== undefined) {
            LoadExpensesDataTrend.data.result.map(result => {
                if (result.expensesMonth === 1) {
                    result.expensesMonth = "ม.ค"
                }
                if (result.expensesMonth === 2) {

                    result.expensesMonth = "ก.พ"
                }
                if (result.expensesMonth === 3) {
                    result.expensesMonth = "มี.ค"
                }
                if (result.expensesMonth === 4) {
                    result.expensesMonth = "เม.ย"
                }
                if (result.expensesMonth === 5) {
                    result.expensesMonth = "พ.ค"
                }
                if (result.expensesMonth === 6) {
                    result.expensesMonth = "มิ.ย"
                }
                if (result.expensesMonth === 7) {

                    result.expensesMonth = "ก.ค"
                }
                if (result.expensesMonth === 8) {
                    result.expensesMonth = "ส.ค"
                }
                if (result.expensesMonth === 9) {
                    result.expensesMonth = "ก.ย"
                }
                if (result.expensesMonth === 10) {
                    result.expensesMonth = "ต.ค"
                }
                if (result.expensesMonth === 11) {
                    result.expensesMonth = "พ.ย"
                }
                if (result.expensesMonth === 12) {
                    result.expensesMonth = "ธ.ค"
                }
                receiveDataExpensesTrends = LoadExpensesDataTrend.data.result;
            })
        }

        return (
            <div>
                <AdminIncomeExpensesComponent
                    dataIncomeTrends={receiveDataIncomeTrends}
                    valueYearTrends={yearTrends}
                    dataExpensesTrends={receiveDataExpensesTrends}
                    valueYearTrendsExpenses={yearTrendsExpenses}
                    yearSelectIncome={yearSelectIncome}
                    yearSelectExpenses={yearSelectExpenses}
                    onSelectYearIncome={this.handleSelectYearIncome}
                    onSelectYearExpenses={this.handleSelectYearExpenses}
                    onSubmitSelectIncome={this.handleSubmitYearSelectIncome}
                    onSubmitSelectExpenses={this.handleSubmitYearSelectExpenses}
                    yearShowTrendIncome={yearShowTrendIncome}
                    yearShowTrendExpenses={yearShowTrendExpenses}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        LoadIncomeDataTrend: state.DataIncomeTrends.data,
        LoadExpensesDataTrend: state.DataExpensesTrends.data

    }
)
export default connect(mapStateToProps)(HomeIncomeExpenses);
