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

const DescriptionCalculator = ({Data_BMI, styles}) => (
    <div>
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
                {Data_BMI.map(n => {
                    return (
                        <TableRow key={n.id}>
                            <TableCell>{n.bmi}</TableCell>
                            <TableCell>{n.status}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </div>
);

export default DescriptionCalculator;
