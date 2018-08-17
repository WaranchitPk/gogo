import React from 'react';
import {
  Grid,
  Paper,
  Card,
  CardContent
} from '@material-ui/core';
import { Style_Cal_TDEE as styles } from '../../style_js';
import {
  Form,
  ResultBMR,
  ResultTDEE,
  Description
} from './TDEEs';

const Calculator_TDEE = ({ valueGender, handleChange, valueActivity, calculate, result }) => (
  <div>
    {/*Form*/}
    <Grid container alignItems='center' justify='center'>
      <Grid item sm={6} xs={6}>
        <Paper elevation={10} style={styles.Paper}>
          <Form
            valueGender={valueGender}
            handleChange={handleChange}
            valueActivity={valueActivity}
            calculate={calculate}
            styles={styles}/>
        </Paper>
      </Grid>
    </Grid>

    {/*Result*/}
    <Grid container alignItems='center' justify='center' spacing={32} style={styles.Card}>
      <Grid item xs={12} sm={3}>
        <ResultBMR
          result={result}
          styles={styles}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ResultTDEE result={result}
                    styles={styles}/>
      </Grid>
    </Grid>

    {/*Description*/}
    <Grid container alignItems='center' justify='center'>
      <Grid item xs={7} sm={7}>
        <Card style={styles.Table} raised>
          <CardContent>
            <Description/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default Calculator_TDEE;
