import {Grid} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import React from 'react';

import Banner from '../asset/banner.jpg';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';

const styles = {
    img: {
        width: '100%'
    }
};
const arr2 = [{
    food_id: 1,
    amount: 1
}, {
    food_id: 2,
    amount: 2
}, {
    food_id: 3,
    amount: 3
}];
const Home = ({data}) => {
    // his.props.result ? this.props.result.data.result.map
    return (
        <div>
            <Grid container>
            <Grid item xs={12} sm={12}>
                <img src={Banner} alt="" style={styles.img}/>
            </Grid>
        </Grid>
        {/*<Table>*/}
                {/*<TableHead className='headTable'>*/}
                    {/*<TableRow>*/}
                        {/*<TableCell>*/}
                                {/*<Typography variant='subheading'>ชื่ออาหาร</Typography>*/}
                        {/*</TableCell>*/}
                        {/*<TableCell>*/}
                                {/*<Typography variant='subheading'>แคลลอรี่</Typography>*/}
                         {/*</TableCell>*/}
                         {/*<TableCell>*/}
                                {/*<Typography variant='subheading'>โปรตีน</Typography>*/}
                         {/*</TableCell>*/}
                         {/*<TableCell>*/}
                                {/*<Typography variant='subheading'>ไขมัน</Typography>*/}
                         {/*</TableCell>*/}
                         {/*<TableCell>*/}
                                {/*<Typography variant='subheading'>จำนวน</Typography>*/}
                         {/*</TableCell>*/}
                    {/*</TableRow>*/}
                {/*</TableHead>*/}
                {/*<TableBody>*/}
                        {/*{*/}
                          {/*data ? data.data.result.map((result,index)=>{*/}
                            {/*const selectAmountNutrian = arr2[index];*/}
                            {/*if (result.food_id === selectAmountNutrian.food_id)*/}
                            {/*return (*/}
                                {/*<TableRow key={result.food_id}>*/}
                                {/*<TableCell>*/}
                                    {/*{result.foods_name}*/}
                                {/*</TableCell>*/}
                                {/*<TableCell>*/}
                                    {/*{result.food_cal * selectAmountNutrian.amount}*/}
                                {/*</TableCell>*/}
                                {/*<TableCell>*/}
                                    {/*{result.food_protien * selectAmountNutrian.amount}*/}
                                {/*</TableCell>*/}
                                {/*<TableCell>*/}
                                    {/*{result.food_fat * selectAmountNutrian.amount}*/}
                                {/*</TableCell>*/}
                                {/*<TableCell>*/}
                                    {/*{selectAmountNutrian.amount}*/}
                                {/*</TableCell>*/}
                                {/*</TableRow>*/}
                            {/*)*/}
                          {/*}) : ''  */}
                        {/*}*/}
                {/*</TableBody>*/}
        {/*</Table>*/}
        </div>
    );
}

export default withRouter(Home);
