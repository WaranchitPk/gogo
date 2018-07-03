import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import TDK from '../../../asset/exercise/arms/Tricep_Dumbbell_Kickback.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Tricep_Dumbbell_Kickback = () => (
    <div>
        <Typography variant='headline' align='center'>
            Tricep Dumbbell Kickback
        </Typography>
        <Typography variant='title' align='center'>
            12 ครั้ง / 4 เซ็ท
        </Typography>
        <img
            src={TDK}
            style={{
            width: '100%'
        }}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เริ่มจากวางเข่าและมือซ้ายลงบนม้านั่งโดยโน้มตัวไปด้านหน้าพอประมาณ
                    ขณะที่เท้าขวาเหยียบพื้นและมือขวาจับดัมเบลไว้ จากนั้นยกดัมเบลไปด้านหลังช้า ๆ
                    แล้วดึงกลับ ทำทั้งหมด 4 เซต เซตละ 12 ครั้ง แล้วจึงสลับไปทำอีกข้าง
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Tricep_Dumbbell_Kickback;
