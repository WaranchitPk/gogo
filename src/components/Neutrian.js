import React from "react";
import {
    AppBar,
    Tab,
    Tabs,
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Slide,
    Step,
    Stepper,
    StepLabel,
    StepContent,
    Paper,
    Select,
    MenuItem,
    FormControl,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Divider,
    Checkbox,
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Drink from "@material-ui/icons/LocalDrink";
import {
    ShowAllFoodsContainer,
    ShowAllDrinksContainer,
    ShowAllDessertContainer
} from "../containers";
import {Link} from "react-router-dom";
import "../style/neutrian.css";
import {NeutrianComponent} from "./index";

const Transition = (props) => {
    return <Slide direction="up" {...props}/>
};
const getSteps = () => {
    return ['เลือกรายการอาหาร,เครื่องดื่ม หรือ ขนม', 'เลือกประเภทอาหาร,เครื่องดื่ม หรือ ขนม'];
};
const stepContent1 = (valueCate, getValueCate) => (
    <form>
        <FormControl>
            <Select
                value={valueCate}
                onChange={getValueCate}>
                <MenuItem value={1}>อาหาร</MenuItem>
                <MenuItem value={2}>เครื่องดื่ม</MenuItem>
                <MenuItem value={3}>ขนม & ของหวาน</MenuItem>
            </Select>
        </FormControl>
    </form>
);
const stepContent2 = (cate, valueMenu, getValueMenu) => (
    cate && (
        <form>
            <FormControl>
                <Select
                    value={valueMenu}
                    onChange={getValueMenu}
                    name="cate">
                    {
                        cate.data.result.map((cate) => (
                            <MenuItem key={cate.menu_id}
                                      value={cate.menu_id}>{cate.menu_name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </form>
    )
);

const getStepContent = (step, valueCate, getValueCate, cate, valueMenu, getValueMenu) => {
    switch (step) {
        case 0:
            return (
                stepContent1(valueCate, getValueCate)
            );
        case 1:
            return (
                stepContent2(cate, valueMenu, getValueMenu)
            );
        default:
            return 'Unknown step';
    }
};

const Neutrian = ({
                      value,
                      changeTab,
                      openDialog,
                      changeOpenDialog,
                      changeCloseDialog,
                      step,
                      changeNextStep,
                      selectCateNeutrian,
                      getvalueCateNeutrian,
                      valueCate,
                      valueMenu,
                      getValueMenu,
                      valueFood,
                      page,
                      rowPerPage,
                      onChangePage,
                      onChangeRow,
                      openFullDialog,
                      onCloseFullDialog,
                      selectFood,
                      submitSelectFood,
                      amount,
                      selectAmount,
                      resultSelect,
                      openDialogResultSelectFood,
                      changeIsCloseDialogResultSelectFood,
                      afterSelect,
                      statusSelected
                  }) => {
    const steps = getSteps();
    const indexSelect = [];


    return (
        <div>
            <Grid container spacing={16}>
                <Grid item xs={12} sm={4}>
                    <Card className="cardCalNeutrian">
                        <CardContent>
                            <Typography>คำนวนโภชนาการอาหารที่ต้องการ</Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={changeOpenDialog}>
                                OK
                            </Button>
                            <Dialog open={openDialog}
                                    onClose={changeCloseDialog}
                                    TransitionComponent={Transition}>
                                <DialogTitle>
                                    {"คำนวนโภชนาการ"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        <Stepper activeStep={step} orientation="vertical">
                                            {
                                                steps.map((label, index) => {
                                                    return (
                                                        <Step key={label}>
                                                            <StepLabel>{label}</StepLabel>
                                                            <StepContent>
                                                                <Typography>{getStepContent(index, selectCateNeutrian, getvalueCateNeutrian, valueCate, valueMenu, getValueMenu)}</Typography>
                                                                <Button
                                                                    variant="contained"
                                                                    color="primary"
                                                                    onClick={changeNextStep}>
                                                                    {step === steps.length - 1 ? 'Finish' : 'Next'}
                                                                </Button>
                                                            </StepContent>
                                                        </Step>
                                                    )
                                                })
                                            }
                                        </Stepper>
                                        {
                                            step === steps.length && (
                                                <Paper square elevation={0}>
                                                    <Typography>All steps completed - you&quot;re finished</Typography>
                                                </Paper>
                                            )
                                        }
                                    </DialogContentText>
                                </DialogContent>
                            </Dialog>
                        </CardActions>
                    </Card>
                    <Dialog
                        fullScreen
                        open={openFullDialog}
                        onClose={onCloseFullDialog}
                        TransitionComponent={Transition}
                    >
                        <AppBar>
                            <Toolbar>
                                <IconButton color="inherit" onClick={onCloseFullDialog}>
                                    <CloseIcon/>
                                </IconButton>
                                <Typography variant="title" color="inherit">
                                    Sound
                                </Typography>
                                <Button color="inherit">
                                    save
                                </Button>
                            </Toolbar>
                        </AppBar>
                        <List>
                            <ListItem button>
                                <ListItemText primary="Phone ringtone" secondary="Titania"/>
                            </ListItem>
                            <Divider/>
                            <ListItem>


                                <Table>
                                    <TableHead>
                                        <TableCell>รายการอาหารที่ต้องการ</TableCell>
                                        <TableCell>ชื่ออาหาร</TableCell>
                                        <TableCell>แคลลอรี่ (กรัม)</TableCell>
                                        <TableCell>โปรตีน (กรัม)</TableCell>
                                        <TableCell>ไขมัน (กรัม)</TableCell>
                                        <TableCell>คาร์โบไฮเดรต (กรัม)</TableCell>
                                        <TableCell>ปริมาณ/หน่วยบริโภค</TableCell>
                                        <TableCell>ปริมาณที่ต้องการ</TableCell>
                                    </TableHead>
                                    <TableBody>
                                        {

                                            valueFood && valueFood.data.result.slice(page * rowPerPage, page * rowPerPage + rowPerPage).map((value, index) => {
                                                const isSelected = statusSelected(value.food_id);
                                                let result = '';
                                                if (afterSelect.length !== 0 && afterSelect !== undefined) {
                                                    console.log(value.food_id)
                                                    // afterSelect.map((data,selectIndex)=>{
                                                    //     if (amount.length !== 0 && amount[selectIndex] !== undefined){
                                                    //         if (afterSelect[selectIndex] === amount[selectIndex].food_id){
                                                    //             // console.log(`data ${data} index ${selectIndex} amount ${amount[selectIndex].food_amount}`)
                                                    //             result = amount[selectIndex].food_amount;
                                                    //         }else{
                                                    //             result = '';
                                                    //         }
                                                    //     }
                                                    //
                                                    // })
                                                }
                                                // if (amount.length !== 0 && amount[index] !== undefined) {
                                                //     console.log(index * 2)
                                                // }

                                                let amountId = '';
                                                let amountNum = '';
                                                let amountResult
                                                if (amount.length !== 0) {
                                                    if (amount[index] !== undefined) {
                                                        amountId = amount[index].food_id;
                                                        amountNum = amount[index].food_amount;
                                                    }
                                                }
                                                // if (afterSelect.length !== 0) {
                                                //     if (afterSelect[index] === afterSelect[index]) {
                                                //         if (amount.length !== 0) {
                                                //             if (amount[index] !== undefined) {
                                                //                 if (afterSelect[index] === amount[index].food_id) {
                                                //                     resultAmount = amount[index].food_amount;
                                                //                 }
                                                //             }
                                                //         }
                                                //     }
                                                // }
                                                // if (amount.length !== 0) {
                                                //     if (amount[index] !== undefined) {
                                                //         if (afterSelect[index] === amount[index].food_id){
                                                //             console.log(`food_id: ${amount[index].food_id} === selectId: ${afterSelect[index]}`);
                                                //             resultAmount = amount[index].food_amount;
                                                //         }
                                                //     }
                                                // }
                                                // console.log(afterSelect[index]);

                                                let a = '';
                                                if (afterSelect.length !== 0) {
                                                    afterSelect.map((data, index) => {
                                                        if (amount.length !== 0) {
                                                            if (amount[index] !== undefined) {
                                                                a = amount[index].food_amount
                                                            }
                                                        }
                                                    })
                                                }
                                                return (
                                                    <TableRow key={value.food_id} component="th" scope="row"
                                                              tabIndex={-1}
                                                              selected={isSelected}
                                                              onClick={(event) => selectFood(event, value.food_id)}>
                                                        <TableCell>
                                                            <Checkbox checked={isSelected}/>
                                                        </TableCell>
                                                        <TableCell>{value.foods_name}</TableCell>
                                                        <TableCell>{value.food_cal}</TableCell>
                                                        <TableCell>{value.food_protien}</TableCell>
                                                        <TableCell>{value.food_fat}</TableCell>
                                                        <TableCell>{value.food_carb}</TableCell>
                                                        <TableCell>{value.food_perUnit}</TableCell>
                                                        <TableCell>
                                                            {
                                                                afterSelect.length !== amount.length !== 0 ? console.log('result',compare(afterSelect,amount)) : ''
                                                            }
                                                            {
                                                                // result !== "" ? (
                                                                //     <Select
                                                                //         value={result}
                                                                //         onChange={event => selectAmount(event, value.food_id)}>
                                                                //         <MenuItem value={1}>1</MenuItem>
                                                                //         <MenuItem value={2}>2</MenuItem>
                                                                //         <MenuItem value={3}>3</MenuItem>
                                                                //     </Select>
                                                                // ) : (
                                                                //     <Select
                                                                //         value={0}
                                                                //         onChange={event => selectAmount(event, value.food_id)}>
                                                                //         <MenuItem value={1}>1</MenuItem>
                                                                //         <MenuItem value={2}>2</MenuItem>
                                                                //         <MenuItem value={3}>3</MenuItem>
                                                                //     </Select>
                                                                // )

                                                                value.food_id === amountId ? (
                                                                    <Select
                                                                        value={amountNum}
                                                                        onChange={event => selectAmount(event, value.food_id)}>
                                                                        <MenuItem value={1}>1</MenuItem>
                                                                        <MenuItem value={2}>2</MenuItem>
                                                                        <MenuItem value={3}>3</MenuItem>
                                                                    </Select>
                                                                ) : (
                                                                    <Select
                                                                        value={0}
                                                                        onChange={event => selectAmount(event, value.food_id)}>
                                                                        <MenuItem value={1}>1</MenuItem>
                                                                        <MenuItem value={2}>2</MenuItem>
                                                                        <MenuItem value={3}>3</MenuItem>
                                                                    </Select>
                                                                )
                                                                // resultAmount !== "" ? (
                                                                //     <Select
                                                                //         value={resultAmount}
                                                                //         onChange={event => selectAmount(event, value.food_id)}>
                                                                //         <MenuItem value={1}>1</MenuItem>
                                                                //         <MenuItem value={2}>2</MenuItem>
                                                                //         <MenuItem value={3}>3</MenuItem>
                                                                //     </Select>
                                                                // ) : (
                                                                //     <Select
                                                                //         value={0}
                                                                //         onChange={event => selectAmount(event, value.food_id)}>
                                                                //         <MenuItem value={1}>1</MenuItem>
                                                                //         <MenuItem value={2}>2</MenuItem>
                                                                //         <MenuItem value={3}>3</MenuItem>
                                                                //     </Select>
                                                                // )
                                                                // afterSelect.length !==0 && console.log(afterSelect[index])
                                                                // afterSelect.length !==0 && amountId === afterSelect[index] ? (
                                                                //     <Select
                                                                //         value={amount[0].food_amount}
                                                                //         onChange={event => selectAmount(event, value.food_id)}>
                                                                //         <MenuItem value={1}>1</MenuItem>
                                                                //         <MenuItem value={2}>2</MenuItem>
                                                                //         <MenuItem value={3}>3</MenuItem>
                                                                //     </Select>
                                                                // ): (
                                                                //     <Select
                                                                //         value={0}
                                                                //         onChange={event => selectAmount(event, value.food_id)}>
                                                                //         <MenuItem value={1}>1</MenuItem>
                                                                //         <MenuItem value={2}>2</MenuItem>
                                                                //         <MenuItem value={3}>3</MenuItem>
                                                                //     </Select>
                                                                // )
                                                            }
                                                            {/*{*/}

                                                            {/*a !== "" ? (*/}
                                                            {/*<Select*/}
                                                            {/*value={a}*/}
                                                            {/*onChange={event => selectAmount(event, value.food_id)}>*/}
                                                            {/*<MenuItem value={1}>1</MenuItem>*/}
                                                            {/*<MenuItem value={2}>2</MenuItem>*/}
                                                            {/*<MenuItem value={3}>3</MenuItem>*/}
                                                            {/*</Select>*/}
                                                            {/*) : (*/}
                                                            {/*<Select*/}
                                                            {/*value={0}*/}
                                                            {/*onChange={event => selectAmount(event, value.food_id)}>*/}
                                                            {/*<MenuItem value={1}>1</MenuItem>*/}
                                                            {/*<MenuItem value={2}>2</MenuItem>*/}
                                                            {/*<MenuItem value={3}>3</MenuItem>*/}
                                                            {/*</Select>*/}
                                                            {/*)*/}
                                                            {/*}*/}

                                                        </TableCell>

                                                    </TableRow>

                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </ListItem>
                            <ListItem>
                                {
                                    valueFood && (
                                        <TablePagination
                                            component="div"
                                            count={valueFood.data.result.length}
                                            rowsPerPage={rowPerPage}
                                            page={page}
                                            onChangePage={onChangePage}
                                            onChangeRowsPerPage={onChangeRow}
                                        />
                                    )
                                }
                                <Button variant="fab" onClick={submitSelectFood}>Go</Button>
                            </ListItem>
                            <hr/>
                            <Dialog
                                open={openDialogResultSelectFood}
                                onClose={changeIsCloseDialogResultSelectFood}
                                TransitionComponent={Transition}
                                maxWidth="md">
                                <DialogContent>
                                    <DialogContentText>
                                        {
                                            resultSelect && (
                                                <Table>
                                                    <TableHead>
                                                        <TableCell>ชื่ออาหาร</TableCell>
                                                        <TableCell>แคลลอรี่ (กรัม)</TableCell>
                                                        <TableCell>โปรตีน (กรัม)</TableCell>
                                                        <TableCell>ไขมัน (กรัม)</TableCell>
                                                        <TableCell>คาร์โบไฮเดรต (กรัม)</TableCell>
                                                        <TableCell>ปริมาณ/หน่วยบริโภค(ต่อ หน่วยบริโภค)</TableCell>
                                                    </TableHead>
                                                    <TableBody>
                                                        {
                                                            resultSelect.data.result.map((value, index) => {

                                                                if (amount.length !== 0) {
                                                                    const selectAmountNutrian = amount[index];
                                                                    if (value.food_id === selectAmountNutrian.food_id) {
                                                                        return (
                                                                            <TableRow key={value.food_id} component="th"
                                                                                      scope="row">
                                                                                <TableCell>{value.foods_name}</TableCell>
                                                                                <TableCell>{value.food_cal * selectAmountNutrian.food_amount}</TableCell>
                                                                                <TableCell>{value.food_protien * selectAmountNutrian.food_amount}</TableCell>
                                                                                <TableCell>{value.food_fat * selectAmountNutrian.food_amount}</TableCell>
                                                                                <TableCell>{value.food_carb * selectAmountNutrian.food_amount}</TableCell>
                                                                                <TableCell>{selectAmountNutrian.food_amount}</TableCell>
                                                                            </TableRow>
                                                                        )
                                                                    }
                                                                }

                                                            })
                                                        }
                                                    </TableBody>
                                                </Table>
                                            )
                                        }
                                    </DialogContentText>
                                </DialogContent>
                            </Dialog>
                        </List>
                    </Dialog>
                </Grid>
            </Grid>
            {/*show All Food,Drinks,Desserts*/}
            <Grid container justify="center">
                <Grid item xs={12} sm={10}>
                    <Card>
                        <CardContent>
                            <Tabs
                                value={value}
                                onChange={changeTab}
                                fullWidth
                                centered
                                indicatorColor="secondary"
                                textColor="secondary"
                                className="spacingTable"
                            >
                                <Tab label="อาหาร"/>
                                <Tab icon={<Drink/>} label="เครื่องดื่ม"/>
                                <Tab label="ขนม & ของหวาน"/>
                            </Tabs>
                            {value === 0 && <ShowAllFoodsContainer/>}
                            {value === 1 && <ShowAllDrinksContainer/>}
                            {value === 2 && <ShowAllDessertContainer/>}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};
const compare = (selectedValue, amountValue) => {
    let result = '';
    selectedValue.forEach((data1) => amountValue.forEach((data2) => {
        if (data1 === data2) {
            result = data2.food_amount
        }
    }))
    return result
};

export default Neutrian;
