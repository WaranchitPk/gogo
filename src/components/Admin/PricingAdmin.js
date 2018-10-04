import React from 'react';
import ShowDataDetailPricing from '../Pricings/PaperShowDetailPricing';
import { withStyles } from '@material-ui/core/styles';
import { PricingAdminComponent } from "../index";

const style = theme => ({
  root: {
    marginTop: '5%'
  },
  Paper: {
    // height: '-webkit-fill-available'
  },
  Divider: {
    marginTop: '3%',
    marginBottom: '1%'
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  DescriptionPromotionprice: {
    marginTop: '5%',
    fontFamily: 'cursive'
  },
  rootButtonMoreDetail: {
    marginTop: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit,
  },
  contactIcon: {
    marginRight: theme.spacing.unit,
  },
});

const PricingAdmin = ({
  classes,
  resultDataPrice,
  resultDataPromotionPrice,
  isOpenDialogMoreDetails,
  onOpenDialogMoreDetail,
  onCloseDialogMoreDetail,
  TypeAdmin,
  onOpenDialogSolvePricing,
  onCloseDialogSolvePricing,
  isOpenDialogSolvePricing,
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
}) => {
  return (
    <div>
      {
        resultDataPrice.map(value => (
          <ShowDataDetailPricing
            classes={classes}
            value={value}
            resultDataPromotionPrice={resultDataPromotionPrice}
            isOpenDialogMoreDetails={isOpenDialogMoreDetails}
            onOpenDialogMoreDetail={onOpenDialogMoreDetail}
            onCloseDialogMoreDetail={onCloseDialogMoreDetail}
            TypeAdmin={TypeAdmin}
            isOpenDialogSolvePricing={isOpenDialogSolvePricing}
            onOpenDialogSolvePricing={onOpenDialogSolvePricing}
            onCloseDialogSolvePricing={onCloseDialogSolvePricing}
            pricing_day={pricing_day}
            pricing_month={pricing_month}
            pricing_year={pricing_year}
            onChangePricing={onChangePricing}
            handleSubmitPricing={handleSubmitPricing}
            isOpenDialogPromotion={isOpenDialogPromotion}
            promotion_Date={promotion_Date}
            promotion_Desc={promotion_Desc}
            handleOpenDialogPromotion={handleOpenDialogPromotion}
            handleCloseDialogPromotion={handleCloseDialogPromotion}
            handleChangePromotion={handleChangePromotion}
            handleSubmitPromotion={handleSubmitPromotion}/>
        ))
      }
    </div>
  );
};

export default withStyles(style)(PricingAdmin);
