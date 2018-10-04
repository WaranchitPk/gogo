import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import KW from '../../../asset/exercise/back/Kettlebell_Swing.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Kettlebell_Swing = () => (
    <div>
        <Typography variant='headline' align='center'>
            Kettlebell Swing
        </Typography>
        <Typography variant='title' align='center'>
            8-12 ครั้ง / 4 เซ็ท
        </Typography>
        <img src={KW} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    จัดท่าเตรียมสำหรับฝึกท่า Kettlebell Swing ด้วยการยืนตัวตรงและวางเท้าให้ห่างกันพอประมาณ
                    พร้อมใช้มือทั้งสองข้างจับเคตเทิลเบลไว้ เมื่อพร้อมแล้วให้เหวี่ยงลูกบอลขึ้น-ลง ฝึกไปเรื่อย ๆ
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Kettlebell_Swing;
