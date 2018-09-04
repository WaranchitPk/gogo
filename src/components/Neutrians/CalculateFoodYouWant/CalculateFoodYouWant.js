import React from 'react';
import {
    Button,
    Card, CardActions, CardContent,
    Dialog, DialogContent, DialogContentText, DialogTitle,
    FormControl,
    Grid,
    MenuItem, Paper,
    Select,
    Slide, Step, StepContent, StepLabel, Stepper,
    Typography
} from "@material-ui/core";
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
const CalculateFoodYouWant = ({
                                  changeOpenDialog,
                                  openDialog,
                                  changeCloseDialog,
                                  step,
                                  selectCateNeutrian,
                                  getvalueCateNeutrian,
                                  valueCate,
                                  valueMenu,
                                  getValueMenu,
                                  changeNextStep
                              }) => {
    const steps = getSteps();
    return (
        <div>
            <Card className="cardCalNeutrian">
                <CardContent>
                    <Typography>คำนวนโภชนาการอาหารที่ต้องการ</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={changeOpenDialog} variant="contained">
                        คำนวน
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
        </div>
    );
};

export default CalculateFoodYouWant;
