import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    AreaChart,
    ReferenceLine
} from 'recharts';
import {Grid, Divider, Typography} from '@material-ui/core';
import '../../style/Admin/home.css'

const HomeIncomeExpenses = ({
                                dataIncomeTrends,
                                valueYearTrends,
                                dataExpensesTrends,
                                valueYearTrendsExpenses,
                            }) => {
    return (
        <div>
            <Typography
                align={"center"}
                variant={"display1"}
                color="textSecondary"
                id="marginTitle">รายรับประจำปี {valueYearTrends}</Typography>
            <Divider/>
            <Grid container={true} justify={"center"} id="rootIncomes">
                <Grid item xs={10} sm={8} md={8} lg={8} xl={9}>
                    <ResponsiveContainer
                        width='100%'
                        aspect={2}>
                        <ComposedChart data={dataIncomeTrends}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="incomeMonth"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar
                                dataKey="sumMoney"
                                fill="#85C1E9"
                                name="จำนวนรายรับ(บาท)" />
                            <Line type='monotone' dataKey='sumMoney' stroke='#F39C12' name="จำนวนเงิน(บาท)"/>
                        </ComposedChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
            {/*<Grid container={true} id="rootIncomes">*/}
                {/*<Grid item xs={10} sm={6} md={7} lg={8} xl={9}>*/}
                    {/*<ComposedChart width={800} height={600} data={dataIncomeTrends}*/}
                                   {/*margin={{top: 20, right: 20, bottom: 20, left: 20}}>*/}
                        {/*<CartesianGrid stroke='#f5f5f5'/>*/}
                        {/*<XAxis dataKey="incomeMonth"/>*/}
                        {/*<YAxis/>*/}
                        {/*<Tooltip/>*/}
                        {/*<Legend/>*/}
                        {/*<Bar dataKey='sumMoney' barSize={20} fill='#413ea0' name="จำนวนเงิน(บาท)"/>*/}
                        {/*<Line type='monotone' dataKey='sumMoney' stroke='#ff7300' name="จำนวนเงิน(บาท)"/>*/}
                    {/*</ComposedChart>*/}
                    {/*<ResponsiveContainer*/}
                        {/*width='100%'*/}
                        {/*aspect={2}>*/}
                        {/*<BarChart data={dataIncomeTrends}>*/}
                            {/*<CartesianGrid strokeDasharray="3 3"/>*/}
                            {/*<XAxis dataKey="incomeMonth"/>*/}
                            {/*<YAxis/>*/}
                            {/*<Tooltip/>*/}
                            {/*<Legend/>*/}
                            {/*<Bar*/}
                                {/*dataKey="sumMoney"*/}
                                {/*fill="#F08080"*/}
                                {/*name="จำนวนรายวิชา" />*/}
                        {/*</BarChart>*/}
                    {/*</ResponsiveContainer>*/}
                {/*</Grid>*/}
            {/*</Grid>*/}
            <Divider/>
            <Typography
                align={"center"}
                variant={"display1"}
                color="textSecondary"
                id="marginTitle">รายจ่ายประจำปี {valueYearTrendsExpenses}</Typography>
            <Divider/>

            <Grid container={true} justify={"center"} id="rootExpenses">
                <Grid item xs={10} sm={8} md={8} lg={8} xl={9}>
                    <ResponsiveContainer
                        width='100%'
                        aspect={2}>
                        <ComposedChart data={dataExpensesTrends}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="expensesMonth"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar
                                dataKey="sumMoney"
                                fill="#85C1E9"
                                name="จำนวนรายจ่าย(บาท)" />
                            <Line type='monotone' dataKey='sumMoney' stroke='#ff7300' name="จำนวนเงิน(บาท)"/>
                        </ComposedChart>
                    </ResponsiveContainer>
                    {/*<ComposedChart width={800} height={600} data={dataExpensesTrends}*/}
                                   {/*margin={{top: 20, right: 20, bottom: 20, left: 20}}>*/}
                        {/*<CartesianGrid stroke='#f5f5f5'/>*/}
                        {/*<XAxis dataKey="expensesMonth"/>*/}
                        {/*<YAxis/>*/}
                        {/*<Tooltip/>*/}
                        {/*<Legend/>*/}
                        {/*<Bar dataKey='sumMoney' barSize={20} fill='#413ea0' name="จำนวนเงิน(บาท)"/>*/}
                        {/*<Line type='monotone' dataKey='sumMoney' stroke='#ff7300' name="จำนวนเงิน(บาท)"/>*/}
                    {/*</ComposedChart>*/}
                </Grid>
            </Grid>
            <Divider/>
        </div>
    );
};

export default HomeIncomeExpenses;
