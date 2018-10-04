import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import crunch from '../../../asset/exercise/belly/crunch.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Crunch = () => (
    <div>
        <Typography variant='headline' align='center'>
            Crunch
        </Typography>
        <Typography variant='title' align='center'>
            8-12 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={crunch} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    การฝึกด้วยท่า Crunch เริ่มต้นจากการนอนหงายหน้าราบลงบนพื้น นำมือมาประสานกันไว้ที่ท้ายทอย
                    วางเท้าสองข้างห่างกันประมาณหัวไหล่ ตั้งเข่าชันขึ้นมา เป็นท่าเตรียมฝึกท่า Crunch <br/>
                    1.เริ่มจากการสูดลมหายใจเข้าจนสุด จากนั้นออกแรงเกร็งกล้ามเนื้อหน้าท้องเพื่อยกลำตัวส่วนบนขึ้น
                    โดยไม่ให้หลังล่างยกขึ้นจากพื้น พร้อมกับปล่อยลมหายใจออกจนสุด<br/>
                    2.ค่อยๆ คลายกล้ามเนื้อหน้าท้องออก ลดลำตัวช่วงบนลงกลับไปสู่ท่าเตรียม
                    พร้อมกับสูดลมหายใจเข้าจนสุดนับเป็น 1 ครั้ง<br/>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Crunch;
