import React from 'react';
import {Grid, Card, CardContent} from '@material-ui/core';
import {
    CRUNCH,
    SpiderCrawl,
    SidePlank,
    KneePull,
    StomachVacuum
} from './';

const Bellys = () => (
    <div>
        <Grid container alignItems='center' justify='center'>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <CRUNCH/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <SpiderCrawl/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <SidePlank/>
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
                        <KneePull/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <StomachVacuum/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <br/>
    </div>
);

export default Bellys;
