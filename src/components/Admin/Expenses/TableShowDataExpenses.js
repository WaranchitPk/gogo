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
                              receiveDataExpensesCateChoose,
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
                                    receiveDataExpensesCateChoose.map((cate) => (
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
                <Grid item sm={10} xs={10}>
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
                                    <TableCell component='th'><Typography variant={"title"}>ชื่อรายจ่าย</Typography></TableCell>
                                    <TableCell component='th'><Typography variant={"title"}>รายละเอียดรายจ่าย</Typography></TableCell>
                                    <TableCell component='th'><Typography variant={"title"}>จำนวน(บาท)</Typography></TableCell>
                                    <TableCell component='th'><Typography variant={"title"}>วันที่จ่าย</Typography></TableCell>
                                    <TableCell component='th'><Typography variant={"title"}>ประเภทรายจ่าย</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    showDataExpeses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(result => (
                                        <TableRow component="tr" key={result.expenses_id}>
                                            <TableCell component='td'><Typography variant={"subheading"}>{result.expenses_names}</Typography></TableCell>
                                            <TableCell component='td'><Typography variant={"subheading"}>{result.expenses_details}</Typography></TableCell>
                                            <TableCell
                                                component='td'><Typography variant={"subheading"}>{result.expenses_amount.toLocaleString()}</Typography></TableCell>
                                            <TableCell
                                                component='td'><Typography variant={"subheading"}>{moment(result.expenses_date).format('DD-MM-YYYY')}</Typography></TableCell>
                                            <TableCell
                                                component='td'><Typography variant={"subheading"}>{result.expenses_cateName}</Typography></TableCell>
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
