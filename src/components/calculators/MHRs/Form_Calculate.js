import React from 'react';
import {Typography,FormGroup,TextField,Button} from '@material-ui/core';
const FormCalculator = ({styles,handleChange,onSubmit}) => (
    <div>
        <Typography variant="subheading" align='center'>การคำนวน (MHR)</Typography>
        <form style={styles.form}>
            <FormGroup row>
                <TextField
                    id="age"
                    name="age"
                    label="Age"
                    onChange={handleChange}/>
            </FormGroup>
            <Button onClick={onSubmit} style={styles.Button}>คำนวณ</Button>
        </form>
    </div>
);

export default FormCalculator;
