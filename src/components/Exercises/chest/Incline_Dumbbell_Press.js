import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import IDP from '../../../asset/exercise/chest/incline_dumbbell_press.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Incline_Dumbbell = () => (
    <div>
        <Typography variant='headline' align='center'>
            Incline Dumbbell Press
        </Typography>
        <Typography variant='title' align='center'>
            15 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={IDP} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    1. นอนหงายหน้าบนม้านั่งโดยบริเวณหัวจะเกือบเลยม้านั่งเล็กน้อย <br/>
                    2. ยกดัมเบลขึ้น ให้อยู่บริเวณด้านหน้า แขนตึง ไม่ล็อคข้อศอก นี่คือท่าเตรียม <br/>
                    3. ลดดัมเบลไปด้านหลังอย่างช้าๆ จนสุดแขน และแขนยังคงเหยียดตึง
                    พร้อมสูดลมหายใจ <br/>
                    4. จากนั้นจึงเริ่มออกแรงเกร็งกล้ามเนื้อหน้าอกเพื่อยกดัมเบลขึ้น
                    เป็นการกลับสู่ท่าเตรียม ผ่อนลมหายใจ
                    5. ทุกกระบวนการให้นับเป็น 1 ครั้งทำ 10 ครั้ง ต่อ 1 เซ็ท ให้ทำ 3 เซ็ท
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Incline_Dumbbell;
