import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import SJ from '../../../asset/exercise/legs/Squat_Jump.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Squat_Jump = () => (
    <div>
        <Typography variant='headline' align='center'>
            Squat Jump
        </Typography>
        <Typography variant='title' align='center'>
            15 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={SJ} style={{width: '158%', marginLeft: '-22%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    สำหรับการฝึกท่า Squat Jump จะช่วยเสริมความฟิตให้กล้ามเนื้อส่วนล่าง ทั้งสะโพก ขา และข้อเท้า
                    โดยเริ่มต้นด้วยการยืนตัวตรงแยกเท้าให้กว้างเท่าหัวไหล่ ย่อตัวลงในท่าสควอท
                    จากนั้นยกตัวขึ้นและกระโดดกลับสู่ท่าเตรียม
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Squat_Jump;
