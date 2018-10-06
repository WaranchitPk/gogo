import React, {Component} from 'react';
import {AdminIncomeComponent} from '../../components';
import {
    dataIncome,
    dataIncomeCate,
    createIncome,
    dataIncomeCateChange,
    dataIncomeTrends
} from '../../actions/IncomesExpenses';
import {connect} from 'react-redux';
import swal from 'sweetalert';

import moment from "moment";
import axios from "axios";
import {createUser} from "../../actions/users";

class Incomes extends Component {
    state = {
        incomeName: '',
        incomeDetail: '',
        incomeAmount: '',
        incomeDate: new Date(),
        incomeCate: '',
        isOpenDialogAddIncome: false,
        isOpenDialogAddIncomeDay: false,
        rowsPerPage: 5,
        changeCate: '',
        page: 0,
        inComeDay: ''
    };

    componentDidMount() {
        this.props.dispatch(dataIncome())
        this.props.dispatch(dataIncomeCate())
    }

    //change data income
    handleChangeInputFormAddIncome = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
        console.log('cate', name, value)
    };
    //change date income
    handleChangeDateIncome = (date) => {
        this.setState({incomeDate: date});
    };
    //change page in table
    handleChangePageIncome = (event, page) => {
        this.setState({page});
    };
    //change row per page in table
    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };
    //open dialog add data incomes-expenses
    handleOpenDialogAddIncome = () => {
        this.setState({
            isOpenDialogAddIncome: true,
            incomeName: '',
            incomeDetail: '',
            incomeAmount: '',
            incomeDate: new Date(),
        })

    };
    //open dialog add data incomes-expenses
    handleOpenDialogAddIncomeDay = () => {
        this.setState({
            isOpenDialogAddIncomeDay: true,
            incomeName: '',
            incomeDetail: '',
            incomeAmount: '',
            inComeDay: '',
            incomeDate: new Date(),
        })
    };
    //close dialog add data incomes-expenses
    handleCloseDialogAddIncomeDay = () => {
        this.setState({
            isOpenDialogAddIncomeDay: false
        })
    };
    //close dialog add data incomes-expenses
    handleCloseDialogAddIncome = () => {
        this.setState({
            isOpenDialogAddIncome: false
        })
    };
    //change Cate
    handleChangeCate = ({target: {value}}) => {
        this.setState({
            changeCate: value
        })
    }
    //submit search category
    handleSubmitSearchCate = () => {
        this.props.dispatch(dataIncomeCateChange(this.state.changeCate))
    }
    handleChangeDayAmount = ({target: {value}}) => {
        this.setState({
            inComeDay: value
        })
    }
    handleSubmitFormAddInComeDay = () => {
        console.log(this.state.inComeDay,this.state.incomeDate)
        axios.get('http://localhost:9999/api/pricing').then((value) => {
            const body = {
                IncomeName: "ค่าบริการสมาชิกรายวัน",
                IncomeDetail: `ค่าบริการสมาชิกรายวัน ประจำวันที่ ${moment(this.state.incomeDate).format("DD-MM-YY")}`,
                IncomeAmount: this.state.inComeDay * value.data.result[0].pricing_PerDay,
                IncomeDate: this.state.incomeDate,
                IncomeCate: 2
            };
            createIncome(body).then((result) => {
                console.log(result);
                this.props.dispatch(dataIncome())
                this.setState({
                    isOpenDialogAddIncomeDay: false
                })
            })
        })

    }
    //submit form data income
    handleSubmitFormAddIncome = () => {
        const {incomeName, incomeDetail, incomeAmount, incomeDate, incomeCate} = this.state;
        const {dispatch} = this.props;
        if (incomeName === "" || incomeDetail === "" || incomeAmount === "") {
            swal({
                title: "ข้อมูลรายรับไม่ครบ",
                text: "กรุณากรอกข้อมูลให้ครบ",
                icon: "warning",
                button: "ตกลง",
            });
        } else {
            swal("รายรับ", "เพิ่มข้อมูลรายรับสำเร็จ", "success").then(() => {
                this.setState({
                    isOpenDialogAddIncome: false
                });
                const body = {
                    IncomeName: incomeName,
                    IncomeDetail: incomeDetail,
                    IncomeAmount: incomeAmount,
                    IncomeDate: incomeDate,
                    IncomeCate: 3
                };
                createIncome(body).then((result) => {
                    console.log(result);
                    dispatch(dataIncome())
                })
            })
        }
    };

    render() {
        const {LoadIncomeData, LoadIncomeCateData, LoadIncomeCateChangeData,LoadIncomeDataTrend} = this.props;

        let receiveDataIncomes = [];
        let receiveDataIncomesLength = '';
        let receiveDataIncomeCate = [];
        let receiveDataIncomeTrends = [];
        let receiveDataIncomeCateChange = [];
        if (LoadIncomeData !== null && LoadIncomeData !== undefined) {
            receiveDataIncomes = LoadIncomeData.data.result;
            receiveDataIncomesLength = LoadIncomeData.data.result.length
        }
        if (LoadIncomeCateData !== null && LoadIncomeCateData !== undefined) {
            receiveDataIncomeCate = LoadIncomeCateData.data.result;
            let newarr = []
            let arr = {
                incomes_cateId: 0,
                incomes_cateName: 'รวมทุกประเภท'
            }
            let resultArr = newarr.concat(arr,receiveDataIncomeCate)
            receiveDataIncomeCateChange = resultArr
        }
        if (LoadIncomeCateChangeData !== null && LoadIncomeCateChangeData !== undefined) {
            receiveDataIncomes = LoadIncomeCateChangeData.data.result;
            receiveDataIncomesLength = LoadIncomeCateChangeData.data.result.length
        }

        return (
            <div>
                <AdminIncomeComponent
                    {...this.state}
                    onOpenDialocDay={this.handleOpenDialogAddIncomeDay}
                    onOpenDialogAdd={this.handleOpenDialogAddIncome}
                    showDataIncomes={receiveDataIncomes}
                    showDataIncomesLength={receiveDataIncomesLength}
                    showDataIncomesCate={receiveDataIncomeCate}
                    onChangeRowPage={this.handleChangeRowsPerPage}
                    onCloseDialogAdd={this.handleCloseDialogAddIncome}
                    onChangeDateIncome={this.handleChangeDateIncome}
                    onChangeInput={this.handleChangeInputFormAddIncome}
                    onSubmitAddIncome={this.handleSubmitFormAddIncome}
                    onChangePage={this.handleChangePageIncome}
                    onChangeCate={this.handleChangeCate}
                    onsubmitCate={this.handleSubmitSearchCate}
                    onCloseDialogDay={this.handleCloseDialogAddIncomeDay}
                    onChangeDay={this.handleChangeDayAmount}
                    onsubmitFormAddDay={this.handleSubmitFormAddInComeDay}
                    receiveDataIncomeCateChange={receiveDataIncomeCateChange}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        LoadIncomeData: state.DataIncome.data,
        LoadIncomeCateData: state.DataIncomeCate.data,
        LoadIncomeCateChangeData: state.DataIncomeCateChange.data,
    }
)
export default connect(mapStateToProps)(Incomes);
