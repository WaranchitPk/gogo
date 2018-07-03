import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import DL from '../../../asset/exercise/legs/Dumbbell_Lunge.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Dumbbell_Lunge = () => (
    <div>
        <Typography variant='headline' align='center'>
            Dumbbell Lunge
        </Typography>
        <Typography variant='title' align='center'>
            10 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={DL} style={{width: '156%', height: '-8%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    ยืนตัวตรงเท้าชิดและจับดัมเบลไว้ที่ด้านข้างลำตัว
                    ก้าวเท้าขวาไปข้างหน้าพร้อมย่อตัวลงไปพร้อมเปิดส้นเท้าหลัง แล้วดึงตัวกลับสู่ท่าเริ่มต้นและฝึกสลับข้าง
                    เพียงเท่านี้กล้ามเนื้อขาก็จะแข็งแรงขึ้นได้แล้ว
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Dumbbell_Lunge;
