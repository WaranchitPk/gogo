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
    MenuItem
} from '@material-ui/core';

const styles = {
    Button: {
        marginLeft: '3%',
        marginBottom: '3%'
    },
    container: {
        marginTop: '45%',
    },
    header: {
        textAlign: 'center'
    }
};

const Register = ({valueGender, valueMonth,handleChange,handleSubmit}) => {
    return (
        <div>
            <Grid container direction='column' alignItems='center' justify='center' style={styles.container}>
                <Grid item xs={10} sm={10}>
                    <Card>
                        <Typography style={styles.header}>
                            Register
                        </Typography>
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
                                    <FormLabel component="legend">Gender</FormLabel>
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
                                    <InputLabel>Month</InputLabel>
                                    <Select
                                        value={valueMonth}
                                        onChange={handleChange}
                                        inputProps={{name: "month"}}>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                        <MenuItem value={9}>9</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={11}>11</MenuItem>
                                        <MenuItem value={12}>12</MenuItem>
                                    </Select>
                                </FormControl>
                            </FormGroup>
                        </CardContent>
                        <Button
                            variant='contained'
                            color='primary'
                            style={styles.Button}
                            onClick={handleSubmit}>OK</Button>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};


export default Register;
