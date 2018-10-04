import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import SC from '../../../asset/exercise/belly/spider-crawl.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PR from "../../../asset/exercise/back/Pendlay_Row.jpg";

const Spider_crawl = () => (
    <div>
        <Typography variant='headline' align='center'>
            Spider crawl
        </Typography>
        <Typography variant='title' align='center'>
            20-30 ครั้ง / 3 เซ็ท
        </Typography>
      <Typography align="center">
        <img src={SC} style={{width: '40%'}}/>
      </Typography>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    การฝึกด้วยท่า Spider Crawl เริ่มต้นจากการนอนคว่ำหน้าลงบนพื้น
                    จากนั้นใช้มือดันตัวขึ้นโดยให้ต้นแขนกับแขนท่อนปลายทำมุมตั้งฉากกัน ในลักษณะท่าวิดพื้นท่าเตรียม
                    ขาเหยียดตรง ยกสะโพกขึ้น เป็นท่าเตรียมฝึกท่า Spider Crawl<br/>
                    1. เริ่มต้นด้วยการสูดลมหายใจเข้าจนสุด จากนั้นออกแรงเกร็งกล้ามเนื้อหน้าท้อง ดึงหัวเข้าพุ่งเข้ามา
                    ให้อยู่เหนือข้อศอก พร้อมกับปล่อยลมหายใจออกจนสุด <br/>
                    2. ค่อยๆลดลำตัวลง ในลักษณะที่ศอกกางออกไปทางด้านข้างลำตัว
                    จนกล้ามเนื้ออกถูกเหยียดสุด <br/>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Spider_crawl;
