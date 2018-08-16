import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ContactIcon from "@material-ui/icons/Contacts";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";

const ShowFooterPrice = ({
  classes,
  onOpenDialogMoreDetail,
  isOpenDialogMoreDetails,
  onCloseDialogMoreDetail
}) => (
  <div>
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
  </div>
);

export default ShowFooterPrice;
