import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import DDF from '../../../asset/exercise/chest/Decline Dumbbell Fly.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Decline_Dumbbell = () => (
    <div>
        <Typography variant='headline' align='center'>
            Decline Dumbbell Fly
        </Typography>
        <Typography variant='title' align='center'>
            6-10 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={DDF} style={{width: '77%', marginLeft: '12%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    1. ตั้งท่าวิดพื้น โดยพาดแผ่นยางสร้างแรงต้านไว้ที่หลัง
                    และกดปลายข้างไว้ใต้ฝ่ามือในแต่ละข้าง <br/>
                    2. เริ่มฝึกด้วยท่าวิดพื้น โดยการย่อตัวลงช้าๆ ห้ามหลังแอ่น
                    ให้ระยะหน้าอกห่างพื้นประมาณ 10 ซม. ไม่ต้องติดพื้น จากนั้นค่อยๆยกตัวขึ้น <br/>
                    3. หายใจเข้าตอนหย่อนตัว หายใจออกตอนยกตัว<br/>
                    4. ทำ 6-10 ครั้ง ใน 3 เซ็ท
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Decline_Dumbbell;
