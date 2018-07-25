import React, {Component} from "react";
import {NeutrianComponent} from "../components";
import {Button, Dialog, DialogContentText, DialogTitle, DialogContent} from "@material-ui/core";
import {connect} from 'react-redux';
import {loadNeutrianShowCate} from '../actions/nutrian';
import NeutrianCate from "../reducers/Neutrians/showCate";

class Neutrian extends Component {
    state = {
        value: 0,
        isOpen: false,
        activeStep: 0,
        categoriesNeutrian: '',
        valueMenu: 0
    };

    //changeTabs
    handleChange = (event, value) => {
        console.log(value);
        this.setState({value});
    };

    //openDialogs
    handleOpenDialog = () => {
        console.log('open');
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

    //set value cate neutrian
    handleSelectCategoriesNeutrian = ({target: {value}}) => {
        this.setState({
            categoriesNeutrian: value
        })
    };
    //set value cate menu
    handleSelectMenuNeutrian = ({target:{name,value}}) => {
        console.log(name,value);
        this.setState({
            valueMenu: value
        })
    };
    //Stepper Next Button
    handleStepNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1
        }));
        const {activeStep, categoriesNeutrian,valueMenu} = this.state;
        if (activeStep === 0) {
            // loadNeutrianShowCate(categoriesNeutrian);
            this.props.dispatch(loadNeutrianShowCate(categoriesNeutrian))
        } else if (activeStep === 1) {
            console.log(valueMenu)
        } else if (activeStep === 2) {
            console.log('2')
        }
    };


    render() {
        const {value, isOpen, activeStep, categoriesNeutrian,valueMenu} = this.state;
        const {result} = this.props;
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
                />

                    // result.data.result

            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        result: state.NeutrianCate.data
    }
};

export default connect(mapStateToProps)(Neutrian);
