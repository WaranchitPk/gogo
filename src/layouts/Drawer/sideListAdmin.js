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

const SideDrawerLogin = ({ logout }) => (
  <div>
    <ListItem button component={Link} to='/admin/employee'>
      <ListItemIcon>
        <AccountCircleIcon/>
      </ListItemIcon>
      <ListItemText primary="ข้อมูลพนักงาน"/>
    </ListItem>
    <ListItem button component={Link} to='/history'>
      <ListItemIcon>
        <HistoryIcon/>
      </ListItemIcon>
      <ListItemText primary="ข้อมูลข่าวสารภายในยิม"/>
    </ListItem>
    <ListItem button component={Link} to='/admin/neutrian'>
      <ListItemIcon>
        <SendIcon/>
      </ListItemIcon>
      <ListItemText primary="โภชนาการอาหาร"/>
    </ListItem>
    <ListItem button onClick={logout}>
      <ListItemIcon>
        <DraftsIcon/>
      </ListItemIcon>
      <ListItemText primary="ออกจากระบบ"/>
    </ListItem>
  </div>
);

export default SideDrawerLogin;
