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
  TextField
} from "@material-ui/core";
import { DatePicker } from "material-ui-pickers";

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
  empAddress,
  empTel,
  empSalary,
  empStartDate,
  onChangeStartDate,
  onSubmitAddEmp
}) => {
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
            <TextField label="ยูเซอร์เนม" value={empUsername} onChange={onChangeInput} name="empUsername"/>
            <TextField label="พาสเวิร์ด" type="password" value={empPassword} onChange={onChangeInput}
                       name="empPassword"/>
            <TextField label="ชื่อ" value={empFname} onChange={onChangeInput} name="empFname"/>
            <TextField label="นามสกุล" value={empLname} onChange={onChangeInput} name="empLname"/>
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
            />
            <TextField label="อายุ" value={empAge} onChange={onChangeInput} name="empAge"/>
            <TextField label="ที่อยู่" value={empAddress} onChange={onChangeInput} name="empAddress"/>
            <TextField label="เบอร์โทรศัพ" value={empTel} onChange={onChangeInput} name="empTel"/>
            <TextField label="เงืนเดือน" value={empSalary} onChange={onChangeInput} name="empSalary"/>
            <DatePicker
              label="วันที่เริ่มงาน"
              format="DD/MM/YYYY"
              value={empStartDate}
              placeholder="10/10/2018"
              // handle clearing outside => pass plain array if you are not controlling value outside
              mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
              disableOpenOnEnter
              onChange={onChangeStartDate}
              animateYearScrolling={false}/>
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
