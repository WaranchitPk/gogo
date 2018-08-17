import React from 'react';
import {
  Grid,
  Input,
  InputLabel,
  FormControl,
  Button,
  Card,
  CardContent,
  Typography,
  FormGroup,
  Select,
  MenuItem,
  Divider,
  Avatar
} from '@material-ui/core';
import '../style/login.css';
import LockIcon from '@material-ui/icons/LockOutline';
import withStyles from '@material-ui/core/styles/withStyles';

import { Link } from 'react-router-dom';

const styles = theme => ({
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    Button: {
      // marginLeft: theme.spacing.unit,
      // marginRight: theme.spacing.unit,
      // marginBottom: theme.spacing.unit,
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: '#E0F7FA',
      // margin: theme.spacing.unit,
      // marginTop: theme.spacing.unit * 3,
    },
    header: {
      // textAlign: 'center'
    },
    cardMoreDetail: {
      marginTop: theme.spacing.unit * 4,
    },
    cardForm: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    }
  })
;
const Login = ({ handleChange, onSubmit, username, password, userType, classes }) => (
  <div className="centered">
    <Grid container justify='center'>
      <Grid item xs={10} sm={5}>
        <Card className={classes.cardForm}>
          <Avatar className={classes.avatar}>
            <LockIcon/>
          </Avatar>
          <Typography className={classes.header} variant="headline">
            เข้าสู่ระบบ
          </Typography>
          <CardContent>
            <FormControl required fullWidth>
              <InputLabel>Username</InputLabel>
              <Input type='text' name='username' value={username} onChange={handleChange} autoFocus/>
            </FormControl>
            <FormControl required fullWidth>
              <InputLabel>Password</InputLabel>
              <Input type='password' name='password' value={password} onChange={handleChange}/>
            </FormControl>
            <FormControl required fullWidth>
              <InputLabel>ประเภทผู้ใช้</InputLabel>
              <Select
                value={userType}
                onChange={handleChange}
                name='userType'>
                <MenuItem value={1}>Admin</MenuItem>
                <MenuItem value={2}>Employee</MenuItem>
                <MenuItem value={3}>Member</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            className={classes.Button}
            onClick={onSubmit}>Login</Button>
        </Card>
      </Grid>
    </Grid>
    <Grid container justify="center" className={classes.cardMoreDetail}>
      <Card>
        <CardContent>
          <Typography>
            หากสนใจสมัครสมาชิก โปรดติดต่อ พนักงาน go gym หรือ โทร 02-2221113
          </Typography>
          <Divider/>
          <Typography>
            ตรวจสอบ ค่าใช้จ่ายในการสมัครสมาชิก สามารถคลิกที่ปุ่มด้านล่าง
          </Typography>
          <Button className={classes.Button} component={Link} to="/pricing">รายละเอียดเพิ่มเติม</Button>
        </CardContent>
      </Card>
    </Grid>
  </div>
);


export default withStyles(styles)(Login);
