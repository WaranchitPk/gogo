import React from 'react';
import {
  Grid,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
  Typography,
  Button,
  Dialog,
  AppBar,
  List,
  ListItem,
  Toolbar,
  ListItemText,
  IconButton,
  Divider,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
  TextField,
  DialogActions,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { EmployeeShowUserTraining } from "../index";
import CloseIcon from '@material-ui/icons/Close';
import Slide from "@material-ui/core/Slide";
import moment from "moment";
import { DatePicker } from "material-ui-pickers";
import AddIcon from "@material-ui/icons/Add";

const Transition = (props) => (
  <Slide direction="up" {...props} />
);

const styles = {
  root: {
    marginTop: '5%'
  },
  HeadTitle: {
    paddingTop: '1%',
    paddingBottom: '1%'
  }
}

const UserTraining = ({
  resultUserTraining,
  isOpenDialogExerciseDiary,
  onOpenDialogExerciseDiary,
  onCloseDialogExerciseDiary,
  resultUserExerciseDiary,
  isOpenDialogFormUpdate,
  onChangeStatus,
  onOpenDialogFormUpdate,
  onCloseDialogFormUpdate,
  diaryDate,
  onDateFormDiary,
  diaryDetail,
  onChangeDataForm,
  diaryRecomend,
  onSubmitFormUpdate,
  isOpenDialogUpdate,
  onCloseDialogUpdate,
  diaryStatus,
  isOpenDialogCreatedData,
  DialogCreatedDataOnClose,
  onSubmitUpdate,
  onSubmitFormDiary,
  onOpenDialogFormCreateDataDiary
}) => {
  return (
    <div>
      <Grid container justify="center" style={styles.root}>
        <Grid item xs={10} sm={8}>
          <Paper elevation={5}>
            <Typography align="center" variant="title" style={styles.HeadTitle}>ข้อมูลผู้ใช้</Typography>
            <Table>
              <TableHead component="tr">
                <TableCell component="th">ชื่อ</TableCell>
                <TableCell component="th">นามสกุล</TableCell>
                <TableCell component="th">เพศ</TableCell>
                <TableCell component="th">อายุ</TableCell>
                <TableCell component="th">เบอร์โทรศัพท์</TableCell>
                <TableCell component="th">บันทึกการออกกำลัง</TableCell>
              </TableHead>
              <TableBody>
                {
                  resultUserTraining.map(result => (
                    <TableRow
                      key={result.user_id}
                      component="tr">
                      <TableCell component="td">{result.user_fName}</TableCell>
                      <TableCell component="td">{result.user_lName}</TableCell>
                      <TableCell component="td">{result.user_gender}</TableCell>
                      <TableCell component="td">{result.user_age}</TableCell>
                      <TableCell component="td">{result.user_tel}</TableCell>
                      <TableCell component="td">
                        <Button variant="contained" color="primary"
                                onClick={() => onOpenDialogExerciseDiary(result.user_id)}>
                          <SearchIcon/> ค้นหา
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
      <Dialog
        fullScreen
        open={isOpenDialogExerciseDiary}
        onClose={onCloseDialogExerciseDiary}
        TransitionComponent={Transition}>
        <AppBar>
          <Toolbar>
            <IconButton color="inherit" onClick={onCloseDialogExerciseDiary}>
              <CloseIcon/>
            </IconButton>
            บักทึกการออกกำลังกายของผู้ใช้
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania"/>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys"/>
          </ListItem>
        </List>
        <List>
          <Button variant='fab' color="primary" onClick={onOpenDialogFormCreateDataDiary}><AddIcon/></Button>
          <Table>
            <TableHead component="tr">
              <TableCell component="th">วันที่ออกกำลังกาย</TableCell>
              <TableCell component="th">รายละเอียดการออกกำลังกาย</TableCell>
              <TableCell component="th">สถานะการเล่น</TableCell>
              <TableCell component="th">คำแนะนำจากเทรนเนอร์</TableCell>
              <TableCell component="th">แก้ไขสถานะการเล่น</TableCell>
              <TableCell component="th">แก้ไขข้อมูลการเล่น</TableCell>
            </TableHead>
            <TableBody>
              {
                resultUserExerciseDiary.map(result => (
                  <TableRow key={result.exDiary_id} component="tr">
                    <TableCell component="td">{moment(result.exDiary_date).format('DD-MM-YYYY')}</TableCell>
                    <TableCell component="td">{result.exDiary_details}</TableCell>
                    <TableCell component="td">{result.exDiary_status}</TableCell>
                    <TableCell component="td">{result.exDiary_recomend}</TableCell>
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
        </List>
      </Dialog>
      <Dialog
        open={isOpenDialogFormUpdate}
        onClose={onCloseDialogFormUpdate}
        TransitionComponent={Transition}>
        <DialogTitle>แก้ไขบันทึกการออกกำลังกาย</DialogTitle>
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
                animateYearScrolling={false}/>
            </FormControl>
            <FormControl component='p' margin="normal" required fullWidth>
              <TextField label="รายละเอียด" value={diaryDetail} onChange={onChangeDataForm} name="diaryDetail"/>
            </FormControl>
            <FormControl component='p' margin="normal" required fullWidth>
              <TextField label="คำแนะนำของเทรนเนอร์" value={diaryRecomend} onChange={onChangeDataForm}
                         name="diaryRecomend"/>
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
      <Dialog
        open={isOpenDialogUpdate}
        onClose={onCloseDialogUpdate}>
        <DialogTitle>แก้ไขสถานะการเข้าเล่น</DialogTitle>
        <DialogContent>
          <DialogContentText>
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
                animateYearScrolling={false}/>
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
            <FormControl component='p' margin="normal" required fullWidth>
              <TextField label="คำแนะนำของเทรนเนอร์" value={diaryRecomend} onChange={onChangeDataForm}
                         name="diaryRecomend"/>
            </FormControl>
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

export default UserTraining;
