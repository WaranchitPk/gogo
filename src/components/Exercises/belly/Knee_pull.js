import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import KP from '../../../asset/exercise/belly/Knee_pull.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Knee_pull = () => (
    <div>
        <Typography variant='headline' align='center'>
            Knee pull
        </Typography>
        <Typography variant='title' align='center'>
            20-30 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={KP} style={{width: '156%', height: '-8%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    การฝึกด้วยท่า Leg Pull-In On The Floor เริ่มต้นจากนั่งลงบนพื้นแล้วเอียงตัวทำมุมประมาณ 45 องศากับพื้น
                    วางมือทั้งสองข้างไว้บริเวณก้น เกาะพื้นไว้ให้มั่นคง เพื่อไม่ให้ลำตัวเลื่อนขยับไปจากตำแหน่งเดิม
                    เหยียดขาตรงยกลอยขึ้นจากพื้นเล็กน้อย เป็นท่าเตรียมฝึกท่า Leg Pull-In On The Floor <br/>
                    1. เริ่มจากการสูดลมหายใจเข้าจนสุด จากนั้นออกแรงเกร็งกล้ามเนื้อหน้าท้องเพื่อดึงหัวเข่าเข้าหาหน้าอก
                    ในขณะเดียวกันให้ขยับหน้าอกเข้าหาหัวเข่า พร้อมกับปล่อยลมหายใจออกจนสุด <br/>
                    2. คค่อยๆ คลายกล้ามเนื้อหน้าท้องออก ลดขาลงและถอยลำตัวช่วงบนกลับสู่ท่าเตรียม
                    พร้อมกับสูดลมหายใจเข้าจนสุด นับเป็น 1 ครั้ง <br/>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Knee_pull;
