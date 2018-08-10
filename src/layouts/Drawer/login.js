import React from "react";
import {
  SwipeableDrawer,
  List,
  Divider,
  Typography
} from "@material-ui/core";
import SideDrawer from './sideList';

const SideList = ({ logout, fullName }) => (
  <div>
    {
      fullName !== null && fullName !== undefined ? (
        <Typography variant="display1" align="center" noWrap>{fullName.data.fullName}</Typography>
      ) : (
        <Typography variant="display1" align="center" noWrap>Hello</Typography>
      )
    }
    <Divider/>
    <List>
      <SideDrawer logout={logout}/>
    </List>
  </div>
);
const bodyDrawer = ({ isOpenDrawer, openDrawer, closeDrawer, logout, fullName }) => (
  <SwipeableDrawer
    open={isOpenDrawer}
    onOpen={openDrawer}
    onClose={closeDrawer}>
    <div
      tabIndex={0}
      role="button"
      onClick={openDrawer}
      onKeyDown={closeDrawer}>
      <SideList
        logout={logout}
        fullName={fullName}/>
    </div>
  </SwipeableDrawer>
);
export default bodyDrawer;