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
            receiveDataIncomeTrends = LoadIncomeDataTrend.data.result;
        }
        if (LoadExpensesDataTrend !== null && LoadExpensesDataTrend !== undefined) {
            receiveDataExpensesTrends = LoadExpensesDataTrend.data.result;
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
