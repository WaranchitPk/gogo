import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import CF from '../../../asset/exercise/chest/cable fly.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Cable = () => (
    <div>
        <Typography variant='headline' align='center'>
            Cable Fly
        </Typography>
        <Typography variant='title' align='center'>
            15 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={CF} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เป็นการบริหารกล้ามเนื้ออกส่วนบน<br/>
                    1. ยกตัวให้ลอยบนบาร์คู่ เหยียดแขนจนตึง แต่ไม่ล็อกข้อศอก แอ่นอก <br/>
                    2. ค่อยๆลดลำตัวลง ในลักษณะที่ศอกกางออกไปทางด้านข้างลำตัว
                    จนกล้ามเนื้ออกถูกเหยียดสุด <br/>
                    3. หายใจเข้า และออกแรงเกร็งกล้ามเนื้ออก จากนั้นยกตัวขึ้นเพื่อกลับสู่ท่าเตรียม
                    จึงปล่อยลมหายใจ<br/>
                    4. ทุกกระบวนการให้นับเป็น 1 ครั้ง ทำ 8-12 ครั้ง ต่อ 1 เซ็ท ให้ทำ 4 เซ็ท
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Cable;
