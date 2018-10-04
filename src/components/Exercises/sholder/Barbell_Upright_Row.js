import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import BUR from '../../../asset/exercise/sholder/Barbell_Upright.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Barbell_Upright_Row = () => (
    <div>
        <Typography variant='headline' align='center'>
            Barbell Upright Row
        </Typography>
        <Typography variant='title' align='center'>
            8-12 ครั้ง / 4 เซ็ท
        </Typography>
        <img src={BUR} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เสริมกล้ามเนื้อไหล่วนหน้าให้ฟิตเปรี๊ยะสุด ๆ ต้องท่านี้เลย
                    เริ่มต้นด้วยการถือบาร์เบลทั้งสองข้างโดยคว่ำมือและถือให้อยู่ในระดับเอว
                    จากนั้นจึงออกแรงหัวไหล่ยกบาร์เบลขึ้นมาให้ถึงบริเวณใต้คาง ทำท่านี้ประมาณ 12-15
                    ครั้งแล้วจึงเริ่มท่าต่อไป แล้วอย่าลืมเลือกน้ำหนักบาร์เบลที่พอดีด้วยนะครับ
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Barbell_Upright_Row;
