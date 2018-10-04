import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import DSC from '../../../asset/exercise/arms/Dumbbell_Skull_Crusher.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Dumbbell_Skull_Crusher = () => (
    <div>
        <Typography variant='headline' align='center'>
            Dumbbell Skull Crusher
        </Typography>
        <Typography variant='title' align='center'>
            12 ครั้ง / 4 เซ็ท
        </Typography>
        <img src={DSC} style={{
            width: '100%'
        }}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    นอนหงายลงบนม้านั่งออกกำลัง
                    ขณะที่มือทั้งสองข้างจับดัมเบลไว้พร้อมเหยียดแขนขึ้นให้สุด
                    จากนั้นให้งอข้อศอกลงมาช้า ๆ จนดัมเบลลงมาอยู่ที่ระดับหู
                    แล้วดันแขนขึ้นเพื่อกลับสู่ท่าเริ่มต้น นับเป็น 1 ครั้ง
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Dumbbell_Skull_Crusher;
