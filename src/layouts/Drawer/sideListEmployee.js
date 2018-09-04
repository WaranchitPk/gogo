import React from 'react';
import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import HistoryIcon from '@material-ui/icons/History'
import { Link } from 'react-router-dom';

const SideDrawer = ({ logout }) => (
  <div>
    <ListItem button component={Link} to='/register'>
      <ListItemIcon>
        <DraftsIcon/>
      </ListItemIcon>
      <ListItemText primary="สมัครสมาชิกให้กับผู้ใช้"/>
    </ListItem>
    <ListItem button component={Link} to='/employee/showUserTraining'>
      <ListItemIcon>
        <DraftsIcon/>
      </ListItemIcon>
      <ListItemText primary="สมาชิกในสังกัด"/>
    </ListItem>
    <ListItem button component={Link} to='/TrainingEquipment'>
      <ListItemIcon>
        <SendIcon/>
      </ListItemIcon>
      <ListItemText primary="จัดการเครื่องเล่น"/>
    </ListItem>
    <ListItem button onClick={logout}>
      <ListItemIcon>
        <DraftsIcon/>
      </ListItemIcon>
      <ListItemText primary="ออกจากระบบ"/>
    </ListItem>
  </div>
);

export default SideDrawer;
