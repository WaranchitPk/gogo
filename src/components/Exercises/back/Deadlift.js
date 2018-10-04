import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import DL from '../../../asset/exercise/back/Deadlift.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Deadlift = () => (
    <div>
        <Typography variant='headline' align='center'>
            Deadlift
        </Typography>
        <Typography variant='title' align='center'>
            5 ครั้ง / 5 เซ็ท
        </Typography>
        <img src={DL} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    สำหรับการฝึก Deadlift ยังคงใช้บาร์เบลและจัดท่าเตรียมเหมือนเดิมอยู่ โดยวางมือให้ความกว้างเท่าหัวไหล่
                    แล้วออกแรงดึงบาร์เบลขึ้นพร้อมยืนตัวตรง จากนั้นลดระดับบาร์เบลลงพื้นช้า ๆ นับเป็น 1 ครั้ง
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Deadlift;
