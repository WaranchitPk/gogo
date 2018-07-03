import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import PR from '../../../asset/exercise/back/Pendlay_Row.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Pendlay_Row = () => (
    <div>
        <Typography variant='headline' align='center'>
            Pendlay Row
        </Typography>
        <Typography variant='title' align='center'>
            6-8 ครั้ง / 3-4 เซ็ท
        </Typography>
        <img src={PR} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เริ่มจากยืนโน้มตัวลงไปข้างหน้า แล้วจับบาร์เบลไว้ พร้อมวางเท้าให้ห่างกันพอประมาณ
                    จากนั้นให้ดึงบาร์เบลขึ้นมาอยู่ที่ระดับหน้าขาแล้วผ่อนลงกลับสู่ท่าเริ่มต้น
                    จึงนับเป็น 1 ครั้ง
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Pendlay_Row;
