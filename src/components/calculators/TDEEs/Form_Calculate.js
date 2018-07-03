import React from 'react';
import {
    Typography,
    FormGroup,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Button
} from '@material-ui/core';

const FormCalculator = ({valueGender, handleChange, valueActivity, calculate, styles}) => (
    <div>
        <Typography variant='subheading' style={styles.titleFormInput}>BMR&&TDEE Calculator</Typography>
        <form style={styles.form}>
            <FormGroup row>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={valueGender}
                    onChange={handleChange}
                >
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                </RadioGroup>
                <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={valueGender}
                    onChange={handleChange}
                >
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <TextField
                    id="age"
                    name="age"
                    style={styles.textField}
                    label="Age"
                    onChange={handleChange}
                    margin="normal"
                    inputProps={{pattern: "[0-9]*"}}/>
            </FormGroup>
            <FormGroup>
                <TextField
                    id="height"
                    name="height"
                    style={styles.textField}
                    label="Height (Cm.)"
                    onChange={handleChange}
                    margin="normal"
                    inputProps={{pattern: "[0-9]*"}}/>
            </FormGroup>
            <FormGroup>
                <TextField
                    id="weight"
                    name="weight"
                    style={styles.textField}
                    label="Weight (Kg.)"
                    onChange={handleChange}
                    margin="normal"
                    inputProps={{pattern: "[0-9]*"}}/>
            </FormGroup>
            <FormGroup>
                <InputLabel htmlFor="age-simple">Activity</InputLabel>
                <Select
                    value={valueActivity}
                    onChange={handleChange}
                    style={styles.activity}
                    inputProps={{
                        name: 'activity',
                        id: 'activity',
                    }}>
                    <MenuItem value={1.2}>น้อยมากหรือไม่ออกเลย</MenuItem>
                    <MenuItem value={1.375}>ออกกำลังกาย 1-3 ครั้งต่อสัปดาห์</MenuItem>
                    <MenuItem value={1.55}>ออกกำลังกาย 4-5 ครั้งต่อสัปดาห์</MenuItem>
                    <MenuItem value={1.7}>ออกกำลังกาย 6-7 ครั้งต่อสัปดาห์</MenuItem>
                    <MenuItem value={1.9}>ออกกำลังกายวันละ 2 ครั้งขึ้นไป</MenuItem>
                </Select>
            </FormGroup>
            <Button style={styles.Button} onClick={calculate}>
                Calculate
            </Button>
        </form>
    </div>
);

export default FormCalculator;
