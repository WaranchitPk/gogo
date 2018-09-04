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
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Divider
} from '@material-ui/core';
import '../style/register.css'

const styles = {
  Button: {
    marginLeft: '3%',
    marginBottom: '3%',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: '#E0F7FA',
  },
  // container: {
  //     marginTop: '45%',
  // },
  header: {
    textAlign: 'center',
    paddingTop: '2%',
    paddingBottom: '2%'
  }
};

const Register = ({ valueGender, valueMonth, handleChange, handleSubmit }) => (
  <div>
    <Grid container justify='center' className="layout">
      <Grid item xs={10} sm={4}>
        <Card>
          <Typography style={styles.header} variant="display1">
            ลงทะเบียนผู้ใช้
          </Typography>
          <Divider/>
          <CardContent>
            <FormGroup>
              <FormControl>
                <InputLabel>username</InputLabel>
                <Input type='text' name='username' onChange={handleChange}/>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl>
                <InputLabel>Password</InputLabel>
                <Input type='password' name='password' onChange={handleChange}/>
              </FormControl>
            </FormGroup>
            <br/>
            <FormGroup>
              <FormControl>
                <FormLabel component="legend">เพศ</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={valueGender}
                  onChange={handleChange}
                >
                  <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                  <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                </RadioGroup>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl>
                <InputLabel>จำนวนเดือนที่สมัคร</InputLabel>
                <Select
                  value={valueMonth}
                  onChange={handleChange}
                  inputProps={{ name: "month" }}>
                  <MenuItem value={1}>1 เดือน</MenuItem>
                  <MenuItem value={2}>2 เดือน</MenuItem>
                  <MenuItem value={3}>3 เดือน</MenuItem>
                  <MenuItem value={4}>4 เดือน</MenuItem>
                  <MenuItem value={5}>5 เดือน</MenuItem>
                  <MenuItem value={6}>6 เดือน</MenuItem>
                  <MenuItem value={7}>7 เดือน</MenuItem>
                  <MenuItem value={8}>8 เดือน</MenuItem>
                  <MenuItem value={9}>9 เดือน</MenuItem>
                  <MenuItem value={10}>10 เดือน</MenuItem>
                  <MenuItem value={11}>11 เดือน</MenuItem>
                  <MenuItem value={12}>12 เดือน</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
          </CardContent>
          <Button
            variant='contained'
            color='primary'
            style={styles.Button}
            onClick={handleSubmit}>ตกลง</Button>
        </Card>
      </Grid>
    </Grid>
  </div>
);


export default Register;
