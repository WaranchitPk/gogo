import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import CGBBP from '../../../asset/exercise/arms/Close-Grip_Barbell_Bench_Press.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Close_Grip_Barbell_Bench_Press = () => (
    <div>
        <Typography variant='headline' align='center'>
            Close-Grip Barbell Bench Press
        </Typography>
        <Typography variant='title' align='center'>
            12 ครั้ง / 4 เซ็ท
        </Typography>
        <img
            src={CGBBP}
            style={{
            width: '90%'
        }}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    จัดท่าเตรียมในการฝึกท่านี้ด้วยการนอนหงายลงบนม้านั่งออกกำลังโดยให้เท้าแตะพื้น
                    ส่วนมือทั้งสองข้างจับบาร์เบลโดยวางมือให้ห่างกันเล็กน้อย
                    เมื่อพร้อมแล้วให้ออกแรงดันบาร์เบลขึ้น-ลงช้า ๆ จนสุดแขน นับเป็น 1 ครั้ง
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Close_Grip_Barbell_Bench_Press;
