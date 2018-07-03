import React from 'react';
import {Grid, Card, CardContent} from '@material-ui/core';
import {
DumbbellSholdersPress,
    BabellUprightRow,
    DumbbellRearDeltFly,
    FrontPlateRaises
} from './';

const Sholders = () => (
    <div>
        <Grid container alignItems='center' justify='center'>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <DumbbellSholdersPress />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <BabellUprightRow />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <DumbbellRearDeltFly />
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
                        <FrontPlateRaises />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default Sholders;
