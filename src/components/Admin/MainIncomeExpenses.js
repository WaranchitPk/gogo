import React from 'react';
import {Tab, Tabs, Paper, Grid, AppBar} from '@material-ui/core';
import {AdminHomeIncomeExpensesContainer, AdminIncomeContainer, AdminExpensesContainer} from '../../containers';
import '../../style/Admin/home.css'
const MainIncomeExpenses = ({
                                valueTabs,
                                onChangeTabs
                            }) => {
    return (
        <div id="rootHomePaperShowChart">
            <Grid container={true} justify={"center"}>
                <Grid item xs={11} sm={10} md={10} lg={11} xl={11}>
                    <Paper elevation={5}>
                        <Tabs
                            value={valueTabs}
                            onChange={onChangeTabs}
                            indicatorColor="primary"
                            textColor="primary"
                            centered>
                            <Tab value={1} label="หน้าหลัก"/>
                            <Tab value={2} label="รายรับ" />
                            <Tab value={3} label="รายจ่าย" />
                        </Tabs>
                        {valueTabs === 1 && <AdminHomeIncomeExpensesContainer/>}
                        {valueTabs === 2 && <AdminIncomeContainer/>}
                        {valueTabs === 3 && <AdminExpensesContainer/>}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default MainIncomeExpenses;
