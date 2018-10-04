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
  InputLabel,
  Divider
} from '@material-ui/core';
import Drink from '@material-ui/icons/LocalDrink';
import '../../style/Admin/neutrians.css';
import { AdminNeutrianComponent } from "../index";

const styles = {
  root: {
    marginTop: '2%'
  },
  Divider: {
    marginTop: '3%',
    marginBottom: '1%'
  },
  textField: {
    marginLeft: '10px',
    marginRight: '10px',
    width: 200,
  },
  label: {
    marginLeft: '15px',
    marginRight: '15px'
  },
  Button: {
    marginTop: '2%',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: '#E0F7FA',
  },
  TypographyBt: {
    color: '#E0F7FA',
  }
}
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
    <div style={styles.root}>
      {/*show All Food,Drinks,Desserts*/}
      <Grid container justify='center'>
        <Grid item xs={12} sm={10}>
          <Card>
            <CardContent>
              <Typography color='textSecondary' align='center' variant="headline">
                เพิ่มรายการอาหาร
              </Typography>
              <form>
                <TextField
                  label="ชื่ออาหาร"
                  value={inPutFoodName}
                  onChange={onChangeInput}
                  margin="normal"
                  name="foodName"
                  style={styles.textField}/>
                <TextField
                  label="แคลลอรี่"
                  value={inPutFoodCal}
                  onChange={onChangeInput}
                  name="foodCal"
                  style={styles.textField}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Cal</InputAdornment>,
                  }}
                  type="number"/>
                <TextField
                  label="โปรตีน"
                  value={inPutFoodProtein}
                  onChange={onChangeInput}
                  name="foodProtein"
                  style={styles.textField}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">G.</InputAdornment>,
                  }}
                  type="number"/>
                <TextField
                  label="ไขมัน"
                  value={inPutFoodFat}
                  onChange={onChangeInput}
                  name="foodFat"
                  style={styles.textField}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">G.</InputAdornment>,
                  }}
                  type="number"/>
                <TextField
                  label="คาร์โบไฮเดรท"
                  value={inputFoodCarb}
                  onChange={onChangeInput}
                  name="foodCarb"
                  style={styles.textField}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">G.</InputAdornment>,
                  }}
                  type="number"/>
                <TextField
                  label="ปริมาณต่อหน่วย"
                  value={inPutFoodPerUnit}
                  onChange={onChangeInput}
                  name="foodPerUnit"
                  style={styles.textField}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">G/Unit</InputAdornment>,
                  }}
                  type="number"/>
                <InputLabel style={styles.label}>รายการอาหาร</InputLabel>
                <Select
                  value={valueCate}
                  onChange={onSelectCate}
                  style={styles.textField}>
                  <MenuItem value={1}>อาหาร</MenuItem>
                  <MenuItem value={2}>เครื่องดื่ม</MenuItem>
                  <MenuItem value={3}>ขนม & ของหวาน</MenuItem>
                </Select>
                {/*.data.result*/}
                {/*{menu_id: 1, menu_name: "แกง", cate_id: 1}*/}
                <InputLabel style={styles.label}>เมนูอาหาร</InputLabel>
                <Select
                  value={valueMenu}
                  onChange={onSelectMenu}
                  style={styles.textField}>
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
              <Button onClick={onSubmitForm} variant="contained" color="primary" style={styles.Button}>
                <Typography variant="title" style={styles.TypographyBt}>เพิ่ม</Typography>
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Divider style={styles.Divider}/>
      <Grid container justify='center'>
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
