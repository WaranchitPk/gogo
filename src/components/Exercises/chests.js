import React from 'react';
import {Grid, Card, CardContent} from '@material-ui/core';
import {
    BarbellBenchPress,
    PushUp,
    DeclineDumbbellFly,
    DipsForChest,
    DumbbellPullover,
    CableFly,
    InclineDumbbellPress
} from './';

const Chests = () => (
    <div>
        <Grid container alignItems='center' justify='center'>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <BarbellBenchPress/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <PushUp/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <DeclineDumbbellFly/>
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
                        <DipsForChest/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <DumbbellPullover/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <CableFly/>
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
                        <InclineDumbbellPress/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <br/>
    </div>
);

export default Chests;
