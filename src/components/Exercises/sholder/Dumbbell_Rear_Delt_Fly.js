import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import DDF from '../../../asset/exercise/sholder/Dumbbell_Rear.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Dumbbell_Rear_Delt_Fly = () => (
    <div>
        <Typography variant='headline' align='center'>
            Dumbbell Rear Delt Fly
        </Typography>
        <Typography variant='title' align='center'>
            8-12ครั้ง / 4 เซ็ท
        </Typography>
        <img src={DDF} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เมื่อได้ไหล่หน้าก็ไม่ควรลืมไหล่หลัง
                    ซึ่งคุณสามารถออกกำลังกายกล้ามเนื้อไหล่ส่วนหลังแบบจัดเต็มได้ด้วยท่านี้
                    เริ่มต้นด้วยการโน้มตัวไปข้างหน้าโดยรักษาระดับแผ่นหลังให้ขนานไปกับพื้น
                    มือทั้งสองถือดัมเบลเหยียดตรงลงไปที่พื้น จากนั้นจึงยกแขนกางออกให้สูงกว่าหัวไหล่อย่างช้า ๆ แล้วจึงค่อย
                    ๆ เอาลง นับเป็น 1 ครั้ง
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Dumbbell_Rear_Delt_Fly;
