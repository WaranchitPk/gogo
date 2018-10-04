import React from 'react';
import {Card,Typography,CardContent} from '@material-ui/core';
const ResultCalculator = ({styles,result}) => (
    <div>
        {
            result ? <Card style={styles.StyleCard}>
                <Typography>ค่า BMR ของคุณคือ :</Typography>
                <CardContent>
                    {result.resultBmr}
                </CardContent>
            </Card> : <Card style={styles.StyleCard}>
                <Typography>ค่า BMR ของคุณคือ :</Typography>
                <CardContent>
                    0
                </CardContent>
            </Card>
        }
    </div>
);

export default ResultCalculator;
