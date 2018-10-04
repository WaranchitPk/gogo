import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import LE from '../../../asset/exercise/legs/Leg_Extension.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Leg_Extension = () => (
    <div>
        <Typography variant='headline' align='center'>
            Leg Extension
        </Typography>
        <Typography variant='title' align='center'>
            8-12 ครั้ง / 4 เซ็ท
        </Typography>
        <img src={LE} style={{width: '100%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    เริ่มจากนั่งบนม้านั่งพร้อมสอดเท้าไว้ใต้บาร์
                    จากนั้นเกร็งต้นขาพร้อมกับออกแรงยกบาร์ขึ้นจนขาเหยียดตรงและผ่อนลงช้า ๆ ให้เป็นจังหวะ
                    โดยท่านี้จะเน้นสร้างกล้ามเนื้อต้นขาให้แข็งแรงได้นั่นเอง
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

export default Leg_Extension;
