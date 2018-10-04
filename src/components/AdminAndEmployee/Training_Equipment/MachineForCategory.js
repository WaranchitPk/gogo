import React from 'react';
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Button,
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CircularProgress,
  TextField,
  DialogActions,
  FormControl,
  FormGroup,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Icon
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Config from '@material-ui/icons/ChangeHistory'
import moment from "moment";
import { showImgTraining_equip } from '../../../config';
import DialogShowFullData from './MachineForCate/DialogShowFullData'
import { DatePicker } from "material-ui-pickers";
import Dropzone from 'react-dropzone';
import purple from "@material-ui/core/colors/purple";
import RightKeyboard from '@material-ui/icons/KeyboardArrowRight';
import LeftKeyboard from '@material-ui/icons/KeyboardArrowLeft';
const Transition = (props) => (
  <Slide direction="up" {...props}/>
);
const LoadingPictureMachine = () => (
  <CircularProgress/>
);
const styles = {
  root: {
    marginTop: '2%'
  },
  TableHead: {
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  ListTypography: {
    opacity: '0.8'
  },
  TypographyDataFullMachine: {
    fontWeight: '500',
    opacity: '0.85'
  },
  BtAdd: {
    marginBottom: '2%'
  },
  formAddMachine: {
    marginBottom: '8%'
  },
  Btconfig: {
    backgroundColor: '#CFD229'
  },
  BtShow: {
    backgroundColor: 'green'
  }
};
const MachineForCategory = ({
  name,
  dataMachine,
  dataFullMachine,
  TableChangePageHome,
  TableChangeRowPerPageHome,
  onTableChangePageHome,
  onTableChangeRowPerPageHome,
  onClickShowFullDataMachine,
  isOpenDialogShowFullDataMachine,
  onCloseDialogShowFullDataMachine,
  isOpenDialogAddMachine,
  onOpenDialogAddMachine,
  onCloseDialogAddMachine,
  changeInput,
  onChangeDateMachine,
  machine_name,
  machine_BuyDate,
  machine_Price,
  onImageDrop,
  imgPreviewAddMachine,
  loadingUpload,
  onSubmitAddMachine,
  cateMachine,
  userType,
  isOpenDialogChange,
  onOpenDialogInformMachine,
  onCloseDialogInformMachine,
  valueMachineStatus,
  onSubmitStatusMachine
}) => {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="subheading" style={styles.ListTypography}>
              ตารางแสดงรายเอียดเครื่องเล่นประเภท {name}
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider/>

      <Grid container justify="center" style={styles.root}>
        <Grid item xs={10} sm={9}>
          <Button variant="contained" mini color="secondary" style={styles.BtAdd} onClick={onOpenDialogAddMachine}>
            เพิ่มเครื่องเล่น
          </Button>
          <Table>
            <TableHead component="tr">
              <TableCell component="th" style={styles.TableHead}>ชื่อเครื่องเล่น</TableCell>
              <TableCell component="th" style={styles.TableHead}>สถานะเครื่องเล่น</TableCell>
              <TableCell component="th" style={styles.TableHead}>วันที่ซื้อ</TableCell>
              <TableCell component="th" style={styles.TableHead}>ผู้เพิ่มข้อมูล</TableCell>
              <TableCell component="th" style={styles.TableHead}>เรียกดูข้อมูล</TableCell>
              {
                userType === 1 ? (
                  <TableCell component="th" style={styles.TableHead}>แก้ไขข้อมูล</TableCell>
                ) : ''
              }
            </TableHead>
            <TableBody>
              {
                dataMachine.slice(TableChangePageHome * TableChangeRowPerPageHome, TableChangePageHome * TableChangeRowPerPageHome + TableChangeRowPerPageHome)
                  .map(value => (
                    <TableRow key={value.trainingEquipment_id} component="tr">
                      <TableCell component="td">{value.trainingEquipment_name}</TableCell>
                      <TableCell component="td">{value.trainingEquipment_status}</TableCell>
                      <TableCell component="td">{moment(value.trainingEquipment_dateForBuy)
                        .format('DD-MM-YYYY')}</TableCell>
                      <TableCell component="td">{value.created_by_name}</TableCell>
                      <TableCell component="td">
                        <Button variant="contained" color="secondary"
                                onClick={() => onClickShowFullDataMachine(value.trainingEquipment_id)}
                                style={styles.BtShow}>
                          ค้นหา
                        </Button>
                      </TableCell>
                      {
                        userType === 1 ? (
                          <TableCell component="td">
                            <Button variant="contained" color="secondary"
                                    onClick={() => onOpenDialogInformMachine(value.trainingEquipment_id)}
                                    style={styles.Btconfig}>
                              แก้ไข
                            </Button>
                          </TableCell>
                        ) : ""
                      }
                    </TableRow>
                  ))
              }
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={dataMachine.length}
            rowsPerPage={TableChangeRowPerPageHome}
            page={TableChangePageHome}
            onChangePage={onTableChangePageHome}
            onChangeRowsPerPage={onTableChangeRowPerPageHome}
          />
        </Grid>
      </Grid>
      {/*Show Full Data Machine*/}
      <DialogShowFullData
        isOpenDialogShowFullDataMachine={isOpenDialogShowFullDataMachine}
        Transition={Transition}
        onCloseDialogShowFullDataMachine={onCloseDialogShowFullDataMachine}
        dataFullMachine={dataFullMachine}
        showImgTraining_equip={showImgTraining_equip}
        LoadingPictureMachine={LoadingPictureMachine}
        styles={styles}/>
      {/*Show Dialog Add Machine*/}
      <Dialog
        open={isOpenDialogAddMachine}
        TransitionComponent={Transition}
        keepMounted
        onClose={onCloseDialogAddMachine}>
        <DialogTitle>
          เพิ่มเครื่องเล่น
        </DialogTitle>
        <Divider/>
        <Grid container justify="center">
          <Dropzone
            onDrop={onImageDrop}
            multiple={false}
            accept="image/*">
            <img src={imgPreviewAddMachine} width={200} height={200}/>
          </Dropzone>
        </Grid>
        <Divider/>
        <DialogContent>
          <DialogContentText>
            <FormGroup style={styles.formAddMachine}>
              <FormControl>
                <Typography component="p">
                  <TextField
                    name="machine_name"
                    value={machine_name}
                    onChange={changeInput}
                    label="ชื่อเครื่องเล่น"
                    helperText="เช่น abc"
                  />
                </Typography>
              </FormControl>
            </FormGroup>
            <FormGroup style={styles.formAddMachine}>
              <FormControl>
                <DatePicker
                  label="วัน/เดือน/ปี"
                  format="DD/MM/YYYY"
                  value={machine_BuyDate}
                  placeholder="10/10/2018"
                  // handle clearing outside => pass plain array if you are not controlling value outside
                  mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                  disableOpenOnEnter
                  onChange={onChangeDateMachine}
                  animateYearScrolling={false}
                  leftArrowIcon={<Icon><LeftKeyboard/> </Icon>}
                  rightArrowIcon={<Icon> <RightKeyboard/> </Icon>}/>
              </FormControl>
            </FormGroup>
            <FormGroup style={styles.formAddMachine}>
              <FormControl>
                <Typography component="p">
                  <TextField
                    name="machine_Price"
                    value={machine_Price}
                    onChange={changeInput}
                    label="ราคาเครื่องเล่น"
                    helperText="เช่น 100 บาท"
                    type="number"/>
                </Typography>
              </FormControl>
            </FormGroup>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialogAddMachine} color="primary">
            ยกเลิก
          </Button>
          <Button onClick={() => onSubmitAddMachine(cateMachine)} color="primary">
            ตกลง
          </Button>
          {
            loadingUpload === false && (
              <CircularProgress style={{ color: purple[500] }} thickness={7}/>
            )
          }
        </DialogActions>
      </Dialog>
      {/*Change Inform Status Machine*/}
      <Dialog
        open={isOpenDialogChange}
        onClose={onCloseDialogInformMachine}
        TransitionComponent={Transition}>
        <DialogTitle>
          แก้ไขสถานะเครื่องเล่น
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText>
            <FormGroup row>
              <RadioGroup
                name="machine_status"
                value={valueMachineStatus}
                onChange={changeInput}>
                <FormControlLabel value="พร้อมใช้งาน" control={<Radio/>} label="พร้อมใช้งาน"/>
                <FormControlLabel value="ไม่พร้อมใช้งาน" control={<Radio/>} label="ไม่พร้อมใช้"/>
              </RadioGroup>
            </FormGroup>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialogInformMachine} color="primary">
            ยกเลิก
          </Button>
          <Button onClick={() => onSubmitStatusMachine(cateMachine)} color="primary">
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MachineForCategory;
