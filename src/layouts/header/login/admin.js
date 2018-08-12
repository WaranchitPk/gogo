import React from 'react';
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button
} from '@material-ui/core';
import { Exercise_calculate } from '../../';
import LoginDrawer from "../../Drawer/loginAdmin";
import { AdminHeader } from "../../index";

const admin = ({
  styles,
  onLogout,
  isOpen,
  stateOpen,
  isClose,
  openDrawer,
  isOpenDrawer,
  closeDrawer,
  isOpenListNestedIncome,
  onClickOpenNestedIncome
}) => {
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to='/' style={styles.flex}>GO-GYM</Button>
          <Exercise_calculate
            isOpen={isOpen}
            stateOpen={stateOpen}
            isClose={isClose}/>
          <Button color="inherit" component={Link} to='/register'>Register</Button>
          <Button color="inherit" onClick={onLogout}>Logout</Button>
          <Button variant="fab" color="secondary" onClick={openDrawer}>AD</Button>
          <LoginDrawer
            isOpenDrawer={isOpenDrawer}
            openDrawer={openDrawer}
            closeDrawer={closeDrawer}
            logout={onLogout}
            isOpenListNestedIncome={isOpenListNestedIncome}
            onClickOpenNestedIncome={onClickOpenNestedIncome}/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default admin;
