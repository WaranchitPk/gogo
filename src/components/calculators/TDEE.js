import React from 'react';
import {
    Grid,
    Paper,
    Typography,
    FormGroup,
    TextField,
    FormLabel,
    InputLabel,
    Select,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Card,
    CardContent,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
    textField: {
        width: 200
    },
    activity: {
        width: 250
    },
    Paper: {
        backgroundColor: 'cornsilk',
        marginTop: '10%',
    },
    Button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        marginTop: '2%',
    },
    form: {
        marginLeft: '5%',
        marginTop: '3%',
        padding: '2% 2% 2% 2%'
    },
    titleFormInput: {
        textAlign: 'center'
    },
    Card: {
        marginTop: '3%',
    },
    StyleCard: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    },
    Table: {
        marginTop: '7%'
    },
};
const Calculator_TDEE = ({valueGender, handleChange, valueActivity, calculate, result}) => (
    <div>
        <Grid container alignItems='center' justify='center'>
            <Grid item sm={6} xs={6}>
                <Paper elevation={10} style={styles.Paper}>
                    <Typography variant='subheading' style={styles.titleFormInput}>BMR&&TDEE Calculator</Typography>
                    <form style={styles.form}>
                        <FormGroup row>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                value={valueGender}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                            </RadioGroup>
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                value={valueGender}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            </RadioGroup>
                        </FormGroup>
                        <FormGroup>
                            <TextField
                                id="age"
                                name="age"
                                style={styles.textField}
                                label="Age"
                                onChange={handleChange}
                                margin="normal"
                                inputProps={{pattern: "[0-9]*"}}/>
                        </FormGroup>
                        <FormGroup>
                            <TextField
                                id="height"
                                name="height"
                                style={styles.textField}
                                label="Height (Cm.)"
                                onChange={handleChange}
                                margin="normal"
                                inputProps={{pattern: "[0-9]*"}}/>
                        </FormGroup>
                        <FormGroup>
                            <TextField
                                id="weight"
                                name="weight"
                                style={styles.textField}
                                label="Weight (Kg.)"
                                onChange={handleChange}
                                margin="normal"
                                inputProps={{pattern: "[0-9]*"}}/>
                        </FormGroup>
                        <FormGroup>
                            <InputLabel htmlFor="age-simple">Activity</InputLabel>
                            <Select
                                value={valueActivity}
                                onChange={handleChange}
                                style={styles.activity}
                                inputProps={{
                                    name: 'activity',
                                    id: 'activity',
                                }}
                            >
                                <MenuItem value={1.2}>น้อยมากหรือไม่ออกเลย</MenuItem>
                                <MenuItem value={1.375}>ออกกำลังกาย 1-3 ครั้งต่อสัปดาห์</MenuItem>
                                <MenuItem value={1.55}>ออกกำลังกาย 4-5 ครั้งต่อสัปดาห์</MenuItem>
                                <MenuItem value={1.7}>ออกกำลังกาย 6-7 ครั้งต่อสัปดาห์</MenuItem>
                                <MenuItem value={1.9}>ออกกำลังกายวันละ 2 ครั้งขึ้นไป</MenuItem>
                            </Select>
                        </FormGroup>
                        <Button style={styles.Button} onClick={calculate}>
                            Calculate
                        </Button>

                    </form>
                </Paper>
            </Grid>
        </Grid>

        {/*Result*/}
        <Grid container alignItems='center' justify='center' spacing={32} style={styles.Card}>
            <Grid item xs={12} sm={3}>
                {
                    result ? <Card style={styles.StyleCard}>
                        <Typography>ค่า BMR ของคุณคือ :</Typography>
                        <CardContent>
                            {result.resultBmr}
                        </CardContent>
                    </Card> : <Card style={styles.StyleCard}>
                        <Typography>ค่า BMR ของคุณคือ :</Typography>
                        <CardContent>
                            0
                        </CardContent>
                    </Card>
                }
            </Grid>
            <Grid item xs={12} sm={3}>
                {
                    result ? <Card style={styles.StyleCard}>
                        <Typography>ค่า TDEE ของคุณคือ :</Typography>
                        <CardContent>
                            {result.resultTdee}
                        </CardContent>
                    </Card> : <Card style={styles.StyleCard}>
                        <Typography>ค่า TDEE ของคุณคือ :</Typography>
                        <CardContent>
                            0
                        </CardContent>
                    </Card>
                }
            </Grid>
        </Grid>

        {/*Description*/}
        <Grid container alignItems='center' justify='center'>
            <Grid item xs={7} sm={7}>
                <Card style={styles.Table} raised>
                    <CardContent>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography variant='subheading'>คำอธิบาย</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography variant='body1'>
                                    <Typography variant='subheading'>BMR (Basal Metabolic Rate) หมายถึง:</Typography>
                                    ค่าพลังงานที่ร่างกายต้องการเพื่อที่จะทำให้กระบวนการพื้นฐานเพื่อการดำรงชีวิต เช่น
                                    การหายใจ การไหลเวียนโลหิต ในขณะที่พักอยู่เฉยๆ ดำเนินไปได้
                                    <hr/>
                                    <Typography variant='subheading'>TDEE (Total Daily Energy Expenditure) หมายถึง:</Typography>
                                    ค่าของพลังงานที่ใช้ทั้งหมดในแต่ละวัน เมื่อมีการทำกิจกรรมต่างๆ
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default Calculator_TDEE;
