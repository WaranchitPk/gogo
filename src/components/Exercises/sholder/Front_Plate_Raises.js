import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import FPR from '../../../asset/exercise/sholder/Front_Plate.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Front_Plate_Raises = () => (
    <div>
        <Typography variant='headline' align='center'>
            Front Plate Raises
        </Typography>
        <Typography variant='title' align='center'>
            15 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={FPR} style={{width: '158%', marginLeft: '-22%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เสริมสร้างกล้ามไหล่ส่วนหน้าด้วยท่ายกแผ่นหล็กนี้
                    เริ่มต้นด้วยการถือแผ่นเหล็กยกน้ำหนักทั้งสองข้างและปล่อยมือลงไปด้านหน้าในระดับเอว
                    จากนั้นยกขึ้นมาในระดับสายตา แล้วจึงปล่อยมือลงในระดับเอวเช่นเดิม
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Front_Plate_Raises;
