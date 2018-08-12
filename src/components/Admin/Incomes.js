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
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField
} from '@material-ui/core';
import '../../style/Admin/incomes.css'
import AddIcon from "@material-ui/icons/Add";
import { DatePicker } from "material-ui-pickers";
import Slide from "@material-ui/core/Slide";
import moment from 'moment';
import ShowDataIncomes from './Incomes/TableShowDataIncomes';
import FormIncomes from './Incomes/DialogFormAddDataIncomes';

const Traisition = (props) => {
  return <Slide direction="up" {...props}/>
};
const Incomes = ({
  onOpenDialogAdd,
  showDataIncomes,
  showDataIncomesLength,
  page,
  rowsPerPage,
  onChangeRowPage,
  isOpenDialogAddIncome,
  onCloseDialogAdd,
  incomeName,
  incomeDetail,
  incomeAmount,
  incomeDate,
  onChangeDateIncome,
  onChangeInput,
  onSubmitAddIncome,
  onChangePage
}) => {
  return (
    <div>
      {/*Table Show Data Incomes*/}
      <ShowDataIncomes
        onOpenDialogAdd={onOpenDialogAdd}
        showDataIncomes={showDataIncomes}
        showDataIncomesLength={showDataIncomesLength}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={onChangePage}
        onChangeRowPage={onChangeRowPage}/>

      {/*Dialog Form Incomes*/}
      <FormIncomes
        isOpenDialogAddIncome={isOpenDialogAddIncome}
        onCloseDialogAdd={onCloseDialogAdd}
        onChangeInput={onChangeInput}
        incomeName={incomeName}
        incomeDetail={incomeDetail}
        incomeAmount={incomeAmount}
        incomeDate={incomeDate}
        onChangeDateIncome={onChangeDateIncome}
        onSubmitAddIncome={onSubmitAddIncome}/>
      {/*<Dialog*/}
        {/*open={isOpenDialogAddIncome}*/}
        {/*onClose={onCloseDialogAdd}*/}
        {/*TransitionComponent={Traisition}>*/}
        {/*<DialogTitle id="alert-dialog-slide-title">*/}
          {/*เพิ่มรายการ: รายรับ*/}
        {/*</DialogTitle>*/}
        {/*<Divider/>*/}
        {/*<DialogContent>*/}
          {/*<DialogContentText>*/}
            {/*<FormControl component='p'>*/}
              {/*<TextField label="ชื่อ" value={incomeName} onChange={onChangeInput} name="incomeName"/>*/}
              {/*<TextField label="รายละเอียด" value={incomeDetail} onChange={onChangeInput} name="incomeDetail"/>*/}
              {/*<TextField label="จำนวน" value={incomeAmount} onChange={onChangeInput} name="incomeAmount"/>*/}
              {/*<DatePicker*/}
                {/*label="วัน/เดือน/ปี"*/}
                {/*format="DD/MM/YYYY"*/}
                {/*value={incomeDate}*/}
                {/*placeholder="10/10/2018"*/}
                {/*// handle clearing outside => pass plain array if you are not controlling value outside*/}
                {/*mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}*/}
                {/*disableOpenOnEnter*/}
                {/*onChange={onChangeDateIncome}*/}
                {/*animateYearScrolling={false}*/}
              {/*/>*/}
            {/*</FormControl>*/}
          {/*</DialogContentText>*/}
        {/*</DialogContent>*/}
        {/*<DialogActions>*/}
          {/*<Button color="primary" onClick={onCloseDialogAdd}>*/}
            {/*ยกเลิก*/}
          {/*</Button>*/}
          {/*<Button color="primary" onClick={onSubmitAddIncome}>*/}
            {/*ตกลง*/}
          {/*</Button>*/}
        {/*</DialogActions>*/}
      {/*</Dialog>*/}
    </div>
  );
};

export default Incomes;
