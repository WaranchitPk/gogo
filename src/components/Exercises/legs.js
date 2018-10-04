import React from 'react';
import {Grid, Card, CardContent} from '@material-ui/core';
import {
    BabellSquat,
    SquatJump,
    BabellDeadlift,
    MachineLegPress,
    PistolSquat,
    DumbbellLunge,
    LyingLeg,
    LegExtension,
    StandingBarbell
} from './';

const Legs = () => (
    <div>
        <Grid container alignItems='center' justify='center'>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <BabellSquat/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <SquatJump/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <BabellDeadlift/>
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
                        <MachineLegPress/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <PistolSquat/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <DumbbellLunge/>
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
                        <LyingLeg />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <LegExtension />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <StandingBarbell />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default Legs;
