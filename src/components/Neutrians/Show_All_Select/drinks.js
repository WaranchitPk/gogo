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
// this.props.result ? this.props.result.data.result
const drinks = ({ data, page, rowPerPage, onChangePage, onChangeRow }) => {
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
                    <TableRow key={value.food_id}>
                        <TableCell >
                            {value.food_id}
                        </TableCell>
                        <TableCell>{value.foods_name}</TableCell>
                        <TableCell>{value.food_cal}</TableCell>
                        <TableCell>{value.food_protien}</TableCell>
                        <TableCell>{value.food_fat}</TableCell>
                        <TableCell>{value.food_carb}</TableCell>
                        <TableCell>{value.food_perUnit}</TableCell>
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
export default drinks;
