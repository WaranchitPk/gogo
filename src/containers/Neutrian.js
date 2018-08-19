import React, {Component} from "react";
import {NeutrianComponent} from "../components";
import {connect} from 'react-redux';
import {loadNeutrianShowCate, loadNeutrianFoods, loadSelectNeutrian} from '../actions/nutrian';
import swal from 'sweetalert';
import {path_API} from "../config";

const amountSelect = [1, 2, 3];

class Neutrian extends Component {
    state = {
        value: 0,
        isOpen: false,
        activeStep: 0,
        categoriesNeutrian: 0,
        valueMenu: 0,
        rowsPerPage: 5,
        page: 0,
        openFullDialog: false,
        selected: [],
        isOpenSelectFood: false
    };

    componentDidMount() {

    }

    //changeTabs
    handleChange = (event, value) => {
        console.log(value);
        this.setState({value});
    };

    //openDialogs
    handleOpenDialog = () => {
        this.setState({
            isOpen: true
        })
    };
    //closeDialogs
    handleCloseDialog = () => {
        this.setState(({
            isOpen: false
        }))
    };
    //closeDialog selected food
    handleCloseDialogSelecteFood = () => {
        this.setState({
            isOpenSelectFood: false,
            selected: [],
            amount: [],
        })
    };
    handleCloseFullDialog = () => {
        this.setState(({
            openFullDialog: false,
            isOpen: false
        }))
    };
    //set value cate neutrian
    handleSelectCategoriesNeutrian = ({target: {value}}) => {
        this.setState({
            categoriesNeutrian: value
        })
    };
    //set value cate menu
    handleSelectMenuNeutrian = ({target: {name, value}}) => {
        console.log(name, value);
        this.setState({
            valueMenu: value
        })
    };
    //pageTable
    handleChangePage = (event, page) => {
        this.setState({page});
    };
    //RowPerPage Table
    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };
    //select foods
    handleSelectFood = (event, id) => {
        const {selected} = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        this.setState({selected: newSelected});
    };

    //submit show food
    handleSubmitSelectFood = _ => {
        const {selected} = this.state;
        this.props.dispatch(loadSelectNeutrian(selected));
        this.setState({
            isOpenSelectFood: true
        })
    };

    //Stepper Next Button
    handleStepNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1
        }));
        const {activeStep, categoriesNeutrian, valueMenu, openFullDialog} = this.state;
        if (activeStep === 0) {
            // loadNeutrianShowCate(categoriesNeutrian);
            this.props.dispatch(loadNeutrianShowCate(categoriesNeutrian))
        } else if (activeStep === 1) {
            // console.log(valueMenu)
            this.props.dispatch(loadNeutrianFoods(valueMenu));
            this.setState({
                openFullDialog: true,
                activeStep: 0
            })
        }
    };
    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render() {
        const {selected, value, isOpen, activeStep, categoriesNeutrian, valueMenu, page, rowsPerPage, openFullDialog, isOpenSelectFood} = this.state;
        const {result, resultFoods, resultSelect} = this.props;
        return (
            <div>
                <NeutrianComponent
                    value={value}
                    changeTab={this.handleChange}
                    openDialog={isOpen}
                    changeOpenDialog={this.handleOpenDialog}
                    changeCloseDialog={this.handleCloseDialog}
                    step={activeStep}
                    changeNextStep={this.handleStepNext}
                    selectCateNeutrian={categoriesNeutrian}
                    getvalueCateNeutrian={this.handleSelectCategoriesNeutrian}
                    valueCate={result}
                    valueMenu={valueMenu}
                    getValueMenu={this.handleSelectMenuNeutrian}
                    valueFood={resultFoods}
                    page={page}
                    rowPerPage={rowsPerPage}
                    onChangePage={this.handleChangePage}
                    onChangeRow={this.handleChangeRowsPerPage}
                    openFullDialog={openFullDialog}
                    onCloseFullDialog={this.handleCloseFullDialog}
                    selectFood={this.handleSelectFood}
                    submitSelectFood={this.handleSubmitSelectFood}
                    afterSelect={selected}
                    resultSelect={resultSelect}
                    openDialogResultSelectFood={isOpenSelectFood}
                    changeIsCloseDialogResultSelectFood={this.handleCloseDialogSelecteFood}
                    statusSelected={this.isSelected}
                />
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        result: state.NeutrianCate.data,
        resultFoods: state.NeutrialFoods.data,
        resultSelect: state.NeutrialSelectFoods.data
    }
};

export default connect(mapStateToProps)(Neutrian);
