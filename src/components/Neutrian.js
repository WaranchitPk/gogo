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
    InputLabel,
    FormControl,
    Menu
} from "@material-ui/core";
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
    return ['เลือกรายการอาหาร,เครื่องดื่ม หรือ ขนม', 'เลือกประเภทอาหาร,เครื่องดื่ม หรือ ขนม', 'เลือกเมนูตามต้องการ'];
};
const stepContent1 = (valueCate, getValueCate) => (
    <form>
        <FormControl>
            <Select
                value={valueCate}
                onChange={getValueCate}>
                <MenuItem value="food">อาหาร</MenuItem>
                <MenuItem value="drink">เครื่องดื่ม</MenuItem>
                <MenuItem value="dessert">ขนม & ของหวาน</MenuItem>
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
        case 2:
            return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
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
                      getValueMenu
                  }) => {
    const steps = getSteps();
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
                                    TransitionComponent={Transition}
                            >
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
                </Grid>
            </Grid>

            {/*<Grid container justify="center">*/}
            {/*<Grid item xs={12} sm={10}>*/}
            {/*<Card>*/}
            {/*<CardContent>*/}

            {/*<Tabs*/}
            {/*value={value}*/}
            {/*onChange={changeTab}*/}
            {/*fullWidth*/}
            {/*centered*/}
            {/*indicatorColor="secondary"*/}
            {/*textColor="secondary"*/}
            {/*className="spacingTable"*/}
            {/*>*/}
            {/*<Tab label="อาหาร"/>*/}
            {/*<Tab icon={<Drink/>} label="เครื่องดื่ม"/>*/}
            {/*<Tab label="ขนม & ของหวาน"/>*/}
            {/*</Tabs>*/}
            {/*{value === 0 && <ShowAllFoodsContainer/>}*/}
            {/*{value === 1 && <ShowAllDrinksContainer/>}*/}
            {/*{value === 2 && <ShowAllDessertContainer/>}*/}
            {/*</CardContent>*/}
            {/*</Card>*/}
            {/*</Grid>*/}
            {/*</Grid>*/}
        </div>
    );
};

export default Neutrian;
