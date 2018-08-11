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
  onClickFormChange
}) => {
  return (
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
                <TableCell component='th'>employee_Gender</TableCell>
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
                    <TableCell component='td'>{result.employee_gender}</TableCell>
                    <TableCell component='td'>
                      <Button variant="fab" color="primary"
                              onClick={() => onClickShowData(result.employee_id)}><SearchIcon/></Button>
                      <Button variant="fab" size="small" color='primary'
                              onClick={() => onClickFormChange(result.employee_id)}><ChangeIcon/></Button>
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
  );
};

export default TableShowFnameLnameStatus;
