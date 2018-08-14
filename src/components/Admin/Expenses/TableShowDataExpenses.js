import React from 'react';
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";

const ShowDataExpenses = ({
  onOpenDialogAdd,
  showDataExpeses,
  showDataExpesesLength,
  page,
  rowsPerPage,
  onChangePage,
  onChangeRowPage,
  year,
  month,
  onSelectYear,
  onSelectMonth,
  dataYearSelectExpenses,
  dataMonthSelectExpenses
}) => {
  return (
    <div>
      <Grid container justify="center" className='centered'>
        <Grid item sm={7} xs={10}>
          <Button variant='fab' color="primary" onClick={onOpenDialogAdd}><AddIcon/></Button>
          <Paper elevation={5}>
            <Table>
              <TableHead>
                <TableRow component="tr">
                  <TableCell component='th'>income_name</TableCell>
                  <TableCell component='th'>income_detail</TableCell>
                  <TableCell component='th'>income_amount</TableCell>
                  <TableCell component='th'>income_date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  showDataExpeses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(result => (
                    <TableRow component="tr" key={result.expenses_id}>
                      <TableCell component='td'>{result.expenses_names}</TableCell>
                      <TableCell component='td'>{result.expenses_details}</TableCell>
                      <TableCell component='td'>{result.expenses_amount.toLocaleString()}</TableCell>
                      <TableCell component='td'>{moment(result.expenses_date).format('YYYY-MM-DD')}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
            <TablePagination
              component="div"
              count={showDataExpesesLength}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={onChangePage}
              onChangeRowsPerPage={onChangeRowPage}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowDataExpenses;
