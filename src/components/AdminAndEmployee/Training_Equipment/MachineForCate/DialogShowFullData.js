import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import moment from "moment";

const FullDataMachine = ({
  dataFullMachine,
  isOpenDialogShowFullDataMachine,
  Transition,
  onCloseDialogShowFullDataMachine,
  LoadingPictureMachine,
  showImgTraining_equip,
  styles
}) => (
  <div>
    <Dialog
      open={isOpenDialogShowFullDataMachine}
      TransitionComponent={Transition}
      keepMounted
      onClose={onCloseDialogShowFullDataMachine}>
      <DialogTitle>
        ข้อมูลเครื่องเล่น
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <List>
            <ListItem>
              <ListItemText>
                {
                  dataFullMachine.map(value => (
                    <div key={value.trainingEquipment_id}>
                      <img src={showImgTraining_equip(value.trainingEquipment_pic)} width={200} height={200}
                           onWaiting={LoadingPictureMachine}/>
                      <h3
                        style={styles.TypographyDataFullMachine}>ชื่อเครื่องเล่น: {value.trainingEquipment_name}</h3>
                      <h3
                        style={styles.TypographyDataFullMachine}>วันที่ซื้อ: {moment(value.trainingEquipment_dateForBuy)
                        .format('DD-MM-YYYY')}</h3>
                      <h3
                        style={styles.TypographyDataFullMachine}>ราคาเครื่องเล่น: {value.trainingEquipment_price}</h3>
                      <h3
                        style={styles.TypographyDataFullMachine}>สถานะเครื่องเล่น: {value.trainingEquipment_status}</h3>
                    </div>
                  ))
                }
              </ListItemText>
            </ListItem>
          </List>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  </div>
);

export default FullDataMachine;
