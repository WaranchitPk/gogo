import React from 'react';
import {
  Grid,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
  Button,
  Paper,
  Typography,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions
} from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import { EmployeeShowAllUser } from "../index";

const styles = {
  root: {
    marginTop: '3%'
  },
  Head: {
    paddingTop: '1%',
    paddingBottom: '1%'
  }
}
const ShowAllUser = ({
  page,
  rowsPerPage,
  onChangeTablePage,
  onChangeTableRowsPerPage,
  dataShowAllUserInTable,
  dataShowAllUserInTableLength,
  selectUser,
  afterSelect,
  statusSelected,
  onSubmitSelectUser,
  dataEmployee,
  isOpenDialogShowSelectEmp,
  onCloseDialogShowSelectEmp,
  onSelectEmp,
  isSelectEmp,
  selectedEmp,
  onSubmitSelectEmp
}) => {
  return (
    <div>
      <Grid container justify="center" style={styles.root}>
        <Grid item xs={10} sm={8}>
          <Paper elevation={5}>
            <Typography align="center" variant="title" style={styles.Head}>ข้อมูลผู้ใช้</Typography>
            <Table>
              <TableHead component="tr">
                <TableCell component="th">เลือกสมาชิก</TableCell>
                <TableCell component="th">ชื่อ</TableCell>
                <TableCell component="th">นามสกุล</TableCell>
                <TableCell component="th">เพศ</TableCell>
                <TableCell component="th">อายุ</TableCell>
                <TableCell component="th">เบอร์โทรศัพท์</TableCell>
                <TableCell component="th">สถานะการเทรน</TableCell>
              </TableHead>
              <TableBody>
                {
                  dataShowAllUserInTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(result => {
                    const isSelected = statusSelected(result.user_id);
                    return (
                      <TableRow
                        key={result.user_id}
                        component="tr"
                        tabIndex={-1}
                        selected={isSelected}
                        onClick={(event) => selectUser(event, result.user_id)}>
                        <TableCell>
                          <Checkbox checked={isSelected}/>
                        </TableCell>
                        <TableCell component="td">{result.user_fName}</TableCell>
                        <TableCell component="td">{result.user_lName}</TableCell>
                        <TableCell component="td">{result.user_gender}</TableCell>
                        <TableCell component="td">{result.user_age}</TableCell>
                        <TableCell component="td">{result.user_tel}</TableCell>
                        <TableCell component="td">{result.training_status}</TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
            <TablePagination
              component='div'
              count={dataShowAllUserInTableLength}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={onChangeTablePage}
              onChangeRowsPerPage={onChangeTableRowsPerPage}/>
            <Button variant="contained" onClick={onSubmitSelectUser}>เลือกเทรนเนอร์</Button>
          </Paper>
        </Grid>
      </Grid>
      <Dialog
        open={isOpenDialogShowSelectEmp}
        onClose={onCloseDialogShowSelectEmp}>
        <DialogTitle>ข้อมูลพนักงาน</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Table>
              <TableHead component="tr">
                <TableCell component="th">เลือกพนักงาน</TableCell>
                <TableCell component="th">ชื่อเข้าใช้ระบบ</TableCell>
                <TableCell component="th">ชื่อพนักงาน</TableCell>
                <TableCell component="th">จำนวนเด็กในสังกัด</TableCell>
              </TableHead>
              <TableBody>
                {
                  dataEmployee && dataEmployee.map(value => (
                    <TableRow
                      key={value.employee_id}
                      component="tr"
                      onClick={(event) => onSelectEmp(event, value.employee_id)}>
                      <TableCell>
                        <Checkbox
                          disableRipple={isSelectEmp}/>
                      </TableCell>
                      <TableCell component="td">{value.employee_Username}</TableCell>
                      <TableCell component="td">{value.employee_Fname}</TableCell>
                      <TableCell component="td">{value.countUser}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialogShowSelectEmp} color="primary">
            ยกเลิก
          </Button>
          <Button onClick={onSubmitSelectEmp} color="primary" autoFocus>
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ShowAllUser;
