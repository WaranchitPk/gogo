import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import CSR from '../../../asset/exercise/back/Cable_Seated_Row.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BDL from "../../../asset/exercise/legs/Barbell_Deadlift.jpg";

const Cable_Seated_Row = () => (
    <div>
        <Typography variant='headline' align='center'>
            Cable Seated Row
        </Typography>
        <Typography variant='title' align='center'>
            6-10 ครั้ง / 4 เซ็ท
        </Typography>
      <Typography align="center">
        <img src={CSR} style={{width: '65%'}}/>
      </Typography>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เริ่มด้วยการนั่งตัวตรงบนเครื่องออกกำลังแล้วจับสายเคเบิลไว้ ต่อมาให้ดึงเคเบิลไปที่ด้านข้างลำตัวช้า ๆ
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Cable_Seated_Row;
