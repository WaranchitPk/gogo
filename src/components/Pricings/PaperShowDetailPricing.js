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
  resultDataPromotionPrice,
  TypeAdmin,
  isOpenDialogSolvePricing,
  onOpenDialogSolvePricing,
  onCloseDialogSolvePricing,
  pricing_day,
  pricing_month,
  pricing_year,
  onChangePricing,
  handleSubmitPricing,
  isOpenDialogPromotion,
  promotion_Date,
  promotion_Desc,
  handleOpenDialogPromotion,
  handleCloseDialogPromotion,
  handleChangePromotion,
  handleSubmitPromotion,
}) => (
  <Paper key={value.pricing_id} className={classes.Paper}>

    {/*Show Data  Normal*/}
    <ShowPricingNormal
      classes={classes}
      value={value}
      onOpenDialogMoreDetail={onOpenDialogMoreDetail}
      isOpenDialogMoreDetails={isOpenDialogMoreDetails}
      onCloseDialogMoreDetail={onCloseDialogMoreDetail}
      TypeAdmin={TypeAdmin}
      isOpenDialogSolvePricing={isOpenDialogSolvePricing}
      onOpenDialogSolvePricing={onOpenDialogSolvePricing}
      onCloseDialogSolvePricing={onCloseDialogSolvePricing}
      pricing_day={pricing_day}
      pricing_month={pricing_month}
      pricing_year={pricing_year}
      onChangePricing={onChangePricing}
      handleSubmitPricing={handleSubmitPricing}/>

    {/*Dividing line Between Normal data  and Promotion data*/}
    <Divider className={classes.Divider}/>

    {/*Show Data Promotion*/}
    <ShowPricingPromotion
      classes={classes}
      resultDataPromotionPrice={resultDataPromotionPrice}
      TypeAdmin={TypeAdmin}
      isOpenDialogPromotion={isOpenDialogPromotion}
      promotion_Date={promotion_Date}
      promotion_Desc={promotion_Desc}
      handleOpenDialogPromotion={handleOpenDialogPromotion}
      handleCloseDialogPromotion={handleCloseDialogPromotion}
      handleChangePromotion={handleChangePromotion}
      handleSubmitPromotion={handleSubmitPromotion}/>
  </Paper>
);

export default ShowDetailPricing;
