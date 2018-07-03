import React from 'react';
import {
    ExpansionPanelSummary,
    ExpansionPanel,
    ExpansionPanelDetails,
    Typography,
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PicHeartRate from '../../../asset/heart_rate_zone.jpg';

const DescriptionCalculator = ({Data_MHR, styles}) => (
    <div>
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
                {Data_MHR.map(n => {
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
    </div>
);

export default DescriptionCalculator;
