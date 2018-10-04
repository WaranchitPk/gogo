import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import DFC from '../../../asset/exercise/chest/dips_for_chest.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Dip_For_Chest = () => (
    <div>
        <Typography variant='headline' align='center'>
            Dips For Chest
        </Typography>
        <Typography variant='title' align='center'>
            8-12 ครั้ง / 4 เซ็ท
        </Typography>
        <img src={DFC} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    1. นอนบนเบาะที่ถูกปรับระดับให้เอียงแล้วประมาณ 45 องศา
                    ถือดัมเบลล์ในมือไว้ข้างละตัว<br/>
                    2. ดันดัมเบลล์ขึ้นในลักษณะแขนตึง แต่ไม่ล็อคข้อศอก
                    ในลักษณะแขนตึง เป็นการเตรียมท่าฝึก <br/>
                    3. ค่อยๆคลายกล้ามเนื้ออก งอแขน
                    ลดดัมเบลลงจนกล้ามเนื้ออกถูกเหยียดตัวจนสุดพิสัย <br/>
                    4. เริ่มออกแรงเกร็งกล้ามเนื้ออกเพื่อยกดัมเบลล์ขึ้นจนสุด เพื่อกลับสู่ท่าเตรียม
                    5. ทุกกระบวนการให้นับเป็น 1 ครั้งทำ 15 ครั้ง ต่อ 1 เซ็ท ให้ทำ 3 เซ็ท
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Dip_For_Chest;
