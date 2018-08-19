import React from 'react';
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography
} from '@material-ui/core';
import {
  EmployeeHeader,
  Exercise_calculate
} from "../../index";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LoginDrawer from "../../Drawer/loginEmployee";

const employee = ({
  styles,
  onLogout,
  isOpen,
  stateOpen,
  isClose,
  name,
  openDrawer,
  closeDrawer,
  isOpenDrawer
}) => {
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={styles.flex}>
            GO-GYM
          </Typography>
          <Toolbar>
            <Typography variant="title" color="inherit" style={styles.flex}>
              GO-GYM
            </Typography>


          </Toolbar>
          <Button color="inherit" component={Link} to='/register'>Register</Button>
          <Button variant="fab" color="secondary" onClick={openDrawer}>
            {
              name !== null && name !== undefined ? name.data.name : (<AccountCircleIcon/>)
            }
          </Button>
          <LoginDrawer
            isOpenDrawer={isOpenDrawer}
            openDrawer={openDrawer}
            closeDrawer={closeDrawer}
            logout={onLogout}
            fullName={name}/>
          {/*<Button color="inherit" onClick={onLogout}>Logout</Button>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default employee;