import React from 'react';
import {
  Grid,
  AppBar,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  Divider,
  Typography
} from '@material-ui/core';
import TabHome from './Training_Equipment/Home'

const styles = {
  root: {
    marginTop: '2%'
  }
};
const Training_Equipment = ({
  resultDataShowHome,
  tabValue,
  onChangeTab,
  valueTableChangePageHome,
  valueTableChangeRowPerPageHome,
  changeTablePageHome,
  changeTableRowPerPageHome,
  resultDataSumMachineInHome
}) => {
  return (
    <div>
      <Grid container justify="center" style={styles.root}>
        <Grid item xs={10} sm={9}>
          <Paper>
            <AppBar position="static" color="default">
              <Tabs
                value={tabValue}
                onChange={onChangeTab}
                indicatorColor="primary"
                textColor="primary"
                scrollable
                scrollButtons="auto">
                <Tab label="หน้าหลัก"/>
                <Tab label="แขน"/>
                <Tab label="อก"/>
                <Tab label="ไหล่"/>
                <Tab label="หลัง"/>
                <Tab label="ลู่วิ่ง และ จักรยาน"/>
              </Tabs>
            </AppBar>
            {tabValue === 0 && <TabHome
              resultData={resultDataShowHome}
              resultSumMachine={resultDataSumMachineInHome}
              TableChangePageHome={valueTableChangePageHome}
              TableChangeRowPerPageHome={valueTableChangeRowPerPageHome}
              onTableChangePageHome={changeTablePageHome}
              onTableChangeRowPerPageHome={changeTableRowPerPageHome}/>}
            {tabValue === 1 && (<h1>tab2</h1>)}
            {tabValue === 2 && (<h1>tab3</h1>)}
            {tabValue === 3 && (<h1>tab4</h1>)}
            {tabValue === 4 && (<h1>tab5</h1>)}
            {tabValue === 5 && (<h1>tab6</h1>)}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Training_Equipment;
