import React, {Component} from 'react';
import {AdminMainIncomeExpensesComponent} from '../../components';

class MainIncomeExpenses extends Component {
    state = {
        valueTab: 1
    };
    handleChangeTab = (event, value) => {
        this.setState({
            valueTab: value
        })
    }

    render() {
        const {valueTab} = this.state;
        return (
            <div>
                <AdminMainIncomeExpensesComponent
                    valueTabs={valueTab}
                    onChangeTabs={this.handleChangeTab}/>
            </div>
        );
    }
}

export default MainIncomeExpenses;
