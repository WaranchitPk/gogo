import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import PS from '../../../asset/exercise/legs/Pistol_Squat.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Pistol_Squat = () => (
    <div>
        <Typography variant='headline' align='center'>
            Pistol Squat
        </Typography>
        <Typography variant='title' align='center'>
            5-8 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={PS} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    จัดท่าเตรียมสำหรับท่า Pistol Squat ด้วยการยืนตัวตรงพร้อมกับเหยียดขาขวาไปข้างหน้าและค้างไว้
                    จากนั้นค่อย ๆ ย่อตัวลงจนสุดและกลับสู่ท่าเตรียม แล้วทำสลับข้าง
                    ซึ่งท่านี้ไม่เพียงแต่จะเสริมความแข็งแรงให้กล้ามเนื้อขาและสะโพกเท่านั้น
                    ทว่ายังช่วยสร้างความสมดุลให้ร่างกายอีกด้วย
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Pistol_Squat;
