import React from 'react';
import {
    Grid,
    AppBar,
    Tabs,
    Tab,
    Paper,
    List,
    ListItem,
    Divider,
    Typography
} from '@material-ui/core';
import TabHome from './Training_Equipment/Home'
import MachineForCate from './Training_Equipment/MachineForCategory';
import {TrainingEquipmentComponent} from "../index";

const styles = {
    root: {
        marginTop: '2%'
    }
};

const Training_Equipment = ({
                                resultDataShowHome,
                                resultDataSumMachineInHome,
                                resultDataMachineForCate,
                                resultDataFullMachine,
                                tabValue,
                                onChangeTab,
                                valueTableChangePageHome,
                                valueTableChangeRowPerPageHome,
                                changeTablePageHome,
                                changeTableRowPerPageHome,
                                clickShowFulldataMachine,
                                isOpenDialogFullDataMachine,
                                onCloseDialogFullDataMachine,
                                isOpenDialogAddMachine,
                                onOpenDialogAddMachine,
                                onCloseDialogAddMachine,
                                valueMachineName,
                                valueMachineBuyDate,
                                valueMachinePrice,
                                onChangeInputAddMachine,
                                onChangeDateAddMachine,
                                onImageDrop,
                                imgPreviewAddMachine,
                                loadingUpload,
                                onSubmitAddMachine,
                                userType,
                                isOpenDialogStatusMachine,
                                onOpenDialogInformMachine,
                                onCloseDialogInformMachine,
                                valueMachineStatus,
                                onSubmitStatusMachine,
                                resultStatus
                            }) => {
    return (
        <div>
            <Grid container justify="center" style={styles.root}>
                <Grid item xs={10} sm={9}>
                    <Paper>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={tabValue}
                                onChange={onChangeTab}
                                indicatorColor="primary"
                                textColor="primary"
                                scrollable
                                scrollButtons="auto">
                                <Tab label="หน้าหลัก"/>
                                <Tab label="แขน"/>
                                <Tab label="อก"/>
                                <Tab label="ไหล่"/>
                                <Tab label="หลัง"/>
                                <Tab label="ลู่วิ่ง และ จักรยาน"/>
                            </Tabs>
                        </AppBar>
                        {tabValue === 0 && <TabHome
                            resultData={resultDataShowHome}
                            resultSumMachine={resultDataSumMachineInHome}
                            TableChangePageHome={valueTableChangePageHome}
                            TableChangeRowPerPageHome={valueTableChangeRowPerPageHome}
                            onTableChangePageHome={changeTablePageHome}
                            onTableChangeRowPerPageHome={changeTableRowPerPageHome}
                            resultStatus={resultStatus}/>}
                        {tabValue === 1 && <MachineForCate
                            name="แขน"
                            dataMachine={resultDataMachineForCate}
                            dataFullMachine={resultDataFullMachine}
                            TableChangePageHome={valueTableChangePageHome}
                            TableChangeRowPerPageHome={valueTableChangeRowPerPageHome}
                            onTableChangePageHome={changeTablePageHome}
                            onTableChangeRowPerPageHome={changeTableRowPerPageHome}
                            onClickShowFullDataMachine={clickShowFulldataMachine}
                            isOpenDialogShowFullDataMachine={isOpenDialogFullDataMachine}
                            onCloseDialogShowFullDataMachine={onCloseDialogFullDataMachine}
                            isOpenDialogAddMachine={isOpenDialogAddMachine}
                            onOpenDialogAddMachine={onOpenDialogAddMachine}
                            onCloseDialogAddMachine={onCloseDialogAddMachine}
                            changeInput={onChangeInputAddMachine}
                            onChangeDateMachine={onChangeDateAddMachine}
                            machine_name={valueMachineName}
                            machine_BuyDate={valueMachineBuyDate}
                            machine_Price={valueMachinePrice}
                            onImageDrop={onImageDrop}
                            imgPreviewAddMachine={imgPreviewAddMachine}
                            onSubmitAddMachine={onSubmitAddMachine}
                            loadingUpload={loadingUpload}
                            cateMachine={1}
                            userType={userType}
                            isOpenDialogChange={isOpenDialogStatusMachine}
                            onOpenDialogInformMachine={onOpenDialogInformMachine}
                            onCloseDialogInformMachine={onCloseDialogInformMachine}
                            valueMachineStatus={valueMachineStatus}
                            onSubmitStatusMachine={onSubmitStatusMachine}/>}
                        {tabValue === 2 && <MachineForCate
                            name="อก"
                            dataMachine={resultDataMachineForCate}
                            dataFullMachine={resultDataFullMachine}
                            TableChangePageHome={valueTableChangePageHome}
                            TableChangeRowPerPageHome={valueTableChangeRowPerPageHome}
                            onTableChangePageHome={changeTablePageHome}
                            onTableChangeRowPerPageHome={changeTableRowPerPageHome}
                            onClickShowFullDataMachine={clickShowFulldataMachine}
                            isOpenDialogShowFullDataMachine={isOpenDialogFullDataMachine}
                            onCloseDialogShowFullDataMachine={onCloseDialogFullDataMachine}
                            isOpenDialogAddMachine={isOpenDialogAddMachine}
                            onOpenDialogAddMachine={onOpenDialogAddMachine}
                            onCloseDialogAddMachine={onCloseDialogAddMachine}
                            changeInput={onChangeInputAddMachine}
                            onChangeDateMachine={onChangeDateAddMachine}
                            machine_name={valueMachineName}
                            machine_BuyDate={valueMachineBuyDate}
                            machine_Price={valueMachinePrice}
                            onImageDrop={onImageDrop}
                            imgPreviewAddMachine={imgPreviewAddMachine}
                            onSubmitAddMachine={onSubmitAddMachine}
                            loadingUpload={loadingUpload}
                            cateMachine={2}
                            userType={userType}
                            isOpenDialogChange={isOpenDialogStatusMachine}
                            onOpenDialogInformMachine={onOpenDialogInformMachine}
                            onCloseDialogInformMachine={onCloseDialogInformMachine}
                            valueMachineStatus={valueMachineStatus}
                            onSubmitStatusMachine={onSubmitStatusMachine}/>}
                        {tabValue === 3 && <MachineForCate
                            name="ไหล่"
                            dataMachine={resultDataMachineForCate}
                            dataFullMachine={resultDataFullMachine}
                            TableChangePageHome={valueTableChangePageHome}
                            TableChangeRowPerPageHome={valueTableChangeRowPerPageHome}
                            onTableChangePageHome={changeTablePageHome}
                            onTableChangeRowPerPageHome={changeTableRowPerPageHome}
                            onClickShowFullDataMachine={clickShowFulldataMachine}
                            isOpenDialogShowFullDataMachine={isOpenDialogFullDataMachine}
                            onCloseDialogShowFullDataMachine={onCloseDialogFullDataMachine}
                            isOpenDialogAddMachine={isOpenDialogAddMachine}
                            onOpenDialogAddMachine={onOpenDialogAddMachine}
                            onCloseDialogAddMachine={onCloseDialogAddMachine}
                            changeInput={onChangeInputAddMachine}
                            onChangeDateMachine={onChangeDateAddMachine}
                            machine_name={valueMachineName}
                            machine_BuyDate={valueMachineBuyDate}
                            machine_Price={valueMachinePrice}
                            onImageDrop={onImageDrop}
                            imgPreviewAddMachine={imgPreviewAddMachine}
                            onSubmitAddMachine={onSubmitAddMachine}
                            loadingUpload={loadingUpload}
                            cateMachine={3}
                            userType={userType}
                            isOpenDialogChange={isOpenDialogStatusMachine}
                            onOpenDialogInformMachine={onOpenDialogInformMachine}
                            onCloseDialogInformMachine={onCloseDialogInformMachine}
                            valueMachineStatus={valueMachineStatus}
                            onSubmitStatusMachine={onSubmitStatusMachine}/>}
                        {tabValue === 4 && <MachineForCate
                            name="หลัง"
                            dataMachine={resultDataMachineForCate}
                            dataFullMachine={resultDataFullMachine}
                            TableChangePageHome={valueTableChangePageHome}
                            TableChangeRowPerPageHome={valueTableChangeRowPerPageHome}
                            onTableChangePageHome={changeTablePageHome}
                            onTableChangeRowPerPageHome={changeTableRowPerPageHome}
                            onClickShowFullDataMachine={clickShowFulldataMachine}
                            isOpenDialogShowFullDataMachine={isOpenDialogFullDataMachine}
                            onCloseDialogShowFullDataMachine={onCloseDialogFullDataMachine}
                            isOpenDialogAddMachine={isOpenDialogAddMachine}
                            onOpenDialogAddMachine={onOpenDialogAddMachine}
                            onCloseDialogAddMachine={onCloseDialogAddMachine}
                            changeInput={onChangeInputAddMachine}
                            onChangeDateMachine={onChangeDateAddMachine}
                            machine_name={valueMachineName}
                            machine_BuyDate={valueMachineBuyDate}
                            machine_Price={valueMachinePrice}
                            onImageDrop={onImageDrop}
                            imgPreviewAddMachine={imgPreviewAddMachine}
                            onSubmitAddMachine={onSubmitAddMachine}
                            loadingUpload={loadingUpload}
                            cateMachine={4}
                            userType={userType}
                            isOpenDialogChange={isOpenDialogStatusMachine}
                            onOpenDialogInformMachine={onOpenDialogInformMachine}
                            onCloseDialogInformMachine={onCloseDialogInformMachine}
                            valueMachineStatus={valueMachineStatus}
                            onSubmitStatusMachine={onSubmitStatusMachine}/>}
                        {tabValue === 5 && <MachineForCate
                            name="ลู่วิ่ง และ จักรยาน"
                            dataMachine={resultDataMachineForCate}
                            dataFullMachine={resultDataFullMachine}
                            TableChangePageHome={valueTableChangePageHome}
                            TableChangeRowPerPageHome={valueTableChangeRowPerPageHome}
                            onTableChangePageHome={changeTablePageHome}
                            onTableChangeRowPerPageHome={changeTableRowPerPageHome}
                            onClickShowFullDataMachine={clickShowFulldataMachine}
                            isOpenDialogShowFullDataMachine={isOpenDialogFullDataMachine}
                            onCloseDialogShowFullDataMachine={onCloseDialogFullDataMachine}
                            isOpenDialogAddMachine={isOpenDialogAddMachine}
                            onOpenDialogAddMachine={onOpenDialogAddMachine}
                            onCloseDialogAddMachine={onCloseDialogAddMachine}
                            changeInput={onChangeInputAddMachine}
                            onChangeDateMachine={onChangeDateAddMachine}
                            machine_name={valueMachineName}
                            machine_BuyDate={valueMachineBuyDate}
                            machine_Price={valueMachinePrice}
                            onImageDrop={onImageDrop}
                            imgPreviewAddMachine={imgPreviewAddMachine}
                            onSubmitAddMachine={onSubmitAddMachine}
                            loadingUpload={loadingUpload}
                            cateMachine={5}
                            userType={userType}
                            isOpenDialogChange={isOpenDialogStatusMachine}
                            onOpenDialogInformMachine={onOpenDialogInformMachine}
                            onCloseDialogInformMachine={onCloseDialogInformMachine}
                            valueMachineStatus={valueMachineStatus}
                            onSubmitStatusMachine={onSubmitStatusMachine}/>}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Training_Equipment;
