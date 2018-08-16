import React from 'react';
import Typography from "@material-ui/core/Typography";

const ShowPricingPromotion = ({
  classes,
  resultDataPromotionPrice
}) => (
  <div className={classes.heroContent}>
    <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
      โปรโมชั่น
    </Typography>
    {
      resultDataPromotionPrice.map(value => (
        <div>
          <Typography variant="title" align="center" color="textSecondary" component="p"
                      key={value.promotion_id}>
            {value.promotion_Date}
          </Typography>
          <Typography variant="display1" align="center" color="textSecondary" component="p"
                      key={value.promotion_id} className={classes.DescriptionPromotionprice}>
            "{value.promotion_Desc}"
          </Typography>
        </div>
      ))
    }
  </div>
);

export default ShowPricingPromotion;
