import React from 'react';
import {
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
    FormGroup,
    TableCell,
    Table,
    TableRow,
    TableHead,
    TableBody,
    Card,
    CardContent,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
    textHeader: {
        textAlign: 'center'
    },
    Paper: {
        marginTop: '10%',
        backgroundColor: 'cornsilk'
    },
    form: {
        marginLeft: '5%',
        marginTop: '3%',
        padding: '2% 2% 2% 2%'
    },
    Button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        marginTop: '2%',
    },
    Table: {
        marginTop: '7%'
    },
    TableHead: {
        backgroundColor: 'bisque'
    },
    TableBody: {
        backgroundColor: 'ghostwhite'
    },
    result: {
        marginTop: '10%'
    },
}
const dataBMI = [
    {
        id: 1,
        bmi: '18.50',
        status: 'น้ำหนักน้อย/ผอม'
    },
    {
        id: 2,
        bmi: 'ระหว่าง 18.50 - 22.90',
        status: 'ปกติ (สุขภาพดี)'
    },
    {
        id: 3,
        bmi: 'ระหว่าง 23 - 24.90',
        status: 'ท้วม / โรคอ้วนระดับ 1'
    },
    {
        id: 4,
        bmi: 'ระหว่าง 25 - 29.90',
        status: 'อ้วน / โรคอ้วนระดับ 2'
    },
    {
        id: 5,
        bmi: 'มากกว่า 30',
        status: 'อ้วนมาก / โรคอ้วนระดับ 3'
    }
]
const Calculator_BMI = ({handleChange, onSubmit, result}) => (
  <div>
      <Grid container alignItems='center' justify='center'>
          <Grid item xs={4} sm={4}>
              <Paper elevation={10} style={styles.Paper}>
                  <Typography style={styles.textHeader} variant="subheading">การคำนวนค่าดัชนีมวลกาย (BMI)</Typography>
                  <form style={styles.form}>
                      <FormGroup row>
                          <TextField
                              id="height"
                              name="height"
                              label="Height (Cm.)"
                              onChange={handleChange}/>
                      </FormGroup>
                      <FormGroup row>
                          <TextField
                              id="weight"
                              name="weight"
                              label="Weight (Kg.)"
                              onChange={handleChange}/>
                      </FormGroup>
                      <Button style={styles.Button} onClick={onSubmit}>
                          Calculate
                      </Button>
                  </form>
              </Paper>
          </Grid>
      </Grid>

      {/*Result*/}
      <Grid container alignItems='center' justify='center'>
          <Grid item xs={5} sm={5}>
              {
                  result ? <Card style={styles.result}>
                      <Typography>
                          ค่า ดัชนีมวลกาย(BODY MASS INDEX(BMI)) ของคุณคือ <h3>{result.data}</h3>
                      </Typography></Card> : <Card style={styles.result}>
                      <Typography>
                          ค่า ดัชนีมวลกาย(BODY MASS INDEX(BMI)) ของคุณคือ 0
                      </Typography></Card>
              }
          </Grid>
      </Grid>

      {/*Description*/}
      <Grid container alignItems='center' justify='center'>
          <Grid item sm={6} xs={6}>
              <Card style={styles.Table} raised>
                  <CardContent>
                      <ExpansionPanel>
                          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                              <Typography variant='subheading'>คำอธิบาย</Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <Typography variant='body1'>
                                  <Typography variant='subheading'>ดัชนีมวลกาย(BODY MASS INDEX(BMI))หมายถึง</Typography>
                                  <ul>
                                      <li>เครื่องมือเพียงชนิดเดียวที่ใช้วัดไขมันในร่างกาย (body fat)
                                          ที่ยังไม่สมบูรณ์แบบนัก
                                      </li>
                                      <li>เป็นวิธีหนึ่งในการประมาณปริมาณไขมันส่วนเกินที่ร่างกายสามารถเก็บได้</li>
                                      <li>ใช้ความสูงและน้ำหนักในการคำนวณ
                                          เป็นวิธีที่ง่ายและเชื่อถือได้ในการประเมินความเสี่ยงของโรคอ้วน
                                          แม้ว่าจะยังไม่มีการรับรองเป็นทางการ
                                      </li>
                                  </ul>
                              </Typography>
                          </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <Typography variant='subheading' align='center'>
                          ตารางอธิบายค่า BMI
                      </Typography>
                      <Table>
                          <TableHead style={styles.TableHead}>
                              <TableRow>
                                  <TableCell>ค่า BMI</TableCell>
                                  <TableCell>อยู่ในเกณท์</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody style={styles.TableBody}>
                              {dataBMI.map(n => {
                                  return (
                                      <TableRow key={n.id}>
                                          <TableCell>{n.bmi}</TableCell>
                                          <TableCell>{n.status}</TableCell>
                                      </TableRow>
                                  )
                              })}
                          </TableBody>
                      </Table>
                  </CardContent>
              </Card>
          </Grid>
      </Grid>
  </div>
);

export default Calculator_BMI;
