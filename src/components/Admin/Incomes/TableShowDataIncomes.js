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
    TableRow,
    TextField,
    MenuItem,
    Card,
    CardContent,
    Divider,
    Typography,
    Select,
    InputLabel,
    FormControl,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import '../../../style/Admin/incomes.css'
import Add from '@material-ui/icons/Add'

const styles = {
    Button: {
        marginBottom: '2%',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: '#E0F7FA',
    },
};
const ShowDataIncome = ({
                            onOpenDialogAdd,
                            showDataIncomes,
                            showDataIncomesLength,
                            page,
                            rowsPerPage,
                            onChangePage,
                            onChangeRowPage,
                            DataIncomesCate,
                            onChangeCate,
                            onsubmitCate,
                            changeCate,
                            onOpenDialocDay,
                            receiveDataIncomeCateChange
                        }) => {
    return (
        <div>
            <Typography
                color={"textSecondary"}
                variant={"display3"}
                align={"center"}
                id="title">
                เรียกดูข้อมูลรายรับตามประเภทที่ต้องการ
            </Typography>
            <Divider/>
            <Grid container={true} justify={"center"} id="searchCateMarginTop">
                <Card>
                    <CardContent>
                        <Typography color="textSecondary">
                            เลือกประเภทรายรับ
                        </Typography>
                        <FormControl id="searchCate">
                            <InputLabel>รายการรายรับ</InputLabel>
                            <Select
                                value={changeCate}
                                onChange={onChangeCate}>
                                {
                                    receiveDataIncomeCateChange.map((cate) => (
                                        <MenuItem key={cate.incomes_cateId}
                                                  value={cate.incomes_cateId}>{cate.incomes_cateName}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <br/>
                        <Button variant='contained'
                                color="primary"
                                onClick={onsubmitCate}
                                style={styles.Button}
                                id="marginBtSearch">เรียกดู</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Divider/>
            <Typography
                color={"textSecondary"}
                variant={"display2"}
                align={"center"}
                id="title">
                ตารางแสดงรายละเอียด: รายรับ
            </Typography>
            <Divider/>
            <Grid container justify="center">
                <Grid item sm={10} xs={10}>
                    <Button variant='contained'
                            color="primary"
                            onClick={onOpenDialogAdd}
                            style={styles.Button}
                            id="marginBtAdd">
                        <Add/>
                        เพิ่มรายรับ: อาหารและเครื่องดื่ม</Button>
                    <Button variant='contained'
                            color="primary"
                            onClick={onOpenDialocDay}
                            style={styles.Button}
                            id="marginBtAdd">
                        <Add/>
                        เพิ่มรายรับ: ค่าสมาชิกรายวัน</Button>
                    <Paper elevation={5} id="tableShow">
                        <Table>
                            <TableHead>
                                <TableRow component="tr">
                                    <TableCell component='th'><Typography variant={"title"}>ชื่อรายรับ</Typography></TableCell>
                                    <TableCell component='th'><Typography variant={"title"}>รายละเอียดรายรับ</Typography></TableCell>
                                    <TableCell component='th'><Typography variant={"title"}>จำนวน(บาท)</Typography></TableCell>
                                    <TableCell component='th'><Typography variant={"title"}>วันที่รับ</Typography></TableCell>
                                    <TableCell component='th'><Typography variant={"title"}>ประเภทรายรับ</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    showDataIncomes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(result => (
                                        <TableRow component="tr" key={result.incomes_id}>
                                            <TableCell component='td'><Typography variant={"subheading"}>{result.incomes_name}</Typography></TableCell>
                                            <TableCell component='td'><Typography variant={"subheading"}>{result.incomes_details}</Typography></TableCell>
                                            <TableCell
                                                component='td'><Typography variant={"subheading"}>{result.incomes_amount.toLocaleString()}</Typography></TableCell>
                                            <TableCell
                                                component='td'><Typography variant={"subheading"}>{moment(result.incomes_date).format('DD-MM-YYYY')}</Typography></TableCell>
                                            <TableCell component='td'><Typography variant={"subheading"}>{result.incomes_cateName}</Typography></TableCell>
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
