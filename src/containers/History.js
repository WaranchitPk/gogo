import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHistory, showHistory } from '../actions/historyUser';
import { HistoryComponent } from '../components';

class History extends Component {
    state = {
        isOpen: false,
        selectedDate: new Date(),
        Detail: '',
        dateStr: '',
        rowsPerPage: 5,
        page: 0
    };

    componentDidMount() {
        const {token: {userId}} = this.props;
        this.props.dispatch(showHistory(userId))
    }

    handleOpen = () => {
        this.setState({
            isOpen: true
        })
    };
    handleClose = () => {
        this.setState({
            isOpen: false
        });
    };
    handleDateChange = (date) => {
        this.setState({
            selectedDate: date,
            dateStr: moment(date).format('YYYY-MM-DD HH:mm')
        });

    };
    handleChangeText = (event) => {
        this.setState({
            Detail: event.target.value,
        })
    };
    handleOnSubmit = () => {

        const {Detail, dateStr} = this.state;
        const {token: {userId}} = this.props;

        const bodyData = {
            Detail: Detail,
            dateStr: dateStr,
            userId: userId
        };
        this.props.dispatch(createHistory(bodyData, this.handleClose()))
            .then(() => {
                this.props.dispatch(showHistory(userId))
            })
    };
    handleChangePage = (event, page) => {
        this.setState({page});
    };
    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    render() {
        const {isOpen, selectedDate, Detail, page, rowsPerPage} = this.state;
        console.log(this.state.selectedDate)
        return (
            <div>
                {
                    this.props.data.data ? <HistoryComponent
                        isOpen={isOpen}
                        handleOpen={this.handleOpen}
                        handleClose={this.handleClose}
                        dateNow={selectedDate}
                        handleDateChange={this.handleDateChange}
                        Detail={Detail}
                        handleChangeText={this.handleChangeText}
                        handleOnSubmit={this.handleOnSubmit}
                        data={this.props.data.data.data}
                        page={page}
                        rowPerPage={rowsPerPage}
                        onChangePage={this.handleChangePage}
                        onChangeRow={this.handleChangeRowsPerPage}/> : ''
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.AuthenReducer.token,
        status: state.CreateHistoryUserReducer,
        data: state.ShowHistoryUserReducer
    }
};

export default connect(mapStateToProps)(History);
