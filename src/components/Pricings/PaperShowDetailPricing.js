import React from 'react';
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ShowPricingNormal from './Pricing_Normal/ShowPricingNormal'
import ShowPricingPromotion from './Pricing_Promotion/ShowPricingPromotion';

const ShowDetailPricing = ({
  classes,
  value,
  onOpenDialogMoreDetail,
  isOpenDialogMoreDetails,
  onCloseDialogMoreDetail,
  resultDataPromotionPrice
}) => (
  <Paper key={value.pricing_id} className={classes.Paper}>

    {/*Show Data  Normal*/}
    <ShowPricingNormal
      classes={classes}
      value={value}
      onOpenDialogMoreDetail={onOpenDialogMoreDetail}
      isOpenDialogMoreDetails={isOpenDialogMoreDetails}
      onCloseDialogMoreDetail={onCloseDialogMoreDetail}/>

    {/*Dividing line Between Normal data  and Promotion data*/}
    <Divider className={classes.Divider}/>

    {/*Show Data Promotion*/}
    <ShowPricingPromotion
      classes={classes}
      resultDataPromotionPrice={resultDataPromotionPrice}/>
  </Paper>
);

export default ShowDetailPricing;
