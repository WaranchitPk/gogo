import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ContactIcon from "@material-ui/icons/Contacts";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import HeaderData from './HeaderData/HeaderPrice';
import BodyData from './BodyData/BodyPrice';
import FooterData from './FooterData/FooterPrice';

const ShowPricingNormal = ({
  classes,
  value,
  onOpenDialogMoreDetail,
  isOpenDialogMoreDetails,
  onCloseDialogMoreDetail,
  TypeAdmin,
  isOpenDialogSolvePricing,
  onOpenDialogSolvePricing,
  onCloseDialogSolvePricing,
  pricing_day,
  pricing_month,
  pricing_year,
  onChangePricing,
  handleSubmitPricing
}) => (
  <div>

    {/* Header Data */}
    <div className={classes.heroContent}>
      <HeaderData/>
    </div>

    {/* Body Data */}
    <BodyData
      classes={classes}
      value={value}/>

    {/* Footer Data */}
    <FooterData
      classes={classes}
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
  </div>
);

export default ShowPricingNormal;
