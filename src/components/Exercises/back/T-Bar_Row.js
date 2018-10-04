import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import TBR from '../../../asset/exercise/back/T-Bar_Row.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const T_Bar_Row = () => (
    <div>
        <Typography variant='headline' align='center'>
            T-Bar Row
        </Typography>
        <Typography variant='title' align='center'>
            6-8 ครั้ง / 3-4 เซ็ท
        </Typography>
        <img src={TBR} style={{width: '158%', marginLeft: '-22%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    จัดท่าเตรียมในการฝึกท่านี้ด้วยการยืนคร่อมบาร์เบลไว้ โดยให้บาร์เบลอยู่ใต้หว่างขา
                    โน้มตัวไปด้านหน้าเล็กน้อยแล้วใช้มือทั้งสองข้างจับบาร์เบลไว้ จากนั้นออกแรงดึงบาร์เบลขึ้นสุดลงสุด
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default T_Bar_Row;
