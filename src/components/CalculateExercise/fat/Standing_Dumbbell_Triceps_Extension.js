import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import SDTE from '../../../asset/exercise/arms/Standing_Dumbbell_Triceps_Extension.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SC from "../../../asset/exercise/belly/spider-crawl.jpg";

const Standing_Dumbbell_Triceps_Extension = () => (
    <div>
        <Typography variant='headline' align='center'>
            Standing Dumbbell Triceps Extension
        </Typography>
        <Typography variant='title' align='center'>
            8 - 12 ครั้ง / 4 เซ็ท
        </Typography>
      <Typography align="center">
        <img src={SDTE} style={{ width: '40%' }}/>
      </Typography>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เริ่มด้วยการยืนตัวตรงและวางเท้าให้ห่างกันเล็กน้อย
                    ส่วนมือทั้งสองข้างจับดัมเบลไว้โดยที่แขนเหยียดตรง ต่อมาค่อย ๆ งอศอกลง
                    กระทั่งดัมเบลเคลื่อนมาอยู่ที่ระดับศีรษะ แล้วจึงดันกลับขึ้นสู่ท่าเตรียม
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Standing_Dumbbell_Triceps_Extension;
