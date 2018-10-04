import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import NGPU from '../../../asset/exercise/arms/Narrow_Grip_Push-Up.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Narrow = () => (
    <div>
        <Typography variant='headline' align='center'>
            Narrow Grip Push-Up
        </Typography>
        <Typography variant='title' align='center'>
            12 ครั้ง / 4 เซ็ท
        </Typography>
        <img
            src={NGPU}
            style={{
            width: '100%'
        }}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เริ่มจากจัดท่าเตรียมในท่าวิดพื้น
                    แต่คราวนี้ให้วางมือทั้งสองข้างให้อยู่ใกล้กันมากที่สุด
                    เมื่อพร้อมแล้วก็ทำท่าวิดพื้นแบบขึ้นสุดลงสุดให้เป็นจังหวะ โดยระหว่างฝึกนั้น
                    ช่วงลำตัวไปถึงขาควรเหยียดตรงตลอดด้วย
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Narrow;
