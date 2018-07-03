import React from 'react';
import {Grid, Card, CardContent} from '@material-ui/core';
import {
    FeetElevatedBenchDip,
    NarrowGripPush,
    DumbbellSkull,
    StandingDubbellTriceps,
    CablePushDown,
    TricepDumbbell,
    CloseGripBabellBenchPress
} from './';
const Arms = () => (
    <div>
        <Grid container alignItems='center' justify='center'>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <FeetElevatedBenchDip/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <NarrowGripPush/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <DumbbellSkull/>
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
                        <StandingDubbellTriceps/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <CablePushDown/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <TricepDumbbell/>
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
                        <CloseGripBabellBenchPress/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <br/>
    </div>
);

export default Arms;
