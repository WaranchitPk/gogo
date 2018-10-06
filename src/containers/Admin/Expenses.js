import React, {Component} from 'react';
import {AdminExpensesComponent} from '../../components';
import {
    dataExpenses,
    createDataExpenses,
    yearSelect,
    monthSelect,
    dataExpensesCate,
    dataExpensesCateChange
} from '../../actions/IncomesExpenses';
import {connect} from 'react-redux';
import swal from 'sweetalert';
import moment from 'moment';
import {DataExpensesCateChange} from "../../reducers/expenses";


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
        expensesCateToShow: '',
        expensesCateFormAdd: ''
    };

    componentDidMount() {
        const {dispatch} = this.props;
        const {year} = this.state;
        dispatch(dataExpenses());
        dispatch(yearSelect());
        dispatch(monthSelect(year));
        dispatch(dataExpensesCate())
    }

    //change data income
    handleChangeInputFormAddExpenses = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };
    handleChangeCateFormShowExpenses = ({target: {name, value}}) => {
        this.setState({
            expensesCateToShow: value
        })
    };
    //change date income
    handleChangeDateExpenses = (date) => {
        this.setState({expensesDate: date});
    };
    //change page in table
    handleChangePageExpenses = (event, page) => {
        this.setState({page});
    };
    //change row per page in table
    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };
    //open dialog add data incomes-expenses
    handleOpenDialogAddExpenses = () => {
        this.setState({
            isOpenDialogAddExpenses: true,
            expensesName: '',
            expensesDetail: '',
            expensesAmount: '',
            expensesCateFormAdd: ''
        })
    };
    //close dialog add data incomes-expenses
    handleCloseDialogAddExpenses = () => {
        this.setState({
            isOpenDialogAddExpenses: false
        })
    };
    handleSelectYear = ({target: {value}}) => {
        this.setState({
            yearSelect: value
        })
    };
    handleSelectMonth = ({target: {value}}) => {
        this.setState({
            monthSelect: value
        })
    }
    handleSubmitShowDataForCate = () => {
        const {expensesCateToShow} = this.state;
        if (expensesCateToShow === "") {
            swal({
                title: "ท่านยังไม่ได้เลือกประเภทรายรับ",
                text: "กรุณาเลือกประเภทรายรับ",
                icon: "warning",
                button: "ตกลง",
            });
        } else {
            // console.log(this.state.expensesCateToShow)
            this.props.dispatch(dataExpensesCateChange(this.state.expensesCateToShow))
            // if (this.state.expensesCateToShow === 0){
           //      this.props.dispatch(dataExpenses());
           // } else{
           //     this.props.dispatch(dataExpensesCateChange(this.state.expensesCateToShow))
           // }
        }
    }
    //submit form data income
    handleSubmitFormAddExpenses = () => {
        const {expensesName, expensesDetail, expensesAmount, expensesDate, expensesCateFormAdd} = this.state;
        const {dispatch} = this.props;
        if (expensesName === "" || expensesDetail === "" || expensesAmount === "") {
            swal({
                title: "ข้อมูลรายจ่ายไม่ครบ",
                text: "กรุณากรอกข้อมูลให้ครบ",
                icon: "warning",
                button: "ตกลง",
            });
        } else {
            swal("รายจ่าย", "เพิ่มข้อมูลรายจ่ายสำเร็จ", "success").then(() => {
                this.setState({
                    isOpenDialogAddExpenses: false
                });
                const body = {
                    ExpensesName: expensesName,
                    ExpensesDetail: expensesDetail,
                    ExpensesAmount: expensesAmount,
                    ExpensesDate: expensesDate,
                    ExpensesCate: expensesCateFormAdd
                };
                createDataExpenses(body).then((result) => {
                    console.log(result);
                    dispatch(dataExpenses())
                })
            })
        }
    };

    render() {
        const {LoadExpensesData, yearSelect, monthSelect, loadDataExpensesCate, loadDatasExpensesCateChange} = this.props;
        let receiveDataExpenses = [];
        let receiveDataExpensesLength = '';
        let receiveYearSelect = [];
        let receiveMonthSelect = [];
        let receiveDataExpensesCate = [];
        let receiveDataExpensesCateChoose = [];
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
        if (loadDataExpensesCate !== null && loadDataExpensesCate !== undefined) {
            receiveDataExpensesCate = loadDataExpensesCate.data.result;
            let newarr = []
            let arr = {
                expenses_cateId: 0,
                expenses_cateName: 'รวมทุกประเภท'
            }
            let resultArr = newarr.concat(arr,receiveDataExpensesCate)
            receiveDataExpensesCateChoose = resultArr
        }
        if (loadDatasExpensesCateChange !== null && loadDatasExpensesCateChange !== undefined) {
            receiveDataExpenses = loadDatasExpensesCateChange.data.result;
            receiveDataExpensesLength = loadDatasExpensesCateChange.data.result.length
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
                    dataMonthSelectExpenses={receiveMonthSelect}
                    dataExpensesCate={receiveDataExpensesCate}
                    onChangeCateToShowData={this.handleChangeCateFormShowExpenses}
                    onSubmitShowDataForCate={this.handleSubmitShowDataForCate}
                    receiveDataExpensesCateChoose={receiveDataExpensesCateChoose}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        LoadExpensesData: state.DataExpenses.data,
        yearSelect: state.YearSelectExpenses.data,
        monthSelect: state.MonthSelectExpenses.data,
        loadDataExpensesCate: state.DataExpensesCate.data,
        loadDatasExpensesCateChange: state.DataExpensesCateChange.data
    }
)
export default connect(mapStateToProps)(Expenses);
