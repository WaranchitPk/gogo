import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import DSP from '../../../asset/exercise/sholder/Dumbell_Sholder.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DDF from "../../../asset/exercise/chest/Decline Dumbbell Fly.png";

const Dumbbell_Shoulder_Press = () => (
    <div>
        <Typography variant='headline' align='center'>
            Dumbbell_Shoulder_Press
        </Typography>
        <Typography variant='title' align='center'>
            8-12 ครั้ง / 3 เซ็ท
        </Typography>
      <Typography align="center">
        <img src={DSP} style={{width: '61%'}}/>
      </Typography>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    ท่านี้จะใช้กล้ามเนื้อทั้งหมดของหัวไหล่ โดยเฉพาะส่วนหน้า ทำให้กล้ามดูสวยงามอย่างรวดเร็ว
                    เริ่มต้นด้วยการถือดัมเบลที่มีน้ำหนักพอดีด้วยมือทั้งสองข้าง
                    ยกดัมเบลให้อยู่เหนือหัวไหล่เล็กน้อยเป็นท่าเตรียม จากนั้นจึงออกแรงยกดัมเบลขึ้นสูงแล้วจึงลดแขนลงมา
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Dumbbell_Shoulder_Press;
