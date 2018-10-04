import React from 'react';
import {
  Typography,
  Divider,
  TextField,
  Paper,
  FormGroup,
  FormControl,
  Input,
  InputAdornment,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  Avatar,
  Dialog,
  DialogContent,
  Button,
  CircularProgress
} from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';

import '../style/profile.css';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save'
import Dropzone from 'react-dropzone';
import PeopleIcon from '@material-ui/icons/People';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  Gender: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    marginTop: '3%'
  },
  bigAvatar: {
    width: 85,
    height: 85,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2%'
  },
  SaveIcon: {
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});
const ShowPic = (imgPreview, valuePic, openDialogDropImg, displayNameInAvatar, classes) => {
  if (imgPreview !== '') {
    return (
      <Avatar
        className={classes.bigAvatar}
        onClick={openDialogDropImg} src={imgPreview}/>
    )
  } else {
    if (valuePic === '') {
      return (
        <Avatar
          className={classes.bigAvatar}
          onClick={openDialogDropImg}><PeopleIcon/></Avatar>
      )
    } else {
      return (
        <Avatar
          className={classes.bigAvatar}
          onClick={openDialogDropImg} src={valuePic}/>
      )
    }
  }
};
const Profile = ({
  classes,
  changeInput,
  valueFname,
  valueLname,
  valueAge,
  valueGender,
  valueEmail,
  dropImage,
  isOpenDialogDropImg,
  openDialogDropImg,
  closeDialogDropImg,
  imgPreview,
  displayNameInAvatar,
  submitValue,
  loadingUpload,
  valuePic
}) => {
  return (
    <Paper elevation={5} className='centered'>
      {
        ShowPic(imgPreview, valuePic, openDialogDropImg, displayNameInAvatar, classes)
      }
      <Typography variant="headline" component="h3" align='center'>
        ข้อมูลส่วนตัว
      </Typography>
      <Divider/>
      <Typography component="p">
        <TextField
          name="fName"
          value={valueFname}
          onChange={changeInput}
          label="ชื่อ"
          helperText="เช่น สวัสดี"
          className={classes.textField}
        />
      </Typography>
      <Typography component="p">
        <TextField
          name="lName"
          value={valueLname}
          onChange={changeInput}
          label="นามสกุล"
          helperText="เช่น ทวิศุก"
          className={classes.textField}
        />
      </Typography>
      <FormControl
        className={classes.textField}>
        <Input
          name="age"
          value={valueAge}
          onChange={changeInput}
          endAdornment={<InputAdornment position="end">ปี</InputAdornment>}
          type="number"/>
        <FormHelperText>อายุ</FormHelperText>
      </FormControl>
      <FormGroup className={classes.Gender} row>
        <RadioGroup
          name="gender"
          value={valueGender}
          onChange={changeInput}>
          <FormControlLabel value="male" control={<Radio/>} label="ชาย"/>
          <FormControlLabel value="female" control={<Radio/>} label="หญิง"/>
        </RadioGroup>
      </FormGroup>
      <Typography component="p">
        <TextField
          name="email"
          value={valueEmail}
          onChange={changeInput}
          label="อีเมลล์"
          helperText="เช่น example@ggg.com"
          className={classes.textField}
          type="email"/>
      </Typography>
      <Button variant="contained" color="primary" className={classes.button} onClick={submitValue}>
        <SaveIcon className={classes.SaveIcon}/>
        บันทึก
      </Button>
      {
        loadingUpload === false && (
          <CircularProgress style={{ color: purple[500] }} thickness={7}/>
        )
      }
      <Dialog
        open={isOpenDialogDropImg}
        onClose={closeDialogDropImg}>
        <DialogContent>
          <Dropzone
            onDrop={dropImage}
            multiple={false}
            accept="image/*">
            <div>Drop an image or click to select a file to upload.</div>
          </Dropzone>
        </DialogContent>
      </Dialog>
    </Paper>

  );
};

export default withStyles(styles)(Profile);
