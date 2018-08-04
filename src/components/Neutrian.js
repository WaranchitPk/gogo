import React from "react";
import {
    AppBar,
    Tab,
    Tabs,
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    Dialog,
    Slide,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Divider,
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Drink from "@material-ui/icons/LocalDrink";
import {ToolbarSelect, TableSelectedFood, ResultSelectFood, ButtonAndStepCal} from './Neutrians';
import {
    ShowAllFoodsContainer,
    ShowAllDrinksContainer,
    ShowAllDessertContainer,
} from "../containers";
import "../style/neutrian.css";

const Transition = (props) => {
    return <Slide direction="up" {...props}/>
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
                      resultSelect,
                      openDialogResultSelectFood,
                      changeIsCloseDialogResultSelectFood,
                      afterSelect,
                      statusSelected
                  }) => {
    return (
        <div>
            <Grid container spacing={16}>
                <Grid item xs={12} sm={4}>

                    {/*Button And Step Calculate Food You Want*/}
                    <ButtonAndStepCal
                        changeOpenDialog={changeOpenDialog}
                        openDialog={openDialog}
                        changeCloseDialog={changeCloseDialog}
                        step={step}
                        selectCateNeutrian={selectCateNeutrian}
                        getvalueCateNeutrian={getvalueCateNeutrian}
                        valueCate={valueCate}
                        valueMenu={valueMenu}
                        getValueMenu={getValueMenu}
                        changeNextStep={changeNextStep}/>

                    {/*Show Dialog Select Food*/}
                    <Dialog
                        fullScreen
                        open={openFullDialog}
                        onClose={onCloseFullDialog}
                        TransitionComponent={Transition}>
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
                                <ToolbarSelect numSelected={afterSelect.length}/>
                            </ListItem>
                            <ListItem>
                                <TableSelectedFood
                                    valueFood={valueFood}
                                    statusSelected={statusSelected}
                                    page={page}
                                    rowPerPage={rowPerPage}
                                    selectFood={selectFood}
                                    onChangePage={onChangePage}
                                    onChangeRow={onChangeRow}
                                    submitSelectFood={submitSelectFood}/>
                            </ListItem>
                            <hr/>
                        </List>
                    </Dialog>
                </Grid>
            </Grid>

            {/*Show Result Food Select*/}
            <ResultSelectFood
                openDialogResultSelectFood={openDialogResultSelectFood}
                changeIsCloseDialogResultSelectFood={changeIsCloseDialogResultSelectFood}
                resultSelect={resultSelect}/>

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
                                className="spacingTable">
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


export default Neutrian;
