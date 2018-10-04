import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    FormControl,
    TextField,
    Icon
} from "@material-ui/core";
import {DatePicker} from "material-ui-pickers";
import RightKeyboard from '@material-ui/icons/KeyboardArrowRight';
import LeftKeyboard from '@material-ui/icons/KeyboardArrowLeft';

const FormAddData = ({
                         isOpenDialogAdd,
                         onCloseDialogAdd,
                         Traisition,
                         onChangeInput,
                         empUsername,
                         empPassword,
                         empFname,
                         empLname,
                         empBirthDate,
                         onChangeBirthDate,
                         empAge,
                         empId,
                         empIdCard,
                         empAddress,
                         empTel,
                         empSalary,
                         empStartDate,
                         onChangeStartDate,
                         onSubmitAddEmp
                     }) => {
    console.log('asfasfasfsafasfasfasf', empId)
    return (
        <Dialog
            open={isOpenDialogAdd}
            onClose={onCloseDialogAdd}
            TransitionComponent={Traisition}>
            <DialogTitle id="alert-dialog-slide-title">
                เพิ่มข้อมูลพนักงาน
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <DialogContentText>
                    <FormControl component='p'>
                        <TextField
                            label="รหัสพนักงาน"
                            value={empId}
                            name="empId"
                            inputProps={{maxLength: 10}}
                            type="number"
                            disabled={true}/>
                        <TextField label="ยูเซอร์เนม" value={empUsername} onChange={onChangeInput} name="empUsername"/>
                        <TextField label="พาสเวิร์ด" type="password" value={empPassword} onChange={onChangeInput}
                                   name="empPassword"/>
                        <TextField label="ชื่อ" value={empFname} onChange={onChangeInput} name="empFname"/>
                        <TextField label="นามสกุล" value={empLname} onChange={onChangeInput} name="empLname"/>
                        <TextField label="รหัสบัตรประชาชน" value={empIdCard} onChange={onChangeInput} name="empIdCard"
                                   type="number"/>
                        <DatePicker
                            label="วันเกิด"
                            format="DD/MM/YYYY"
                            value={empBirthDate}
                            placeholder="10/10/2018"
                            // handle clearing outside => pass plain array if you are not controlling value outside
                            mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                            disableOpenOnEnter
                            onChange={onChangeBirthDate}
                            animateYearScrolling={false}
                            leftArrowIcon={<Icon><LeftKeyboard/> </Icon>}
                            rightArrowIcon={<Icon> <RightKeyboard/> </Icon>}/>
                        <TextField label="อายุ" value={empAge} onChange={onChangeInput} name="empAge" type="number"/>
                        <TextField label="ที่อยู่" value={empAddress} onChange={onChangeInput} name="empAddress"/>
                        <TextField label="เบอร์โทรศัพ" value={empTel} onChange={onChangeInput} name="empTel"
                                   type="number"/>
                        <TextField label="เงืนเดือน" value={empSalary} onChange={onChangeInput} name="empSalary"
                                   type="number"/>
                        <DatePicker
                            label="วันที่เริ่มงาน"
                            format="DD/MM/YYYY"
                            value={empStartDate}
                            placeholder="10/10/2018"
                            // handle clearing outside => pass plain array if you are not controlling value outside
                            mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                            disableOpenOnEnter
                            onChange={onChangeStartDate}
                            animateYearScrolling={false}
                            leftArrowIcon={<Icon><LeftKeyboard/> </Icon>}
                            rightArrowIcon={<Icon> <RightKeyboard/> </Icon>}/>
                    </FormControl>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={onCloseDialogAdd}>
                    ยกเลิก
                </Button>
                <Button color="primary" onClick={onSubmitAddEmp}>
                    ตกลง
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FormAddData;
