import React from 'react';
import {
  Button,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Paper,
  Divider,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { CalculatorComponent } from "./index";
import CloseIcon from "@material-ui/icons/Close";
import MainThin from './CalculateExercise/thin/mainThin'
import MainSmart from './CalculateExercise/smart/mainSmart'
import MainFat from './CalculateExercise/fat/mainFat'
const styles = {
  buttonBlue: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: '#E0F7FA',
    marginTop: '2%',
  },
  header: {
    textAlign: 'center'
  },
  Paper: {
    height: 'auto'
  },
  cardResult: {
    paddingLeft: '2%',
    paddingRight: '2%',
    marginTop: '1%'
  },
  Divider: {
    marginBottom: '2%'
  },
  cardForm: {
    marginTop: '5%'
  }
};
const ExerciseRecomend = ({ bmi,userType }) => {
  if (bmi < 18.5) {
    return (
      <div>
        <MainThin userType={userType}/>
      </div>
    )
  } else if (bmi >= 18.5 && bmi <= 22.9) {
    return (
      <div>
        <MainSmart userType={userType}/>
      </div>
    )
  } else if (bmi >= 23.0) {
    return (
      <div>
        <MainFat userType={userType}/>
      </div>
    )
  }
};
const ShowCalculator = ({
  valueGender,
  onChangeInput,
  valueActivity,
  calculate,
  resultTdee,
  resultBmr,
  resultMhr,
  resultBmiData,
  resultBmiStatus,
  isOpenDialogShowExercise,
  onOpenDialogShowExercise,
  onCloseDialogShowExercise,
  userType
}) => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={10} sm={8}>
          {/*<Paper square style={styles.Paper}>*/}
          <Grid container justify="center">
            <Grid item xs={10} sm={6}>
              <Card style={styles.cardForm}>
                <CardHeader
                  title="คำนวนค่า พลังงานต่างๆ"
                  style={styles.header}/>
                <CardContent>
                  <FormGroup row>
                    <FormLabel component="legend">เพศ</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender"
                      value={valueGender}
                      onChange={onChangeInput}>
                      <FormControlLabel value="male" control={<Radio/>} label="ชาย"/>
                    </RadioGroup>
                    <RadioGroup
                      aria-label="gender"
                      name="gender"
                      value={valueGender}
                      onChange={onChangeInput}>
                      <FormControlLabel value="female" control={<Radio/>} label="หญิง"/>
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      id="age"
                      name="age"
                      label="อายุ"
                      onChange={onChangeInput}
                      type="number"
                      inputProps={{ pattern: "[0-9]*" }}
                      required/>
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      id="height"
                      name="height"
                      label="ส่วนสูง"
                      onChange={onChangeInput}
                      inputProps={{ pattern: "[0-9]*" }}
                      required
                      type="number"/>
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      id="weight"
                      name="weight"
                      label="น้ำหนัก"
                      onChange={onChangeInput}
                      inputProps={{ pattern: "[0-9]*" }}
                      required
                      type="number"/>
                  </FormGroup>
                  <FormGroup>
                    <InputLabel htmlFor="age-simple">กิจกรรมการออกกำลังกาย</InputLabel>
                    <Select
                      value={valueActivity}
                      onChange={onChangeInput}
                      inputProps={{
                        name: 'activity',
                        id: 'activity',
                      }}>
                      <MenuItem value={1.2}>น้อยมากหรือไม่ออกเลย</MenuItem>
                      <MenuItem value={1.375}>ออกกำลังกาย 1-3 ครั้งต่อสัปดาห์</MenuItem>
                      <MenuItem value={1.55}>ออกกำลังกาย 4-5 ครั้งต่อสัปดาห์</MenuItem>
                      <MenuItem value={1.7}>ออกกำลังกาย 6-7 ครั้งต่อสัปดาห์</MenuItem>
                      <MenuItem value={1.9}>ออกกำลังกายวันละ 2 ครั้งขึ้นไป</MenuItem>
                    </Select>
                  </FormGroup>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Button
              onClick={calculate}
              style={styles.buttonBlue}
              size="large">คำนวน</Button>
          </Grid>

          {/*</Paper>*/}
        </Grid>
      </Grid>
      {
        resultTdee && (
          <div>
            <Grid container spacing={40} justify="center" style={styles.cardResult}>
              <Grid item xs={8} sm={4}>
                <Card>
                  <CardHeader title="ค่า TDEE และ BMR"/>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                      <Typography variant="subheading" color="textSecondary">ความหมายของ TDEE และ BMR</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography paragraph>
                        <b>TDEE (Total Daily Energy Expenditure) คือ</b>ค่าของพลังงานที่ใช้ทั้งหมดในแต่ละวัน
                        เมื่อมีการทำกิจกรรมต่างๆ
                      </Typography>
                      <Typography paragraph>
                        <b>BMR (Basal Metabolic Rate)</b>
                        หรือค่าพลังงานที่ร่างกายต้องการเพื่อที่จะทำให้กระบวนการพื้นฐานเพื่อการดำรงชีวิต เช่น
                        การหายใจ
                        การไหลเวียนโลหิต ในขณะที่พักอยู่เฉยๆ ดำเนินไปได้ </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                      <Typography variant="subheading" color="textSecondary">ผลลัพธ์</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography paragraph><b>ค่า TDEE ของคุณคือ: </b>
                        {resultTdee} กิโลแคลอรี่ </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography paragraph><b>ค่า BMR ของคุณคือ: </b>
                        {resultBmr} กิโลแคลอรี่ </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                      <Typography variant="subheading" color="textSecondary">คำแนะนำ</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant="subheading">
                        ค่า TDEE สามารถนำไปใช้เป็นเกณฑ์เพิ่ม ลดหุ่น(ลดไขมัน), เพิ่มน้ำหนัก(เพิ่มกล้ามเหนื้อ)
                        หรืออยากให้ร่างกายสมส่วน เช่น
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subheading">
                        - ถ้าต้องการ ฟิตหุ่น หรือลดไขมัน นำค่า TDEE ที่คำนวน - 500
                        - ถ้าต้องการ เพิ่มน้ำหนัก หรือเพิ่มกล้ามเนื้อ นำค่า TDEE ที่คำนวน + 500
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Divider style={styles.Divider}/>
                      <Typography variant="subheading">
                        หากต้องการคำนวนโภชนาการอาหารเพื่อประกอบการตัดสินใจ คลิก
                      </Typography>
                      <Button style={styles.buttonBlue} component={Link} to="/neutrian">คลิก</Button>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Card>
              </Grid>
              <Grid item xs={8} sm={4}>
                <Card>
                  <CardHeader title="ค่า MHR"/>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                      <Typography variant="subheading" color="textSecondary">ความหมายของ MHR</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography paragraph>
                        ค่าการเต้นของหัวใจสูงสุด หรือเรียกสั้นๆ ว่า Max Heart Rate (MaHR หรือ MHR)
                        มีไว้เพื่อเป็น ไกด์ไลน์ ในการฝึกซ้อมการออกกำลังกายแบบ cardiovascular capacity หรือ
                        aerobic activity เป็นการออกกำลังการที่หัวใจต้องสูบฉีดเลือด
                        ปอดต้องถ่ายเทอากาศดีและเสียเข้าออกร่างกาย
                        รวมทั้งมัดกล้ามเนื้อต้องทำงานอย่างต่อเนื่องในระยะเวลาหนึ่ง อย่างเช่น การวิ่ง
                        ปั่นจักรยานและว่ายน้ำ ส่วนมากจะเป็นกีฬาแนว Endurance
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                      <Typography variant="subheading" color="textSecondary">ผลลัพธ์</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography paragraph>
                        <b>ค่า MHR ของคุณคือ</b> : {resultMhr}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Card>
              </Grid>
              <Grid item xs={8} sm={4}>
                <Card>
                  <CardHeader title="ค่า BMI"/>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                      <Typography variant="subheading" color="textSecondary">ความหมายของ BMI</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant='subheading'>ดัชนีมวลกาย(BODY MASS INDEX(BMI))หมายถึง</Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
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
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                      <Typography variant="subheading" color="textSecondary">ผลลัพธ์</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant='subheading'>
                        <b>ค่า BMI ของคุณคือ:</b> {resultBmiData}
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant='subheading'>
                        <b>มวลในร่างการของคุณตอนนี้อยู่ในช่วง :</b> {resultBmiStatus}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                      <Typography variant="subheading" color="textSecondary">คำแนะนำ</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant='subheading'>
                        <p>จากผลลัพธ์มวลร่างกายของคุณ หากคุณต้องการ</p>
                        <p> - ฟิตหุ่น หรือลดไขมัน ให้คุณรับประทานอาหารหรืออื่นๆให้ได้ปริมาณแคลลอรี่
                          = <b>{resultTdee - 500} แคลลอรี่ ต่อ วัน</b></p>
                        <p> - เพิ่มน้ำหนัก หรือเพิ่มกล้ามเนื้อ ให้คุณรับประทานอาหารหรืออื่นๆให้ได้ปริมาณแคลลอรี่
                          = <b>{resultTdee + 500} แคลลอรี่ ต่อ วัน</b></p>
                        <p>หากคุณต้องการดูท่าออกกำลังกายพื้นฐานที่เหมาะสมกับมวลร่างกายของคุณ คลิก</p>
                        <Button style={styles.buttonBlue} onClick={onOpenDialogShowExercise}>คลิก</Button>
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Card>
              </Grid>
            </Grid>
            <Dialog
              fullScreen
              open={isOpenDialogShowExercise}
              onClose={onCloseDialogShowExercise}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton color="inherit" onClick={onCloseDialogShowExercise}>
                    <CloseIcon/>
                  </IconButton>
                  บักทึกการออกกำลังกายของผู้ใช้
                </Toolbar>
              </AppBar>
              <List>
                <ListItem>
                  <ExerciseRecomend
                    bmi={resultBmiData}
                    userType={userType}/>
                </ListItem>
              </List>
            </Dialog>
          </div>
        )
      }
    </div>
  );
};

export default ShowCalculator;
