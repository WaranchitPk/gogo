import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import BS from '../../../asset/exercise/legs/Barbell_Squat.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Barbell_Squat = () => (
    <div>
        <Typography variant='headline' align='center'>
            Barbell Squat
        </Typography>
        <Typography variant='title' align='center'>
            8-12 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={BS} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เริ่มจากยืนแบกบาร์เบลพาดหลังไว้ พร้อมแยกเท้าให้กว้างพอประมาณ จากนั้นค่อย ๆ
                    ย่อตัวลงให้ต่ำที่สุดเท่าที่ทำได้ในท่าสควอท แล้วค่อย ๆ ลุกขึ้นยืนตรงเหมือนท่าเริ่มต้น
                    โดยวิธีนี้นอกจากจะช่วยบริหารกล้ามเนื้อขาได้ดีแล้ว ยังเสริมความแข็งแรงให้กับสะโพกและเอ็นร้อยหวายด้วย
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Barbell_Squat;
