import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ContactIcon from "@material-ui/icons/Contacts";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import DialogActions from '@material-ui/core/DialogActions';
import {
  InputAdornment,
  TextField
} from "@material-ui/core";

const ShowFooterPrice = ({
  classes,
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
    {
      TypeAdmin !== "" ? (
        <Grid container justify="center" className={classes.rootButtonMoreDetail}>
          <Grid item>
            <Button variant="raised" onClick={onOpenDialogSolvePricing} className={classes.button}>
              <ContactIcon className={classes.contactIcon}/>แก้ไขราคาค่าใช้บริการ
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container justify="center" className={classes.rootButtonMoreDetail}>
          <Grid item>
            <Button variant="raised" onClick={onOpenDialogMoreDetail} className={classes.button}>
              <ContactIcon className={classes.contactIcon}/>สนใจสมัครเป็นสมาชิก คลิก.
            </Button>
          </Grid>
        </Grid>
      )
    }
    <Dialog
      open={isOpenDialogSolvePricing}
      onClose={onCloseDialogSolvePricing}>
      <DialogContent>
        <DialogTitle>แก้ไขราคาค่าบริการ</DialogTitle>
        <DialogContentText>
          <div>
            <FormGroup>
              <FormControl>
                <TextField
                  label="ราคารายวัน"
                  value={pricing_day}
                  onChange={onChangePricing}
                  name="pricing_day"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                  }}
                  type="number"/>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl>
                <TextField
                  label="ราคารายเดือน"
                  value={pricing_month}
                  onChange={onChangePricing}
                  name="pricing_month"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                  }}
                  type="number"/>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl>
                <TextField
                  label="ราคารายปี"
                  value={pricing_year}
                  onChange={onChangePricing}
                  name="pricing_year"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                  }}
                  type="number"/>
              </FormControl>
            </FormGroup>
            <DialogActions>
              <Button onClick={onCloseDialogSolvePricing} color="primary">
                ยกเลิก
              </Button>
              <Button onClick={handleSubmitPricing} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
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
  </div>
);

export default ShowFooterPrice;
