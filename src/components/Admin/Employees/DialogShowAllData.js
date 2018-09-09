import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import DateIcon from "@material-ui/icons/DateRange";
import moment from "moment";
import PhoneIcon from "@material-ui/icons/Phone";
import MoneyIcon from "@material-ui/icons/MoneyOff";
import InboxIcon from "@material-ui/icons/Inbox";

const ShowAllData = ({
  isOpenDialogShowAllData,
  onCloseDialogShowData,
  Traisition,
  showAllDataEmp,
}) => (
  <Dialog
    open={isOpenDialogShowAllData}
    onClose={onCloseDialogShowData}
    TransitionComponent={Traisition}
    transitionDuration={500}>
    <DialogTitle>
      ข้อมูลพนักงาน
    </DialogTitle>
    <Divider/>
    <DialogContent>
      <DialogContentText>
        <List component="nav">
          {
            showAllDataEmp.map(result => (
              <div key={result.employee_id}>
                <ListItem>
                  <ListItemIcon><PeopleIcon/></ListItemIcon>
                  <ListItemText primary={'รหัสพนักงาน'} secondary={result.employee_id}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><PeopleIcon/></ListItemIcon>
                  <ListItemText primary={'ชื่อ'} secondary={result.employee_Fname}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><PeopleIcon/></ListItemIcon>
                  <ListItemText primary={'นามสกุล'} secondary={result.employee_Lname}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><DateIcon/></ListItemIcon>
                  <ListItemText primary={'วัน/เดือน/ปี เกิด'}
                                secondary={moment(result.employee_Birthdate).format("DD-MM-YYYY")}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><PeopleIcon/></ListItemIcon>
                  <ListItemText primary={'อายุ'} secondary={result.employee_Age}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><PeopleIcon/></ListItemIcon>
                  <ListItemText primary={'รหัสบัตรประชาชน'} secondary={result.employee_idCard}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><PeopleIcon/></ListItemIcon>
                  <ListItemText primary={'ที่อยู่'} secondary={result.employee_Address}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><PhoneIcon/></ListItemIcon>
                  <ListItemText primary={'เบอร์โทรศัพท์'} secondary={result.employee_Tel}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><MoneyIcon/></ListItemIcon>
                  <ListItemText primary={'เงินเดือน'} secondary={result.employee_Salary.toLocaleString()}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><DateIcon/></ListItemIcon>
                  <ListItemText primary={'วันที่เริ่มทำงาน'}
                                secondary={moment(result.employee_Start).format("DD-MM-YYYY")}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><InboxIcon/></ListItemIcon>
                  <ListItemText primary={'เพศ'} secondary={result.employee_gender}/>
                </ListItem>
              </div>
            ))
          }
        </List>
      </DialogContentText>
    </DialogContent>
  </Dialog>
);

export default ShowAllData;
