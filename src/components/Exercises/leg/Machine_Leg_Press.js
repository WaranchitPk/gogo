import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import MLP from '../../../asset/exercise/legs/Machine_Leg_Press.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Machine_Leg_Press = () => (
    <div>
        <Typography variant='headline' align='center'>
            Machine Leg Press
        </Typography>
        <Typography variant='title' align='center'>
            15 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={MLP} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    การฝึกท่านี้จะเน้นสร้างความฟิตและช่วยให้กล้ามเนื้อต้นขากระชับได้เป็น อย่างดี
                    เริ่มจากจัดท่าเตรียมโดยการนั่งที่เครื่องออกกำลังกาย วางเท้าทั้งสองข้างไว้ที่แผ่นเหยียบ
                    ปล่อยแขนไว้ด้านข้างลำตัว ออกแรงเหยียดขาให้สุดและกลับสู่ท่าเตรียม
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Machine_Leg_Press;
