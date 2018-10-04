import React from 'react';

import Slide from '@material-ui/core/Slide';

import DialogAddDataEmp from './Employees/DialogFormAddData';
import TableShowFnameLnameStatus from './Employees/TableShowFnameLnameStatus';
import DialogShowAllData from './Employees/DialogShowAllData';
import DialogFormChange from './Employees/DialogFormChange';
import '../../style/Admin/employee.css'
import {AdminEmployeeComponent} from "../index";

const Traisition = (props) => {
    return <Slide direction="up" {...props}/>
};

const Employee = ({
                      showFnameLname,
                      showFnameLnameLength,
                      showAllDataEmp,
                      rowsPerPage,
                      page,
                      onChangePage,
                      onChangeRowPage,
                      isOpenDialogAdd,
                      onOpenDialogAdd,
                      onCloseDialogAdd,
                      onChangeBirthDate,
                      empUsername,
                      empPassword,
                      empFname,
                      empLname,
                      empBirthDate,
                      empId,
                      empAge,
                      empIdCard,
                      empAddress,
                      empTel,
                      empSalary,
                      empStartDate,
                      onChangeInput,
                      onChangeStartDate,
                      onSubmitAddEmp,
                      onClickShowData,
                      isOpenDialogShowAllData,
                      onCloseDialogShowData,
                      isOpenFormChange,
                      onClickFormChange,
                      onCloseDialogFormChange,
                      onSubmitFormChange,
                      onDeleteDataEmp
                  }) => {
    return (
        <div>
            {/*Table Show Data - Fname, Lname, Status*/}
            <TableShowFnameLnameStatus
                onOpenDialogAdd={onOpenDialogAdd}
                showFnameLname={showFnameLname}
                onClickShowData={onClickShowData}
                showFnameLnameLength={showFnameLnameLength}
                onChangeRowPage={onChangeRowPage}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={onChangePage}
                onClickFormChange={onClickFormChange}
                onDeleteDataEmp={onDeleteDataEmp}/>

            {/*Dialog Add Data - Employee*/}
            <DialogAddDataEmp
                isOpenDialogAdd={isOpenDialogAdd}
                onCloseDialogAdd={onCloseDialogAdd}
                Traisition={Traisition}
                onChangeInput={onChangeInput}
                empUsername={empUsername}
                empPassword={empPassword}
                empFname={empFname}
                empLname={empLname}
                empBirthDate={empBirthDate}
                onChangeBirthDate={onChangeBirthDate}
                empAge={empAge}
                empId={empId}
                empIdCard={empIdCard}
                empAddress={empAddress}
                empTel={empTel}
                empSalary={empSalary}
                empStartDate={empStartDate}
                onChangeStartDate={onChangeStartDate}
                onSubmitAddEmp={onSubmitAddEmp}/>

            {/*Dialog Show All Data - Emp*/}
            <DialogShowAllData
                isOpenDialogShowAllData={isOpenDialogShowAllData}
                onCloseDialogShowData={onCloseDialogShowData}
                Traisition={Traisition}
                showAllDataEmp={showAllDataEmp}/>
            {/*Dialog Form Change Update*/}
            <DialogFormChange
                isOpenDialogFormChange={isOpenFormChange}
                onCloseDialogFormChange={onCloseDialogFormChange}
                Traisition={Traisition}
                onChangeInput={onChangeInput}
                onChangeBirthDate={onChangeBirthDate}
                onChangeStartDate={onChangeStartDate}
                onSubmitFormChange={onSubmitFormChange}
                empFname={empFname}
                empLname={empLname}
                empBirthDate={empBirthDate}
                onChangeBirthDate={onChangeBirthDate}
                empAge={empAge}
                empAddress={empAddress}
                empTel={empTel}
                empSalary={empSalary}
                empStartDate={empStartDate}/>
        </div>
    );
};
export default Employee;
