import React from 'react';
import {
  Grid,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TablePagination,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider
} from '@material-ui/core';
import moment from 'moment';

const styles = {
  root: {
    marginTop: '2%'
  },
  TableHead: {
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  ListTypography: {
    opacity: '0.8'
  }
}
const TrainingEquipment_Home = ({
  resultData,
  resultSumMachine,
  TableChangeRowPerPageHome,
  TableChangePageHome,
  onTableChangeRowPerPageHome,
  onTableChangePageHome
}) => {
  console.log(resultSumMachine)
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="title" style={styles.ListTypography}>
              ตารางแสดงรายเอียดเครื่องเล่น (โดยย่อ)
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider/>
      <Grid container justify="center" style={styles.root}>
        <Grid item xs={10} sm={10}>
          <Table>
            <TableHead component="tr">
              <TableCell component="th" style={styles.TableHead}>ชื่อเครื่องเล่น</TableCell>
              <TableCell component="th" style={styles.TableHead}>สถานะเครื่องเล่น</TableCell>
              <TableCell component="th" style={styles.TableHead}>ประเภทเครื่องเล่น</TableCell>
              <TableCell component="th" style={styles.TableHead}>วันที่ซื้อ</TableCell>
              <TableCell component="th" style={styles.TableHead}>ราคาเครื่องเล่น</TableCell>
              <TableCell component="th" style={styles.TableHead}>ผู้เพิ่มข้อมูล</TableCell>
            </TableHead>
            <TableBody>
              {
                resultData.slice(TableChangePageHome * TableChangeRowPerPageHome, TableChangePageHome * TableChangeRowPerPageHome + TableChangeRowPerPageHome)
                  .map(value => (
                    <TableRow key={value.trainingEquipment_id} component="tr">
                      <TableCell component="td">{value.trainingEquipment_name}</TableCell>
                      <TableCell component="td">{value.trainingEquipment_status}</TableCell>
                      <TableCell component="td">{value.category_name}</TableCell>
                      <TableCell component="td">{moment(value.trainingEquipment_dateForBuy)
                        .format('DD-MM-YYYY')}</TableCell>
                      <TableCell component="td">{value.trainingEquipment_price.toLocaleString()}</TableCell>
                      <TableCell component="td">{value.created_by_name}</TableCell>
                    </TableRow>
                  ))
              }
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={resultData.length}
            rowsPerPage={TableChangeRowPerPageHome}
            page={TableChangePageHome}
            onChangePage={onTableChangePageHome}
            onChangeRowsPerPage={onTableChangeRowPerPageHome}
          />
        </Grid>
      </Grid>
      <Divider/>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="title" style={styles.ListTypography}>
              สรุปยอดเครื่องเล่นภายในยิม
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem>
          <ListItemText>
            {
              resultSumMachine.map(value => (
                <Typography variant="subheading" style={styles.ListTypography}>
                  <b>เครื่องสำหรับเล่น{value.category_name}</b> จำนวน {value.countMachine} เครื่อง
                </Typography>
              ))
            }
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default TrainingEquipment_Home;
