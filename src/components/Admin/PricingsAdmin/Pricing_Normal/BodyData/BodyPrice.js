import React from 'react';
import PricePerDay from './CardShowPriceData/PricePerDay';
import PricePerMonth from './CardShowPriceData/PricePerMonth';
import PricePerYear from './CardShowPriceData/PricePerYear'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const ShowBodyPrice = ({
  classes,
  value
}) => (
  <div>
    <Grid container justify="center" spacing={40}>
      {/* Card Show Data Price Per Day */}
      <Grid item>
        <PricePerDay
          classes={classes}
          value={value}/>
      </Grid>
      {/* Card Show Data Price Per Month */}
      <Grid item>
        <PricePerMonth
          classes={classes}
          value={value}/>
      </Grid>
      {/* Card Show Data Price Per Year */}
      <Grid item>
        <PricePerYear
          classes={classes}
          value={value}/>
      </Grid>
    </Grid>
  </div>
);
export default ShowBodyPrice;
