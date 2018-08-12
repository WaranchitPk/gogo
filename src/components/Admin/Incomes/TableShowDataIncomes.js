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
import moment from "moment";

const ShowDataIncome = ({
  onOpenDialogAdd,
  showDataIncomes,
  showDataIncomesLength,
  page,
  rowsPerPage,
  onChangePage,
  onChangeRowPage
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
                  showDataIncomes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(result => (
                    <TableRow component="tr" key={result.incomes_id}>
                      <TableCell component='td'>{result.incomes_name}</TableCell>
                      <TableCell component='td'>{result.incomes_details}</TableCell>
                      <TableCell component='td'>{result.incomes_amount.toLocaleString()}</TableCell>
                      <TableCell component='td'>{moment(result.incomes_date).format('YYYY-MM-DD')}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
            <TablePagination
              component="div"
              count={showDataIncomesLength}
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

export default ShowDataIncome;
