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
  InputAdornment
} from "@material-ui/core";
import { DatePicker } from "material-ui-pickers";
import Slide from "@material-ui/core/Slide";

const Traisition = (props) => {
  return <Slide direction="up" {...props}/>
};

const FormExpenses = ({
  isOpenDialogAddExpenses,
  onCloseDialogAdd,
  onChangeInput,
  expensesName,
  expensesDetail,
  expensesAmount,
  expensesDate,
  onChangeDateexpenses,
  onSubmitAddexpenses
}) => {
  return (
    <div>
      <Dialog
        open={isOpenDialogAddExpenses}
        onClose={onCloseDialogAdd}
        TransitionComponent={Traisition}>
        <DialogTitle id="alert-dialog-slide-title">
          เพิ่มรายการ: รายจ่าย
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText>
            <FormControl component='p' margin="normal" required fullWidth>
              <TextField label="ชื่อ" value={expensesName} onChange={onChangeInput} name="expensesName"/>
            </FormControl>
            <FormControl component='p' margin="normal" required fullWidth>
              <TextField label="รายละเอียด" value={expensesDetail} onChange={onChangeInput} name="expensesDetail"/>
            </FormControl>
            <FormControl component='p' margin="normal" required fullWidth>
              <TextField
                label="จำนวน"
                value={expensesAmount}
                onChange={onChangeInput}
                name="expensesAmount"
                InputProps={{
                  endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                }}
              type="number"/>
            </FormControl>
            <FormControl component='p' margin="normal" required fullWidth>
              <DatePicker
                label="วัน/เดือน/ปี"
                format="DD/MM/YYYY"
                value={expensesDate}
                placeholder="10/10/2018"
                // handle clearing outside => pass plain array if you are not controlling value outside
                mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                disableOpenOnEnter
                onChange={onChangeDateexpenses}
                animateYearScrolling={false}/>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onCloseDialogAdd}>
            ยกเลิก
          </Button>
          <Button color="primary" onClick={onSubmitAddexpenses}>
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormExpenses;
