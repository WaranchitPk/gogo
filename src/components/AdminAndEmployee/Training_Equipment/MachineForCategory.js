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
  Paper
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import moment from "moment";
import { showImgTraining_equip } from '../../../config';
import DialogShowFullData from './MachineForCate/DialogShowFullData'
import { DatePicker } from "material-ui-pickers";
import Dropzone from 'react-dropzone';
import picDummy from '../../../asset/dummy.jpg'
import purple from "@material-ui/core/colors/purple";

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
  cateMachine
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
          <Button variant="fab" mini color="secondary" style={styles.BtAdd} onClick={onOpenDialogAddMachine}>
            <AddIcon/>
          </Button>
          <Table>
            <TableHead component="tr">
              <TableCell component="th" style={styles.TableHead}>ชื่อเครื่องเล่น</TableCell>
              <TableCell component="th" style={styles.TableHead}>สถานะเครื่องเล่น</TableCell>
              <TableCell component="th" style={styles.TableHead}>วันที่ซื้อ</TableCell>
              <TableCell component="th" style={styles.TableHead}>เรียกดู/แก้ไข</TableCell>
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
                      <TableCell component="td">
                        <Button variant="fab" mini color="secondary"
                                onClick={() => onClickShowFullDataMachine(value.trainingEquipment_id)}>
                          <SearchIcon/>
                        </Button>
                      </TableCell>
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
          เพิ่มเครื่องเล่นเครื่องเล่น
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
                  animateYearScrolling={false}/>
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
                  />
                </Typography>
              </FormControl>
            </FormGroup>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialogAddMachine} color="primary">
            Disagree
          </Button>
          <Button onClick={() => onSubmitAddMachine(cateMachine)} color="primary">
            Agree
          </Button>
          {
            loadingUpload === false && (
              <CircularProgress style={{ color: purple[500] }} thickness={7}/>
            )
          }
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MachineForCategory;
