import React from 'react';
import {Card,Typography,CardContent} from '@material-ui/core';
import {Style_Cal_TDEE as styles} from "../../../style_js";
const ResultCalculator = ({styles,result}) => (
    <div>
        {
            result ? <Card style={styles.StyleCard}>
                <Typography>ค่า TDEE ของคุณคือ :</Typography>
                <CardContent>
                    {result.resultTdee}
                </CardContent>
            </Card> : <Card style={styles.StyleCard}>
                <Typography>ค่า TDEE ของคุณคือ :</Typography>
                <CardContent>
                    0
                </CardContent>
            </Card>
        }
    </div>
);

export default ResultCalculator;
