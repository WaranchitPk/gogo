import React from 'react';
import {
    Grid,
    Paper,
    FormGroup,
    TextField,
    Typography,
    Button,
    TableCell,
    CardContent,
    Card,
    Table,
    TableBody,
    TableHead,
    TableRow,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PicHeartRate from '../../asset/heart_rate_zone.jpg'

const styles = {
    Table: {
        marginTop: '7%'
    },
    TableHead: {
        backgroundColor: 'bisque'
    },
    TableBody: {
        backgroundColor: 'ghostwhite'
    },
    TitleTable: {
        marginTop: '2%'
    },
    imgMHR: {
        width: '70%',
        marginLeft: '15%',
        marginTop: '3%'
    },
    Paper: {
        marginTop: '20%',
        backgroundColor: 'cornsilk'
    },
    result: {
        marginTop: '10%'
    },
    Button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        marginTop: '2%',
    },
    form: {
        padding: '2% 2% 2% 2%'
    }
};
const dataMHR = [
    {
        id: 1,
        zone: 'Zone 1: Easy',
        MHR: '50 - 60% 104-114 bpm',
        benefit: 'โซนออกกำลังกายสำหรับมือใหม่ ค่อยๆ เป็นค่อยๆไป'
    },
    {
        id: 2,
        zone: 'Zone 2: Fat burning',
        MHR: '60 - 70% 114-133 bpm',
        benefit: 'เป็นโซนที่ช่วยฝึกความอดทน,ฝึกความอึด(Endurance) ร่างกายเริ่มมีการดึงเอาไขมันมาใช้เผาผลาญ'
    },
    {
        id: 3,
        zone: 'Zone 3: Aerobic',
        MHR: '70 - 80% 133-152 bpm',
        benefit: 'เป็นการออกกำลังกายแอโรบิค ฝึกกล้ามเนื้อหัวใจ ปอดและความอดทน สัดส่วนการใช้คาร์โบฯ จะเยอะกว่าไขมัน'
    },
    {
        id: 4,
        zone: 'Zone 4: Anaerobic',
        MHR: '80 - 90% 152-171 bpm',
        benefit: 'ร่างกายไม่ใช้ออกซิเจนในการสร้างพลังงาน นิยมใช้ฝึก Interval เพื่อเพิ่ม performance'
    },
    {
        id: 5,
        zone: 'Zone 5: Red Line',
        MHR: '90 - 100% 171-190 bpm',
        benefit: 'เป็นโซนอันตราย ถ้าไม่ใช่นักกีฬาอาชีพ ควรลีกเลี่ยง'
    }
];
const Calculator_MHR = ({handleChange, onSubmit, result}) => (
    <div>
        <Grid container alignItems='center' justify='center'>
            <Grid item xs={4} sm={4}>
                <Paper elevation={10} style={styles.Paper}>
                    <Typography variant="subheading" align='center'>การคำนวน (MHR)</Typography>
                    <form style={styles.form}>
                        <FormGroup row>
                            <TextField
                                id="age"
                                name="age"
                                label="Age"
                                onChange={handleChange}/>
                        </FormGroup>
                        <Button onClick={onSubmit} style={styles.Button}>คำนวณ</Button>
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
                            ค่า Maximum Heart Rate (MHR) ของคุณคือ {result}
                        </Typography></Card> : <Card style={styles.result}>
                        <Typography>
                            ค่า Maximum Heart Rate (MHR) ของคุณคือ 0
                        </Typography></Card>
                }
            </Grid>
        </Grid>
        {/*Description*/}
        <Grid container alignItems='center' justify='center'>
            <Grid item sm={10} xs={10}>
                <Card style={styles.Table} raised>
                    <CardContent>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography variant='subheading'>คำอธิบาย</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography variant='body1'>
                                    ค่าการเต้นของหัวใจสูงสุด หรือเรียกสั้นๆ ว่า Max Heart Rate (MaHR หรือ MHR)
                                    มีไว้เพื่อเป็น ไกด์ไลน์ ในการฝึกซ้อมการออกกำลังกายแบบ cardiovascular capacity หรือ
                                    aerobic activity เป็นการออกกำลังการที่หัวใจต้องสูบฉีดเลือด
                                    ปอดต้องถ่ายเทอากาศดีและเสียเข้าออกร่างกาย
                                    รวมทั้งมัดกล้ามเนื้อต้องทำงานอย่างต่อเนื่องในระยะเวลาหนึ่ง อย่างเช่น การวิ่ง
                                    ปั่นจักรยานและว่ายน้ำ ส่วนมากจะเป็นกีฬาแนว Endurance
                                    <img src={PicHeartRate} style={styles.imgMHR}/>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <Typography variant="subheading" style={styles.TitleTable}>ตารางอธิบายค่า Maximum Heart
                            Rate</Typography>

                        <Table>
                            <TableHead style={styles.TableHead}>
                                <TableRow>
                                    <TableCell>Zone</TableCell>
                                    <TableCell>% MHR</TableCell>
                                    <TableCell>ประโยชน์</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody style={styles.TableBody}>
                                {dataMHR.map(n => {
                                    return (
                                        <TableRow key={n.id}>
                                            <TableCell>{n.zone}</TableCell>
                                            <TableCell>{n.MHR}</TableCell>
                                            <TableCell>{n.benefit}</TableCell>
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

export default Calculator_MHR;
