import React from 'react';
import {Typography, FormGroup, TextField, Button} from '@material-ui/core';

const FormCalculator = ({handleChange, onSubmit, styles}) => (
    <div>
        <Typography style={styles.textHeader} variant="subheading">การคำนวนค่าดัชนีมวลกาย (BMI)</Typography>
        <form style={styles.form}>
            <FormGroup row>
                <TextField
                    id="height"
                    name="height"
                    label="Height (Cm.)"
                    onChange={handleChange}/>
            </FormGroup>
            <FormGroup row>
                <TextField
                    id="weight"
                    name="weight"
                    label="Weight (Kg.)"
                    onChange={handleChange}/>
            </FormGroup>
            <Button style={styles.Button} onClick={onSubmit}>
                Calculate
            </Button>
        </form>
    </div>
);

export default FormCalculator;
