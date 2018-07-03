import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import IR from '../../../asset/exercise/back/Inverted_Row.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Inverted_Row = () => (
    <div>
        <Typography variant='headline' align='center'>
            Inverted Row
        </Typography>
        <Typography variant='title' align='center'>
            8 ครั้ง / 4 เซ็ท
        </Typography>
        <img src={IR} style={{width: '156%', height: '-8%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เริ่มจากปรับระดับบาร์ให้เหมาะสมก่อน แล้วสอดตัวลงไปนอนใต้บาร์พร้อมจับบาร์ไว้ โดยวางมือห่างกันเล็กน้อย
                    จากนั้นดึงตัวขึ้น-ลงช้า ๆ ให้เป็นจังหวะ
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Inverted_Row;
