
import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Typography
} from "@material-ui/core";
const desserts = ({ data, page, rowPerPage, onChangePage, onChangeRow }) => {
  return (
    <Grid container>
      <Grid item>
        <Table>
          <TableHead className="headTable">
          <TableCell><Typography variant='subheading'>ลำดับที่</Typography></TableCell>
            <TableCell><Typography variant='subheading'>ชื่ออาหาร</Typography></TableCell>
            <TableCell><Typography variant='subheading'>แคลลอรี่ (กรัม)</Typography></TableCell>
            <TableCell><Typography variant='subheading'>โปรตีน (กรัม)</Typography></TableCell>
            <TableCell><Typography variant='subheading'>ไขมัน (กรัม)</Typography></TableCell>
            <TableCell><Typography variant='subheading'>คาร์โบไฮเดรต (กรัม)</Typography></TableCell>
            <TableCell><Typography variant='subheading'>ปริมาณ</Typography></TableCell>
          </TableHead>
          <TableBody className="bodyTable">
            {data.result
              .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
              .map(value => {
                return (
                  <TableRow key={value.dessert_id}>
                    <TableCell component="th" scope="row">
                      {value.dessert_id}
                    </TableCell>
                    <TableCell>{value.dessert_name}</TableCell>
                    <TableCell>{value.dessert_cal}</TableCell>
                    <TableCell>{value.dessert_protien}</TableCell>
                    <TableCell>{value.dessert_fat}</TableCell>
                    <TableCell>{value.dessert_carb}</TableCell>
                    <TableCell>{value.dessert_perUnit}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={data.result.length}
          rowsPerPage={rowPerPage}
          page={page}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRow}
        />
        
      </Grid>
    </Grid>
   
  );
};


export default desserts;
