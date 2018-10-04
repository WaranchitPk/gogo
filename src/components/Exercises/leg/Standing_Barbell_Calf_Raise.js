import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import SBCR from '../../../asset/exercise/legs/Standing_Barbell_Calf_Raise.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Standing_Barbell_Calf_Raise = () => (
    <div>
        <Typography variant='headline' align='center'>
            Standing Barbell Calf Raise
        </Typography>
        <Typography variant='title' align='center'>
            6-10 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={SBCR} style={{width: '77%', marginLeft: '12%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    สำหรับท่านี้ต้องใช้อุปกรณ์เสริมมาช่วยในการฝึก ซึ่งจะเป็นแผ่นไม้ ก้อนอิฐ หรือพื้นต่างระดับก็ได้
                    แล้วยืนบนอุปกรณ์นั้น ๆ พร้อมยกบาร์เบลขึ้นมาพักไว้ที่ด้านหลังหัวไหล่
                    จากนั้นยกส้นเท้าขึ้นและทำค้างไว้ประมาณ 1-2 วินาทีแล้วกลับสู่ท่าเริ่มต้น
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Standing_Barbell_Calf_Raise;
