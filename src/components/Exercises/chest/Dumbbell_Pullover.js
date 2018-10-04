import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import DP from '../../../asset/exercise/chest/dumbbbell_pullover.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Dumbbell = () => (
    <div>
        <Typography variant='headline' align='center'>
            Dumbbell Pullover
        </Typography>
        <Typography variant='title' align='center'>
            10 ครั้ง / 3 เซ็ท
        </Typography>
        <img src={DP} style={{width: '156%', height: '-8%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เป็นการบริหารกล้ามเนื้ออกส่วนบน <br/>
                    1. นอนหงายลงบนเบาะ จับดัมเบลยกขึ้นโดยหันผ่ามือทั้งสองข้างเข้าหากัน <br/>
                    2. ค่อยๆคลายกล้ามเนื้ออก หมุนแขนในลักษณะครึ่งวงกลม
                    จนกล้ามเนื้ออกถูกเหยียดจนสุดพิสัย <br/>
                    3. ให้ออกแรงเกร็งกล้ามเนื้ออกแล้วลดระดับดัมเบลลงมาให้อยู่เหนืออกเล็กน้อย
                    และปล่อยลมหายใจ<br/>
                    4. ทุกกระบวนการให้นับเป็น 1 ครั้ง ทำ 6-10 ครั้ง ต่อ 1 เซ็ท ให้ทำ 3 เซ็ท
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Dumbbell;
