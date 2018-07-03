import React from 'react';
import {
    Paper,
    Grid,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContentText,
    DialogContent,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
    Typography
} from '@material-ui/core';
import moment from 'moment'
import {DateTimePicker} from 'material-ui-pickers';
import '../style/history.css';

const History = ({isOpen, handleOpen, handleClose, dateNow, handleDateChange, Detail, handleChangeText, handleOnSubmit, data, page, rowPerPage, onChangePage, onChangeRow}) => {
    return (
        <Grid container className='centered' alignItems='center' justify='center'>
            <Grid item xs={8} sm={6}>
                <Paper elevation={10}>
                    <Grid container alignItems='flex-end' justify='flex-end'>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleOpen}>Add</Button>
                            <Dialog
                                open={isOpen}
                                onClose={handleClose}>
                                <DialogTitle>History</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        <DateTimePicker
                                            autoOk
                                            ampm={false}
                                            disableFuture
                                            value={dateNow}
                                            onChange={handleDateChange}
                                            label="24h clock"
                                        />
                                        <form>
                                            <TextField
                                                id="name"
                                                label="Details"
                                                value={Detail}
                                                onChange={handleChangeText}
                                                margin="normal"
                                            />
                                        </form>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Disagree
                                    </Button>
                                    <Button onClick={handleOnSubmit} color="primary" autoFocus>
                                        Agree
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </Grid>
                    <Grid container alignItems='center' justify='center'>
                        <Grid item>
                            <Typography variant="title" className='titleTable'>
                                ประวัติการเข้าใช้งาน
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container alignItems='center' justify='center'>
                        <Grid item>
                            <Table>
                                <TableHead className='headTable'>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant='subheading'>วัน/เวลา</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant='subheading'>รายละเอียด</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                {/*stat_id: 4, stat_detail: "เล่นอก", stat_date*/}
                                <TableBody className='bodyTable'>
                                    {data.data.slice(page * rowPerPage, page * rowPerPage + rowPerPage).map(n => {
                                        return (
                                            <TableRow key={n.stat_id}>
                                                <TableCell>{

                                                    moment(n.stat_date).format('YYYY-MM-DD HH:mm')
                                                }
                                                </TableCell>
                                                <TableCell>{n.stat_detail}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                            <TablePagination
                                component='div'
                                count={data.data.length}
                                rowsPerPage={rowPerPage}
                                page={page}
                                onChangePage={onChangePage}
                                onChangeRowsPerPage={onChangeRow}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default History;
