import React from 'react';
import {
  Grid,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
  TablePagination,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  FormControl,
  TextField,
  Divider
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ChangeIcon from '@material-ui/icons/Cached';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Slide from '@material-ui/core/Slide';
import { DatePicker } from 'material-ui-pickers';

import '../../style/Admin/employee.css'

const Traisition = (props) => {
  return <Slide direction="up" {...props}/>
};

const Employee = ({
  showFnameLname,
  showFnameLnameLength,
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
  empAge,
  empAddress,
  empTel,
  empSalary,
  empStartDate,
  onChangeInput,
  onChangeStartDate,
  onSubmitAddEmp
}) => {
  return (
    <div>
      <Grid container justify="center" className='centeredCardShowDataFnameLname'>
        <Grid item sm={7} xs={10}>
          <Button variant='fab' color="primary" onClick={onOpenDialogAdd}><AddIcon/></Button>
          <Paper elevation={5}>
            <Table>
              <TableHead>
                <TableRow component="tr">
                  <TableCell component='th'>employee_id</TableCell>
                  <TableCell component='th'>employee_Fname</TableCell>
                  <TableCell component='th'>employee_Lname</TableCell>
                  <TableCell component='th'>employee_Status</TableCell>
                  <TableCell component='th'>action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  showFnameLname.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(result => (
                    <TableRow component="tr" key={result.employee_id}>
                      <TableCell component='td'>{result.employee_id}</TableCell>
                      <TableCell component='td'>{result.employee_Fname}</TableCell>
                      <TableCell component='td'>{result.employee_Lname}</TableCell>
                      <TableCell component='td'>{result.employee_Status}</TableCell>
                      <TableCell component='td'>
                        <Button variant="fab" color="primary"><SearchIcon/></Button>
                        <Button variant="fab" size="small" color='primary'><ChangeIcon/></Button>
                        <Button variant="fab" size="small" color="secondary"><DeleteIcon/></Button>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
            <TablePagination
              component="div"
              count={showFnameLnameLength}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={onChangePage}
              onChangeRowsPerPage={onChangeRowPage}/>
          </Paper>
        </Grid>
      </Grid>
      {/*Dialog Add Employee*/}
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
                animateYearScrolling={false}
              />
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
    </div>
  );
};
export default Employee;
