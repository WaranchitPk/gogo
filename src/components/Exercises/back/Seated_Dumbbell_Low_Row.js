import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import SDLR from '../../../asset/exercise/back/Seated_Dumbbell_Low_Row.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Seated_Dumbbell_Low_Row = () => (
    <div>
        <Typography variant='headline' align='center'>
            Seated Dumbbell Low Row
        </Typography>
        <Typography variant='title' align='center'>
            6-8 ครั้ง / 3-4 เซ็ท
        </Typography>
        <img src={SDLR} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เริ่มด้วยการนั่งบนม้านั่งพร้อมใช้มือทั้งสองข้างจับดัมเบลไว้ ขณะเดียวกันให้โน้มตัวไปด้านหน้าเล็กน้อย
                    จากนั้นดึงดัมเบลขึ้นจนรู้สึกตึงที่กล้ามเนื้อหลัง แล้วจึงค่อย ๆ ผ่อนลง
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Seated_Dumbbell_Low_Row;
