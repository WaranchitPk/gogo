import React from 'react';
import { ExerciseDiaryComponent } from "./index";
import {
  Grid,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TablePagination,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Icon
} from '@material-ui/core';
import moment from 'moment'
import AddIcon from "@material-ui/icons/Add";
import { DatePicker } from "material-ui-pickers";
import Slide from '@material-ui/core/Slide';
import RightKeyboard from '@material-ui/icons/KeyboardArrowRight';
import LeftKeyboard from '@material-ui/icons/KeyboardArrowLeft';
const Transition = (props) => (
  <Slide direction="up" {...props} />
);

const ExerciseDiary = ({
  TablePage,
  TableRowsPerPage,
  TableOnChangePage,
  TableOnChangeRowsPerPage,
  dataExerciseDiaryInTable,
  dataExerciseDiaryLengthInTable,
  isOpenDialogCreatedData,
  DialogCreatedDataOnOpen,
  DialogCreatedDataOnClose,
  diaryDate,
  onDateFormDiary,
  diaryDetail,
  onChangeDataForm,
  diaryStatus,
  onSubmitFormDiary,
  onChangeStatus,
  isOpenDialogUpdate,
  onCloseDialogUpdate,
  onSubmitUpdate,
  isOpenDialogFormUpdate,
  onOpenDialogFormUpdate,
  onCloseDialogFormUpdate,
  onSubmitFormUpdate
}) => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={10} sm={8}>
          <Button variant='fab' color="primary" onClick={DialogCreatedDataOnOpen}><AddIcon/></Button>
          <Paper elevation={5}>
            <Table>
              <TableHead component="tr">
                <TableCell component="th">วันที่ออกกำลังกาย</TableCell>
                <TableCell component="th">รายละเอียดการออกกำลังกาย</TableCell>
                <TableCell component="th">สถานะการเล่น</TableCell>
                <TableCell component="th">คำแนะนำจากเทรนเนอร์</TableCell>
                <TableCell component="th">ผู้สร้าง</TableCell>
                <TableCell component="th">แก้ไขสถานะการเล่น</TableCell>
                <TableCell component="th">แก้ไขข้อมูลการเล่น</TableCell>
              </TableHead>
              <TableBody>
                {
                  dataExerciseDiaryInTable.map(result => (
                    <TableRow key={result.exDiary_id} component="tr">
                      <TableCell component="td">{moment(result.exDiary_date).format('DD-MM-YYYY')}</TableCell>
                      <TableCell component="td">{result.exDiary_details}</TableCell>
                      <TableCell component="td">{result.exDiary_status}</TableCell>
                      <TableCell component="td">{result.exDiary_recomend}</TableCell>
                      <TableCell component="td">{result.created_by_name}</TableCell>
                      <TableCell component="td">
                        <Button variant="outlined" color="secondary"
                                onClick={() => onChangeStatus(result.exDiary_id)}>แก้ไขสถานะ</Button>
                      </TableCell>
                      <TableCell component="td">
                        <Button variant="outlined" color="secondary"
                                onClick={() => onOpenDialogFormUpdate(result.exDiary_id)}>แก้ไขข้อมูล</Button>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
            <TablePagination
              component='div'
              count={dataExerciseDiaryLengthInTable}
              rowsPerPage={TableRowsPerPage}
              page={TablePage}
              onChangePage={TableOnChangePage}
              onChangeRowsPerPage={TableRowsPerPage}/>
          </Paper>
        </Grid>
      </Grid>
      {/*form Update All Data*/}
      <Dialog
        open={isOpenDialogFormUpdate}
        onClose={onCloseDialogFormUpdate}
        TransitionComponent={Transition}>
        <DialogTitle>แก้ไขข้อมูลการเล่น</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormControl component='p' margin="normal" required fullWidth>
              <DatePicker
                label="วัน/เดือน/ปี"
                format="DD/MM/YYYY"
                value={diaryDate}
                placeholder="10/10/2018"
                // handle clearing outside => pass plain array if you are not controlling value outside
                mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                disableOpenOnEnter
                onChange={onDateFormDiary}
                animateYearScrolling={false}
                leftArrowIcon={<Icon><LeftKeyboard/> </Icon>}
                rightArrowIcon={<Icon> <RightKeyboard/> </Icon>}/>
            </FormControl>
            <FormControl component='p' margin="normal" required fullWidth>
              <TextField label="รายละเอียด" value={diaryDetail} onChange={onChangeDataForm} name="diaryDetail"/>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialogFormUpdate} color="primary">
            ยกเลิก
          </Button>
          <Button onClick={onSubmitFormUpdate} color="primary" autoFocus>
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
      {/*Change Status*/}
      <Dialog
        open={isOpenDialogUpdate}
        onClose={onCloseDialogUpdate}>
        <DialogTitle>แก้ไขสถานะการเข้าเล่น</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormControl component='p' margin="normal" required fullWidth>
              <FormLabel component="legend">สถานะการเล่น</FormLabel>
              <RadioGroup
                name="diaryStatus"
                value={diaryStatus}
                onChange={onChangeDataForm}>
                <FormControlLabel value="มา" control={<Radio/>} label="มา"/>
                <FormControlLabel value="ไม่มา" control={<Radio/>} label="ไม่มา"/>
              </RadioGroup>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialogUpdate} color="primary">
            ยกเลิก
          </Button>
          <Button onClick={onSubmitUpdate} color="primary" autoFocus>
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={isOpenDialogCreatedData}
        onClose={DialogCreatedDataOnClose}
        TransitionComponent={Transition}>
        <DialogTitle>เพิ่มบันทึกการออกกำลังกาย</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormControl component='p' margin="normal" required fullWidth>
              <DatePicker
                label="วัน/เดือน/ปี"
                format="DD/MM/YYYY"
                value={diaryDate}
                placeholder="10/10/2018"
                // handle clearing outside => pass plain array if you are not controlling value outside
                mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                disableOpenOnEnter
                onChange={onDateFormDiary}
                animateYearScrolling={false}
                leftArrowIcon={<Icon><LeftKeyboard/> </Icon>}
                rightArrowIcon={<Icon> <RightKeyboard/> </Icon>}/>
            </FormControl>
            <FormControl component='p' margin="normal" required fullWidth>
              <TextField label="รายละเอียด" value={diaryDetail} onChange={onChangeDataForm} name="diaryDetail"/>
            </FormControl>
            <FormControl component='p' margin="normal" required fullWidth>
              <FormLabel component="legend">เพศ</FormLabel>
              <RadioGroup
                name="diaryStatus"
                value={diaryStatus}
                onChange={onChangeDataForm}>
                <FormControlLabel value="มา" control={<Radio/>} label="มา"/>
                <FormControlLabel value="ไม่มา" control={<Radio/>} label="ไม่มา"/>
              </RadioGroup>
            </FormControl>
            {/*<FormControl component='p' margin="normal" required fullWidth>*/}
              {/*<TextField label="คำแนะนำจากเทรนเนอร์" value={diaryDetail} onChange={onChangeDataForm} name="diaryDetail"/>*/}
            {/*</FormControl>*/}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={DialogCreatedDataOnClose} color="primary">
            ยกเลิก
          </Button>
          <Button onClick={onSubmitFormDiary} color="primary" autoFocus>
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ExerciseDiary;
