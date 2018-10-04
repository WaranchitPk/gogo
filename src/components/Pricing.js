import React from 'react';
import ShowDataDetailPricing from './Pricings/PaperShowDetailPricing';
import { withStyles } from '@material-ui/core/styles';

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

const Pricing = ({
  classes,
  resultDataPrice,
  resultDataPromotionPrice,
  isOpenDialogMoreDetails,
  onOpenDialogMoreDetail,
  onCloseDialogMoreDetail
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
            onCloseDialogMoreDetail={onCloseDialogMoreDetail}/>
        ))
      }
    </div>
  );
};

export default withStyles(style)(Pricing);
