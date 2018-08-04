import React from 'react';
import {
    Dialog, DialogContent, DialogContentText,
    Slide,
    Table, TableBody, TableCell, TableHead, TableRow,
    Card, CardContent,
    Grid,
    Typography
} from "@material-ui/core";
import {sumValueCal, sumValueProtien, sumValueFat, sumValueCarb} from './CalValueInTable';
import CaloriesIcon from '../../../asset/icons/calculator.svg';
import ProteinIcon from '../../../asset/icons/meat.svg';
import FatIcon from '../../../asset/icons/fat.svg';
import CarbIcon from '../../../asset/icons/diet.svg';
import '../../../style/neutrian.css'
const Transition = (props) => {
    return <Slide direction="up" {...props}/>
};

const ShowSumCal = ({food}) => {
    return (
        <div>
            <Grid container>
                <Grid item>
                    <img src={CaloriesIcon} className="icon"/>
                </Grid>
                <Grid item>
                    <Typography>Cal: {sumValueCal(food)} Kcal.</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <img src={ProteinIcon} className="icon"/>
                </Grid>
                <Grid item>
                    <Typography>Protien: {sumValueProtien(food)} G.</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <img src={FatIcon} className="icon"/>
                </Grid>
                <Grid item>
                    <Typography>Fat: {sumValueFat(food)} G.</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <img src={CarbIcon} className="icon"/>
                </Grid>
                <Grid item>
                    <Typography>Carb: {sumValueCarb(food)} G.</Typography>
                </Grid>
            </Grid>
        </div>
    )
};

const TableResultSelectFood = ({
                                   openDialogResultSelectFood,
                                   changeIsCloseDialogResultSelectFood,
                                   resultSelect
                               }) => {
    return (
        <Dialog
            open={openDialogResultSelectFood}
            onClose={changeIsCloseDialogResultSelectFood}
            TransitionComponent={Transition}
            maxWidth="md">
            <DialogContent>
                <DialogContentText>
                    {
                        resultSelect && (
                            <div>
                                <Table>
                                    <TableHead>
                                        <TableCell>ชื่ออาหาร</TableCell>
                                        <TableCell>แคลลอรี่ (กิโลแคลลอรี่)</TableCell>
                                        <TableCell>โปรตีน (กรัม)</TableCell>
                                        <TableCell>ไขมัน (กรัม)</TableCell>
                                        <TableCell>คาร์โบไฮเดรต (กรัม)</TableCell>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            resultSelect.data.result.map((value) => (
                                                <TableRow key={value.food_id} component="th"
                                                          scope="row">
                                                    <TableCell>{value.foods_name}</TableCell>
                                                    <TableCell>{value.food_cal}</TableCell>
                                                    <TableCell>{value.food_protien}</TableCell>
                                                    <TableCell>{value.food_fat}</TableCell>
                                                    <TableCell>{value.food_carb}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                                <Card>
                                    <CardContent>
                                        {
                                            <ShowSumCal food={resultSelect.data.result}/>

                                        }
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    }
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
};

export default TableResultSelectFood;
