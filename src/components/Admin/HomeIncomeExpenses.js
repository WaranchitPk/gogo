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
import {Grid, Divider, Typography, InputLabel, Select, MenuItem, Button} from '@material-ui/core';
import '../../style/Admin/home.css'
import {AdminIncomeExpensesComponent} from "../index";

const styles = {
    Button: {
        marginBottom: '2%',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: '#E0F7FA',
        marginLeft: '2%'
    },
};

const HomeIncomeExpenses = ({
                                dataIncomeTrends,
                                valueYearTrends,
                                dataExpensesTrends,
                                valueYearTrendsExpenses,
                                yearSelectIncome,
                                yearSelectExpenses,
                                onSelectYearIncome,
                                onSelectYearExpenses,
                                onSubmitSelectIncome,
                                onSubmitSelectExpenses,
                                yearShowTrendIncome,
                                yearShowTrendExpenses
                            }) => {
    var onSubmitSelectExzpenses;
    return (
        <div>
            <Typography
                align={"center"}
                variant={"display1"}
                color="textSecondary"
                id="marginTitle">รายรับประจำปี {yearShowTrendIncome}</Typography>
            <Divider/>
            <Grid container={true} justify={"center"} id="rootIncomes">
                <Grid item xs={10} sm={8} md={8} lg={8} xl={9}>
                    <InputLabel htmlFor="age-simple">เลือกปี</InputLabel>
                    <Select
                        value={yearSelectIncome}
                        onChange={onSelectYearIncome}>
                        <MenuItem value={2018}>2018</MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                    </Select>
                    <Button
                        style={styles.Button}
                        onClick={onSubmitSelectIncome}>ค้นหา</Button>
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
                                name="จำนวนรายรับ(บาท)"/>
                            <Line type='monotone' dataKey='sumMoney' stroke='#F39C12' name="จำนวนเงิน(บาท)"/>
                        </ComposedChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
            <Divider/>
            <Typography
                align={"center"}
                variant={"display1"}
                color="textSecondary"
                id="marginTitle">รายจ่ายประจำปี {yearShowTrendExpenses}</Typography>
            <Divider/>
            <Grid container={true} justify={"center"} id="rootExpenses">
                <Grid item xs={10} sm={8} md={8} lg={8} xl={9}>
                    <InputLabel htmlFor="age-simple">เลือกปี</InputLabel>
                    <Select
                        value={yearSelectExpenses}
                        onChange={onSelectYearExpenses}>
                        <MenuItem value={2018}>2018</MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                    </Select>
                    <Button
                        style={styles.Button}
                        onClick={onSubmitSelectExpenses}>ค้นหา</Button>
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
                                name="จำนวนรายจ่าย(บาท)"/>
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
