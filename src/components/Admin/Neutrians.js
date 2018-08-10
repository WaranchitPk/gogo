import React from 'react';
import {
  ShowAllFoodsContainer,
  ShowAllDrinksContainer,
  ShowAllDessertContainer,
} from '../../containers';
import {
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core';
import Drink from '@material-ui/icons/LocalDrink';
import '../../style/Admin/neutrians.css';
import { AdminNeutrianComponent } from "../index";

const AdminNeutrian = ({
  value,
  onChangeTab,
  inPutFoodName,
  inPutFoodCal,
  inPutFoodProtein,
  inPutFoodFat,
  inputFoodCarb,
  inPutFoodPerUnit,
  onChangeInput,
  valueCate,
  valueMenu,
  valueMenuFromDB,
  onSelectCate,
  onSelectMenu,
  onSubmitForm
}) => {
  return (
    <div>
      {/*show All Food,Drinks,Desserts*/}
      <Grid container justify='center'>
        <Grid item xs={12} sm={10}>
          <Card>
            <CardContent>
              <Typography color='textSecondary' align='center'>
                เพิ่มรายการอาหาร
              </Typography>
              <form>
                <TextField
                  label="Food Name"
                  value={inPutFoodName}
                  onChange={onChangeInput}
                  margin="normal"
                  name="foodName"/>
                <TextField
                  label="Food Calories"
                  value={inPutFoodCal}
                  onChange={onChangeInput}
                  name="foodCal"
                  InputProps={{
                    startAdornment: <InputAdornment position="end">Cal</InputAdornment>,
                  }}/>
                <TextField
                  label="Food Protein"
                  value={inPutFoodProtein}
                  onChange={onChangeInput}
                  name="foodProtein"
                  InputProps={{
                    startAdornment: <InputAdornment position="end">G.</InputAdornment>,
                  }}/>
                <TextField
                  label="Food Fat"
                  value={inPutFoodFat}
                  onChange={onChangeInput}
                  name="foodFat"
                  InputProps={{
                    startAdornment: <InputAdornment position="end">G.</InputAdornment>,
                  }}/>
                <TextField
                  label="Food Carb"
                  value={inputFoodCarb}
                  onChange={onChangeInput}
                  name="foodCarb"
                  InputProps={{
                    startAdornment: <InputAdornment position="end">G.</InputAdornment>,
                  }}/>
                <TextField
                  label="Food PerUnit"
                  value={inPutFoodPerUnit}
                  onChange={onChangeInput}
                  name="foodPerUnit"
                  InputProps={{
                    startAdornment: <InputAdornment position="end">G/Unit</InputAdornment>,
                  }}/>
                <InputLabel>Cate</InputLabel>
                <Select
                  value={valueCate}
                  onChange={onSelectCate}>
                  <MenuItem value={1}>อาหาร</MenuItem>
                  <MenuItem value={2}>เครื่องดื่ม</MenuItem>
                  <MenuItem value={3}>ขนม & ของหวาน</MenuItem>
                </Select>
                {/*.data.result*/}
                {/*{menu_id: 1, menu_name: "แกง", cate_id: 1}*/}
                <InputLabel>Menu</InputLabel>
                <Select
                  value={valueMenu}
                  onChange={onSelectMenu}>
                  {
                    valueMenuFromDB && valueMenuFromDB.data.result.map(result => (
                      <MenuItem
                        key={result.menu_id}
                        value={result.menu_id}>{result.menu_name}
                      </MenuItem>
                    ))
                  }
                </Select>
              </form>
              <Button onClick={onSubmitForm} color="secondary">ตกลง</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container justify='center' className='centeredCardShowFoods'>
        <Grid item xs={12} sm={10}>
          <Card>
            <CardContent>
              <Tabs
                value={value}
                onChange={onChangeTab}
                fullWidth
                centered
                indicatorColor='secondary'
                textColor='secondary'
                className='spacingTable'>
                <Tab label='อาหาร'/>
                <Tab icon={<Drink/>} label='เครื่องดื่ม'/>
                <Tab label='ขนม & ของหวาน'/>
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

export default AdminNeutrian;
