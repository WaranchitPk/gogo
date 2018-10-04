import React from 'react';
import {Card,Typography} from '@material-ui/core';
const ResultCalculator = ({result,styles}) => (
    <div>
        {
            result ? <Card style={styles.result}>
                <Typography>
                    ค่า Maximum Heart Rate (MHR) ของคุณคือ {result}
                </Typography></Card> : <Card style={styles.result}>
                <Typography>
                    ค่า Maximum Heart Rate (MHR) ของคุณคือ 0
                </Typography></Card>
        }
    </div>
);

export default ResultCalculator;
