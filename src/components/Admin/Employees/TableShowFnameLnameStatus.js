import React from 'react';
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import ChangeIcon from "@material-ui/icons/Cached";
import DeleteIcon from "@material-ui/icons/Delete";

const TableShowFnameLnameStatus = ({
  onOpenDialogAdd,
  showFnameLname,
  onClickShowData,
  showFnameLnameLength,
  onChangeRowPage,
  rowsPerPage,
  page,
  onChangePage,
  onClickFormChange,
  onDeleteDataEmp
}) => {
  return (
    <Grid container justify="center" className='centeredCardShowDataFnameLname'>
      <Grid item sm={7} xs={10}>
        <Button variant='contained' color="primary" onClick={onOpenDialogAdd}>เพิ่มข้อมูล</Button>
        <Paper elevation={5}>
          <Table>
            <TableHead>
              <TableRow component="tr">
                <TableCell component='th'>รหัสพนักงาน</TableCell>
                <TableCell component='th'>ชื่อพนักงาน</TableCell>
                <TableCell component='th'>นามสกุลพนักงาน</TableCell>
                <TableCell component='th'>เพศ</TableCell>
                <TableCell component='th'>ดูข้อมูล</TableCell>
                <TableCell component='th'>แก้ไขข้อมูล</TableCell>
                <TableCell component='th'>ลบข้อมูล</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                showFnameLname.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(result => (
                  <TableRow component="tr" key={result.employee_id}>
                    <TableCell component='td'>{result.employee_id}</TableCell>
                    <TableCell component='td'>{result.employee_Fname}</TableCell>
                    <TableCell component='td'>{result.employee_Lname}</TableCell>
                    <TableCell component='td'>{result.employee_gender}</TableCell>
                    <TableCell component='td'>
                      <Button variant="contained" color="primary"
                              onClick={() => onClickShowData(result.employee_id)}><SearchIcon/></Button>

                    </TableCell>
                    <TableCell component="td">
                      <Button variant="contained"  color='primary'
                              onClick={() => onClickFormChange(result.employee_id)}><ChangeIcon/></Button>
                    </TableCell>
                    <TableCell component="td">
                      <Button variant="contained"  color="secondary"
                              onClick={() => onDeleteDataEmp(result.employee_id)}><DeleteIcon/></Button>
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
  );
};

export default TableShowFnameLnameStatus;
