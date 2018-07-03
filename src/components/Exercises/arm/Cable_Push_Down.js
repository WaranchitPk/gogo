import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import CPD from '../../../asset/exercise/arms/Cable_Push_Down.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Cable_push = () => (
    <div>
        <Typography variant='headline' align='center'>
            Cable Push Down
        </Typography>
        <Typography variant='title' align='center'>
            8-12 ครั้ง / 4 เซ็ท
        </Typography>
        <img src={CPD} style={{
            width: '100%'
        }}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    สำหรับการฝึกท่า Cable Push Down
                    ให้จัดท่าเตรียมโดยการยืนโน้มตัวไปด้านหน้าเล็กน้อย
                    แล้วใช้มือทั้งสองข้างจับสายเคเบิลไว้ วางเท้าให้ชิดกัน จากนั้นดึงสายเคเบิลลงช้า ๆ
                    จนแขนเหยียดตึง แล้วค่อย ๆ ผ่อนแขนกลับมาสู่ท่าเริ่มต้น นับเป็น 1 ครั้ง
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Cable_push;
