import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createUser} from '../actions/users';
import {RegisterComponent} from '../components';
import {withRouter} from 'react-router-dom';
import {createIncome, dataIncome} from "../actions/IncomesExpenses";
import axios from "axios";
import moment from 'moment'
import {path_API} from "../config";
class Register extends Component {

    state = {
        userId: 10000 + Math.floor(Math.random() * 10000),
        username: '',
        password: '',
        gender: 'male',
        fName: '',
        lName: '',
        age: '',
        userIdCard: '',
        tel: '',
        month: 1
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = () => {

        const {userId, username, password, fName, lName, tel, age, userIdCard,month} = this.state;

        if (userId === "", username === "" || password === "" || fName === "" || lName === "" || tel === "" || age === "", userIdCard === "") {
            alert('empty')
        } else {
            const {history: {push}} = this.props;
            const body = {
                ...this.state
            };
            axios.get('http://localhost:9999/api/pricing').then((value) => {
                this.props.dispatch(createUser(body, push));
                const bodyIncome = {
                    IncomeName: `ค่าบริการรายเดือนของสมาชิก ${userId}`,
                    IncomeDetail: `ค่าบริการรายเดือนจำนวน ${month} เดือน ประจำวันที่  ${moment().format("DD-MM-YY")}`,
                    IncomeAmount: month * value.data.result[0].pricing_PerMonth,
                    IncomeDate: new Date(),
                    IncomeCate: 1
                };
                createIncome(bodyIncome).then((result) => {
                    console.log(result);
                })
            })

        }
    };

    render() {

        return (
            <div>
                <RegisterComponent
                    userId={this.state.userId}
                    valueGender={this.state.gender}
                    valueMonth={this.state.month}
                    valueFname={this.state.fName}
                    valueLname={this.state.lName}
                    valueTel={this.state.tel}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default connect(null)(withRouter(Register));
