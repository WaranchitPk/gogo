import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import Barbell_Pic from '../../../asset/exercise/chest/Barbell Bench Press.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DDF from "../../../asset/exercise/chest/Decline Dumbbell Fly.png";

const Barbell = () => (
    <div>
        <Typography variant='headline' align='center'>
            Barbell Bench Press
        </Typography>
        <Typography variant='title' align='center'>
            8-12 ครั้ง / 3 เซ็ท
        </Typography>
      <Typography align="center">
        <img src={Barbell_Pic} style={{width: '50%'}}/>
      </Typography>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    ท่านี้นอกจากจะได้อก ยังช่วยสร้างกล้ามเนื้อหลังแขน <br/>
                    1. เริ่มต้นจากการนอนหงายหน้าลงบนเบาะ วางเท้าติดกับพื้น <br/>
                    2. จับบาร์เบลด้วยความกว้างกว่าหัวไหล่เล็กน้อย จากน้นยกบาร์เบลออกจากที่พัก
                    ในลักษณะแขนตึง เป็นการเตรียมท่าฝึก <br/>
                    3. ค่อยๆคลายกล้ามเนื้ออกออก และผ่อนบาร์เบลเข้าหาอกช้าๆ (1-2 วิ)
                    จนบาร์เบลแตะอก <br/>
                    4. ออกแรงดันบาร์ขึ้นตรงๆ จนสุด จึงนับเป็น 1 ครั้ง ให้ฝึก 8-12 ครั้งต่อ 1 เซ็ท
                    ทำทั้งหมด 3 เซ็ท
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Barbell;
