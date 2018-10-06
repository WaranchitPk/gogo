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
    Divider,
    TextField,
    InputAdornment
} from '@material-ui/core';
import '../style/register.css'
import {RegisterComponent} from "./index";

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

const Register = ({
                      userId,
                      valueGender,
                      valueMonth,
                      handleChange,
                      handleSubmit,
                      valueFname,
                      valueLname,
                      valueTel,
                      userIdCard
                  }) => (
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
                                <InputLabel>รหัสผู้ใช้</InputLabel>
                                <Input type='text' name='userId' disabled={true} value={userId}/>
                            </FormControl>
                        </FormGroup>
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
                                <TextField
                                    label="ชื่อ"
                                    onChange={handleChange}
                                    name="fName"/>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <TextField
                                    label="นามสกุล"
                                    onChange={handleChange}

                                    name="lName"/>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <TextField
                                    label="อายุ"
                                    onChange={handleChange}
                                    name="age"
                                    type="number"
                                    onInput={(e) =>{
                                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)
                                    }}/>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <TextField
                                    label="เบอร์โทรศัพท์"
                                    onChange={handleChange}
                                    name="tel"
                                    type="number"
                                    onInput={(e) =>{
                                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                                    }}/>
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
                                    onChange={handleChange}>
                                    <FormControlLabel value="male" control={<Radio/>} label="ชาย"/>
                                    <FormControlLabel value="female" control={<Radio/>} label="หญิง"/>
                                </RadioGroup>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <TextField
                                    label="รหัสบัตรประชาชน"
                                    onChange={handleChange}
                                    name="userIdCard"
                                    type="number"
                                    onInput={(e) =>{
                                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,13)
                                    }}/>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <InputLabel>จำนวนเดือนที่สมัคร</InputLabel>
                                <Select
                                    value={valueMonth}
                                    onChange={handleChange}
                                    inputProps={{name: "month"}}>
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
