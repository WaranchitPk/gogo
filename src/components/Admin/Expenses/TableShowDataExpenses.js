import React from 'react';
import {
    Button, Card, CardContent, Divider, FormControl,
    Grid, InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow, Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import moment from "moment";
import '../../../style/Admin/incomes.css'

const styles = {
    Button: {
        marginBottom: '2%',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: '#E0F7FA',
    },
};

const ShowDataExpenses = ({
                              onOpenDialogAdd,
                              showDataExpeses,
                              showDataExpesesLength,
                              page,
                              rowsPerPage,
                              onChangePage,
                              onChangeRowPage,
                              dataExpensesCate,
                              onChangeCateToShowData,
                              expensesCateToShow,
                              onSubmitShowDataForCate,
                              year,
                              month,
                              onSelectYear,
                              onSelectMonth,
                              dataYearSelectExpenses,
                              dataMonthSelectExpenses
                          }) => {
    return (
        <div>
            <Typography
                color={"textSecondary"}
                variant={"display1"}
                align={"center"}
                id="title">
                เรียกดูข้อมูลรายจ่ายตามประเภทที่ต้องการ
            </Typography>
            <Divider/>
            <Grid container={true} justify={"center"} id="searchCateMarginTop">
                <Card>
                    <CardContent>
                        <Typography color="textSecondary">
                            เลือกประเภทรายรับ
                        </Typography>
                        <FormControl id="searchCate">
                            <InputLabel>รายการรายจ่าย</InputLabel>
                            <Select
                                value={expensesCateToShow}
                                onChange={onChangeCateToShowData}>
                                {
                                    dataExpensesCate.map((cate) => (
                                        <MenuItem key={cate.expenses_cateId}
                                                  value={cate.expenses_cateId}>{cate.expenses_cateName}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <br/>
                        <Button variant='contained'
                                color="primary"
                                style={styles.Button}
                                onClick={onSubmitShowDataForCate}
                                id="marginBtSearch">เรียกดู</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Divider/>
            <Typography
                color={"textSecondary"}
                variant={"display1"}
                align={"center"}
                id="title">
                ตารางแสดงรายละเอียด: รายจ่าย
            </Typography>
            <Divider/>
            <Grid container justify="center">
                <Grid item sm={7} xs={10}>
                    <Button
                        variant='contained'
                        onClick={onOpenDialogAdd}
                        style={styles.Button}
                        id="marginBtAdd">
                        <AddIcon/>
                        เพิ่มรายจ่าย</Button>
                    <Paper elevation={5} id="tableShow">
                        <Table>
                            <TableHead>
                                <TableRow component="tr">
                                    <TableCell component='th'>ชื่อรายจ่าย</TableCell>
                                    <TableCell component='th'>รายละเอียดรายจ่าย</TableCell>
                                    <TableCell component='th'>จำนวน(บาท)</TableCell>
                                    <TableCell component='th'>วันที่จ่าย</TableCell>
                                    <TableCell component='th'>ประเภทรายจ่าย</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    showDataExpeses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(result => (
                                        <TableRow component="tr" key={result.expenses_id}>
                                            <TableCell component='td'>{result.expenses_names}</TableCell>
                                            <TableCell component='td'>{result.expenses_details}</TableCell>
                                            <TableCell
                                                component='td'>{result.expenses_amount.toLocaleString()}</TableCell>
                                            <TableCell
                                                component='td'>{moment(result.expenses_date).format('DD-MM-YYYY')}</TableCell>
                                            <TableCell
                                                component='td'>{result.expenses_cateName}</TableCell>
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
