import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ContactIcon from "@material-ui/icons/Contacts";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import {
  InputAdornment,
  TextField
} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";

const ShowPricingPromotion = ({
  classes,
  resultDataPromotionPrice,
  TypeAdmin,
  isOpenDialogPromotion,
  promotion_Date,
  promotion_Desc,
  handleOpenDialogPromotion,
  handleCloseDialogPromotion,
  handleChangePromotion,
  handleSubmitPromotion
}) => {
  return (
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
            {
              TypeAdmin === "" ? "" : (
                <div>
                  <Grid container justify="center" className={classes.rootButtonMoreDetail}>
                    <Grid item>
                      <Button variant="raised" onClick={handleOpenDialogPromotion} className={classes.button}>
                        <ContactIcon className={classes.contactIcon}/>สนใจสมัครเป็นสมาชิก คลิก.
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              )
            }
          </div>
        ))
      }
      <Dialog
        open={isOpenDialogPromotion}
        onClose={handleCloseDialogPromotion}>
        <DialogContent>
          <DialogTitle>แก้ไขราคาค่าบริการ</DialogTitle>
          <DialogContentText>
            <div>
              <FormGroup>
                <FormControl>
                  <TextField
                    label="รายละเอียดวันที่โปรโมชัน"
                    value={promotion_Date}
                    onChange={handleChangePromotion}
                    name="promotion_Date"
                    type="number"/>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl>
                  <TextField
                    label="รายละเอียดโปรโมชัน"
                    value={promotion_Desc}
                    onChange={handleChangePromotion}
                    name="promotion_Desc"
                    type="number"/>
                </FormControl>
              </FormGroup>
              <DialogActions>
                <Button onClick={handleCloseDialogPromotion} color="primary">
                  ยกเลิก
                </Button>
                <Button onClick={handleSubmitPromotion} color="primary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
};

export default ShowPricingPromotion;
