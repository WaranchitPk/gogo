import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ContactIcon from '@material-ui/icons/Contacts'
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
})
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
          <Paper key={value.pricing_id} className={classes.Paper}>
            <div className={classes.heroContent}>
              <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                ค่าบริการ
              </Typography>
              <Typography variant="title" align="center" color="textSecondary" component="p">
                ค่าใช้บริการของ Go Gym โดย แบ่งเป็น รายวัน, รายเดือน, รายปี
              </Typography>
            </div>
            <Grid container justify="center" spacing={40}>
              <Grid item>
                <Card raised>
                  <CardHeader
                    title="ต่อวัน"
                    titleTypographyProps={{ align: "center" }}
                    className={classes.cardHeader}
                  />
                  <CardContent className={classes.cardPricing}>
                    <Typography variant="display2" color="textPrimary">
                      {value.pricing_PerDay}
                    </Typography>
                    <Typography variant="title" color="textSecondary">
                      บาท/ วัน
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card raised>
                  <CardHeader
                    title="ต่อเดือน"
                    titleTypographyProps={{ align: "center" }}
                    className={classes.cardHeader}
                  />
                  <CardContent className={classes.cardPricing}>
                    <Typography variant="display2" color="textPrimary">
                      {value.pricing_PerMonth.toLocaleString()}
                    </Typography>
                    <Typography variant="title" color="textSecondary">
                      บาท/ เดือน
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card raised>
                  <CardHeader
                    title="ต่อปี"
                    titleTypographyProps={{ align: "center" }}
                    className={classes.cardHeader}
                  />
                  <CardContent className={classes.cardPricing}>
                    <Typography variant="display2" color="textPrimary">
                      {value.pricing_PerYear}
                    </Typography>
                    <Typography variant="title" color="textSecondary">
                      บาท/ ปี
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <br/>
            <Grid container justify="center" className={classes.rootButtonMoreDetail}>
              <Grid item>
                <Button variant="raised" onClick={onOpenDialogMoreDetail} className={classes.button}>
                  <ContactIcon className={classes.contactIcon}/>รายละเอียดเพิ่มเติม
                </Button>
              </Grid>
            </Grid>
            <Dialog
              open={isOpenDialogMoreDetails}
              onClose={onCloseDialogMoreDetail}>
              <DialogContent>
                <DialogTitle>สนใจสมัครเป็นสมาชิก หรือ ผู้ใช้ทั่วไป</DialogTitle>
                <DialogContentText>
                  ติดต่อพนักงาน gogym หรือโทร 02-1234567
                </DialogContentText>
              </DialogContent>
            </Dialog>

            <Divider className={classes.Divider}/>
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
          </Paper>
        ))
      }
    </div>
  );
};

export default withStyles(style)(Pricing);
