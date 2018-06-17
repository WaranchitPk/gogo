import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import PushUp_Pic from '../../../asset/exercise/chest/Push Up.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PushUp = () => (
    <div>
        <Typography variant='headline' align='center'>
            Push Up
        </Typography>
        <Typography variant='title' align='center'>
            15-20 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={PushUp_Pic} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    ท่านี้นอกจากจะได้อก ยังช่วยสร้างกล้ามเนื้อหลังแขน <br/>
                    1. เหยียดลำตัวให้ตรง แขนเหยียดตรง โดยให้ไหล่ แขน และมือ อยู่ในแนวเดียวกัน
                    ฝ่าเท้าตั้งฉากกับพื้นทั้งคู่ ให้ตั้งแขนแบบหุบแขนเข้าดังภาพ <br/>
                    2. ย่อตัวลงช้าๆ ห้ามหลังแอ่น ให้ระยะหน้าอกห่างพื้นประมาณ 10 ซม. ไม่ต้องติดพื้น
                    จากนั้นค่อยๆยกตัวขึ้น <br/>
                    3. หายใจเข้าตอนหย่อนตัว หายใจออกตอนยกตัว<br/>
                    4. ทำ 15-20 ครั้ง ใน 3 เซ็ท
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default PushUp;
