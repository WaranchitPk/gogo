import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import FEBD from '../../../asset/exercise/arms/Feet_Elevated_Bench_Dip.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Feet_elevated = () => (
    <div>
        <Typography variant='headline' align='center'>
            Feet Elevated Bench Dip
        </Typography>
        <Typography variant='title' align='center'>
            8-12 ครั้ง / 4 เซ็ท
        </Typography>
        <img src={FEBD} style={{
            width: '100%'
        }}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    จัดท่าเตรียมสำหรับท่านี้ด้วยการนั่งบนม้านั่งออกกำลัง
                    พร้อมวางมือบนเบาะเพื่อยึดเก้าอี้ไว้
                    แล้ววางเท้าทั้งสองข้างบนกล่องหรือม้านั่งอีกตัว
                    เมื่อพร้อมแล้วให้หย่อนตัวลงมาจากม้านั่ง จนก้นเกือบจะแตะพื้น
                    แล้วคุณจะรู้สึกตึงที่หลังแขน
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Feet_elevated;
