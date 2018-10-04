import React from 'react';
import {Card,Typography} from '@material-ui/core';
const ResultCalculator = ({styles,result}) => (
    <div>
        {
            result ? <Card style={styles.result}>
                <Typography>
                    ค่า ดัชนีมวลกาย(BODY MASS INDEX(BMI)) ของคุณคือ <h3>{result.data}</h3>
                </Typography></Card> : <Card style={styles.result}>
                <Typography>
                    ค่า ดัชนีมวลกาย(BODY MASS INDEX(BMI)) ของคุณคือ 0
                </Typography></Card>
        }
    </div>
);

export default ResultCalculator;
