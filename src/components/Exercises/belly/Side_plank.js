import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import SP from '../../../asset/exercise/belly/Side_plank.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Side_plank = () => (
    <div>
        <Typography variant='headline' align='center'>
            Dips For Chest
        </Typography>
        <Typography variant='title' align='center'>
            8-12 ครั้ง / 4 เซ็ท
        </Typography>
        <img src={SP} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    การฝึกด้วยท่า Side Plank เริ่มต้นจากการนอนตะแคงลงบนพื้นราบ โดยให้ฝั่งที่ต้องการจะฝึกอยู่ด้านบน
                    เอามือข้างที่อยู่ด้านบนวางไว้บริเวณท้ายทอย เป็นท่าเตรียมฝึกท่า Side Plank <br/>
                    1. เริ่มจากการใช้ศอกดันลำตัวขึ้น โดยไม่ให้สะโพกตก จะสังเกตได้ว่า ลำตัวจะทำแนวเป็นเส้นตรง
                    เกร็งค้างไว้ ให้นานที่สุดเท่าที่จะทำได้<br/>
                    2. ค่อยๆ คลายกล้ามเนื้อหน้าท้องออก ลดลำตัวลงกลับสู่ท่าเตรียม จากนั้นสลับไปทำอีกข้าง นับเป็น 1 เซท
                    *ให้หายใจปกติระหว่างการฝึกด้วยท่า Side Plank <br/>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Side_plank;
