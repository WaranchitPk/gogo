import React from 'react';
import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    ListItem, Button
} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});
const TableSelectFood = ({valueFood, statusSelected, rowPerPage,classes,page,selectFood,onChangePage,onChangeRow,submitSelectFood}) => (
    <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableCell>รายการอาหารที่ต้องการ</TableCell>
                    <TableCell>ชื่ออาหาร</TableCell>
                    <TableCell>แคลลอรี่ (กรัม)</TableCell>
                    <TableCell>โปรตีน (กรัม)</TableCell>
                    <TableCell>ไขมัน (กรัม)</TableCell>
                    <TableCell>คาร์โบไฮเดรต (กรัม)</TableCell>
                    <TableCell>ปริมาณ/หน่วยบริโภค</TableCell>
                </TableHead>
                <TableBody>
                    {
                        valueFood && valueFood.data.result.slice(page * rowPerPage, page * rowPerPage + rowPerPage).map((value) => {
                            const isSelected = statusSelected(value.food_id);
                            return (
                                <TableRow key={value.food_id} component="th" scope="row"
                                          tabIndex={-1}
                                          selected={isSelected}
                                          onClick={(event) => selectFood(event, value.food_id)}>
                                    <TableCell>
                                        <Checkbox checked={isSelected}/>
                                    </TableCell>
                                    <TableCell>{value.foods_name}</TableCell>
                                    <TableCell>{value.food_cal}</TableCell>
                                    <TableCell>{value.food_protien}</TableCell>
                                    <TableCell>{value.food_fat}</TableCell>
                                    <TableCell>{value.food_carb}</TableCell>
                                    <TableCell>{value.food_perUnit}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            {
                valueFood && (
                    <TablePagination
                        component="div"
                        count={valueFood.data.result.length}
                        rowsPerPage={rowPerPage}
                        page={page}
                        onChangePage={onChangePage}
                        onChangeRowsPerPage={onChangeRow}
                    />
                )
            }
            <Button variant="fab" onClick={submitSelectFood}>Go</Button>
        </div>
    </Paper>
);

export default withStyles(styles)(TableSelectFood);
