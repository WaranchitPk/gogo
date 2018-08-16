import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ShowPricePerYear = ({
  classes,
  value
}) => (
  <Card raised>
    <CardHeader
      title="ต่อปี"
      titleTypographyProps={{ align: "center" }}
      className={classes.cardHeader}/>
    <CardContent className={classes.cardPricing}>
      <Typography variant="display2" color="textPrimary">
        {value.pricing_PerYear}
      </Typography>
      <Typography variant="title" color="textSecondary">
        บาท/ ปี
      </Typography>
    </CardContent>
  </Card>
);

export default ShowPricePerYear;
