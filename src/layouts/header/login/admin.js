import React from 'react';
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography
} from '@material-ui/core';
import { Exercise_calculate } from '../../';
import LoginDrawer from "../../Drawer/loginAdmin";
import {HeaderStyleJs} from '../../../style_js';

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
      <AppBar position="static" style={HeaderStyleJs.AppBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" style={styles.flex} component={Link} to='/'>
            GO-GYM
          </Typography>
          {/*<Exercise_calculate*/}
            {/*isOpen={isOpen}*/}
            {/*stateOpen={stateOpen}*/}
            {/*isClose={isClose}/>*/}
          <Button color="inherit" component={Link} to='/register'>Register</Button>
          {/*<Button color="inherit" onClick={onLogout}>Logout</Button>*/}
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
