import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import BDL from '../../../asset/exercise/legs/Barbell_Deadlift.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Barbell_Pic from "../../../asset/exercise/chest/Barbell Bench Press.png";

const Barbell_Deadlift = () => (
    <div>
        <Typography variant='headline' align='center'>
            Barbell Deadlift
        </Typography>
        <Typography variant='title' align='center'>
            15-20 ครั้ง / 3 เซ็ท
        </Typography>
      <Typography align="center">
        <img src={BDL} style={{width: '59%'}}/>
      </Typography>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    ยืนตัวตรงให้เท้าห่างกันเล็กน้อย ปล่อยแขนไปตามธรรมชาติและจับบาร์เบลให้อยู่ในระดับต้นขา
                    จากนั้นย่อตัวลงไปจนบาร์เบลเกือบสัมผัสพื้น โดยท่า Barbell Deadlift จะช่วยให้กล้ามเนื้อหลายส่วนฟิต
                    แอนด์ เฟิร์มไปพร้อม ๆ กัน เช่น ขา แผ่นหลังส่วนกลางและล่าง รวมถึงสะโพกด้วย
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Barbell_Deadlift;
