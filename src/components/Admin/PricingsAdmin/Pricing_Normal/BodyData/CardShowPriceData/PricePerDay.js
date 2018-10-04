import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ShowPricePerDay = ({
  classes,
  value
}) => (
  <Card raised>
    <CardHeader
      title="ต่อวัน"
      titleTypographyProps={{ align: "center" }}
      className={classes.cardHeader}/>
    <CardContent className={classes.cardPricing}>
      <Typography variant="display2" color="textPrimary">
        {value.pricing_PerDay}
      </Typography>
      <Typography variant="title" color="textSecondary">
        บาท/ วัน
      </Typography>
    </CardContent>
  </Card>
);

export default ShowPricePerDay;
