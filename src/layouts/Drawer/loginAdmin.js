import React from 'react';
import {
  Divider,
  List,
  SwipeableDrawer,
  Typography
} from "@material-ui/core";
import SideDrawer from "./sideListAdmin";

const SideList = ({ logout }) => (
  <div>
    <Typography variant="display1" align="center" noWrap>Admin</Typography>
    <Divider/>
    <List>
      <SideDrawer logout={logout}/>
    </List>
  </div>
);
const bodyDrawer = ({ isOpenDrawer, openDrawer, closeDrawer, logout }) => {
  return (
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
          logout={logout}/>
      </div>
    </SwipeableDrawer>
  );
};

export default bodyDrawer;
