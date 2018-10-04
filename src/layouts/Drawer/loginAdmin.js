import React from 'react';
import {
  Divider,
  List,
  SwipeableDrawer,
  Typography
} from "@material-ui/core";
import SideDrawer from "./sideListAdmin";

const SideList = ({
  logout,
  isOpenListNestedIncome,
  onClickOpenNestedIncome
}) => (
  <div>
    <Typography variant="display1" align="center" noWrap>ผู้ดูแลระบบ</Typography>
    <Divider/>
    <List>
      <SideDrawer
        logout={logout}
        isOpenListNestedIncome={isOpenListNestedIncome}
        onClickOpenNestedIncome={onClickOpenNestedIncome}/>
    </List>
  </div>
);
const bodyDrawer = ({
  isOpenDrawer,
  openDrawer,
  closeDrawer,
  logout,
  isOpenListNestedIncome,
  onClickOpenNestedIncome
}) => {
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
          logout={logout}
          isOpenListNestedIncome={isOpenListNestedIncome}
          onClickOpenNestedIncome={onClickOpenNestedIncome}/>
      </div>
    </SwipeableDrawer>
  );
};

export default bodyDrawer;
