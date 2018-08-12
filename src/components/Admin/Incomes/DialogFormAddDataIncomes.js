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
import Slide from "@material-ui/core/Slide";

const Traisition = (props) => {
  return <Slide direction="up" {...props}/>
};

const FormIncome = ({
  isOpenDialogAddIncome,
  onCloseDialogAdd,
  onChangeInput,
  incomeName,
  incomeDetail,
  incomeAmount,
  incomeDate,
  onChangeDateIncome,
  onSubmitAddIncome
}) => {
  return (
    <div>
      <Dialog
        open={isOpenDialogAddIncome}
        onClose={onCloseDialogAdd}
        TransitionComponent={Traisition}>
        <DialogTitle id="alert-dialog-slide-title">
          เพิ่มรายการ: รายรับ
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText>
            <FormControl component='p'>
              <TextField label="ชื่อ" value={incomeName} onChange={onChangeInput} name="incomeName"/>
              <TextField label="รายละเอียด" value={incomeDetail} onChange={onChangeInput} name="incomeDetail"/>
              <TextField label="จำนวน" value={incomeAmount} onChange={onChangeInput} name="incomeAmount"/>
              <DatePicker
                label="วัน/เดือน/ปี"
                format="DD/MM/YYYY"
                value={incomeDate}
                placeholder="10/10/2018"
                // handle clearing outside => pass plain array if you are not controlling value outside
                mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                disableOpenOnEnter
                onChange={onChangeDateIncome}
                animateYearScrolling={false}
              />
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onCloseDialogAdd}>
            ยกเลิก
          </Button>
          <Button color="primary" onClick={onSubmitAddIncome}>
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormIncome;
