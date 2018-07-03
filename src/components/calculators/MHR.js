import React from 'react';
import {Grid, Paper, CardContent, Card} from '@material-ui/core';
import {Style_Cal_MHR as styles} from '../../style_js';
import {Data_MHR} from '../../MockData';
import {Form, Result, Description} from './MHRs';

const Calculator_MHR = ({handleChange, onSubmit, result}) => (
    <div>
        {/*Form*/}
        <Grid container alignItems='center' justify='center'>
            <Grid item xs={4} sm={4}>
                <Paper elevation={10} style={styles.Paper}>
                    <Form
                        styles={styles}
                        handleChange={handleChange}
                        onSubmit={onSubmit}/>
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
            <Grid item sm={10} xs={10}>
                <Card style={styles.Table} raised>
                    <CardContent>
                        <Description
                            Data_MHR={Data_MHR}
                            styles={styles}/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default Calculator_MHR;
