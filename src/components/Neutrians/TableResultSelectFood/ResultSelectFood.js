import React from 'react';
import {
    Dialog, DialogContent, DialogContentText,
    Slide,
    Table, TableBody, TableCell, TableHead, TableRow,
    Card, CardContent
} from "@material-ui/core";
import {sumValueCal, sumValueProtien, sumValueFat, sumValueCarb} from './CalValueInTable';

const Transition = (props) => {
    return <Slide direction="up" {...props}/>
};

const ShowSumCal = ({food}) => {
    return (
        <div>
            <h1>Cal: {sumValueCal(food)} Kcal.</h1>
            <h1>Protien: {sumValueProtien(food)} G.</h1>
            <h1>Fat: {sumValueFat(food)} G.</h1>
            <h1>Carb: {sumValueCarb(food)} G.</h1>
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
