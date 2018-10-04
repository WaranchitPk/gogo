import React from 'react';
import {Grid, Paper, Card, CardContent} from '@material-ui/core';
import {Form, Result, Description} from './BMIs';
import {Data_BMI} from '../../MockData'
import {Style_Cal_BMI as styles} from '../../style_js';

const Calculator_BMI = ({handleChange, onSubmit, result}) => (
    <div>
        {/*Form*/}
        <Grid container alignItems='center' justify='center'>
            <Grid item xs={4} sm={4}>
                <Paper elevation={10} style={styles.Paper}>
                    <Form
                        handleChange={handleChange}
                        onSubmit={onSubmit}
                        styles={styles}/>
                </Paper>
            </Grid>
        </Grid>

        {/*Result*/}
        <Grid container alignItems='center' justify='center'>
            <Grid item xs={5} sm={5}>
                <Result
                    result={result}
                    styles={styles}/>
            </Grid>
        </Grid>

        {/*Description*/}
        <Grid container alignItems='center' justify='center'>
            <Grid item sm={6} xs={6}>
                <Card style={styles.Table} raised>
                    <CardContent>
                        <Description
                            Data_BMI={Data_BMI}
                            styles={styles}/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default Calculator_BMI;
