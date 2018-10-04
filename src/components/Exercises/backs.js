import React from 'react';
import {Grid, Card, CardContent} from '@material-ui/core';
import {
    PendlayRow,
    Deadlift,
    TbarRow,
    SeatedDumbbellLowRow,
    InvertedRow,
    KettlebellSwing,
    CableSeatedRow
} from './';

const Backs = () => (
    <div>
        <Grid container alignItems='center' justify='center'>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <PendlayRow/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Deadlift/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <TbarRow/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <br/>
        <hr/>
        <Grid container alignItems='center' justify='center'>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <SeatedDumbbellLowRow/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <InvertedRow/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <KettlebellSwing/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <br/>
        <hr/>
        <Grid container alignItems='center' justify='center'>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <CableSeatedRow/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <br/>
    </div>
);

export default Backs;
