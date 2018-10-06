import React, {Component} from 'react';
import {AdminIncomeExpensesComponent} from '../../components'
import {dataIncomeTrends, dataExpensesTrends} from "../../actions/IncomesExpenses";
import {connect} from 'react-redux'

class HomeIncomeExpenses extends Component {
    state = {
        yearTrends: 2018,
        yearTrendsExpenses: 2018

    }

    componentDidMount() {
        this.props.dispatch(dataIncomeTrends(this.state.yearTrends))
        this.props.dispatch(dataExpensesTrends(this.state.yearTrendsExpenses))
    }

    render() {
        const {LoadIncomeDataTrend, LoadExpensesDataTrend} = this.props;
        const {yearTrends, yearTrendsExpenses} = this.state;
        let receiveDataIncomeTrends = [];
        let receiveDataExpensesTrends = [];
        if (LoadIncomeDataTrend !== null && LoadIncomeDataTrend !== undefined) {
            LoadIncomeDataTrend.data.result.map(result => {
                //    result.incomeMonth
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
            LoadExpensesDataTrend.data.result.map(result =>{
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
                    valueYearTrendsExpenses={yearTrendsExpenses}/>
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
