import React from 'react';
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  SwipeableDrawer,
  Typography
} from '@material-ui/core';
import { Exercise_calculate } from '../../';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoginDrawer from '../../Drawer/login';
import { HeaderStyleJs } from "../../../style_js";

const member = ({ styles, onLogout, isOpen, stateOpen, isClose, name, openDrawer, closeDrawer, isOpenDrawer }) => {
  return (
    <div style={styles.root}>
      <AppBar position="static" style={HeaderStyleJs.AppBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" style={styles.flex} component={Link} to='/'>
            GO-GYM
          </Typography>
          {/*<Button color="inherit" component={Link} to='/' style={styles.flex}>GO-GYM</Button>*/}
          {/*<Button color="inherit" component={Link} to='/neutrian'>Neutrian</Button>*/}

          <Button color="inherit" component={Link} to='/calculator'>คำนวนค่าต่างๆ</Button>
          {/*<Exercise_calculate isOpen={isOpen} stateOpen={stateOpen} isClose={isClose}/>*/}
          {/*<Button color="inherit" onClick={onLogout}>Logout</Button>*/}
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default member;