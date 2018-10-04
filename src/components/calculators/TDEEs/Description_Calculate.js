import React from 'react';
import {
    ExpansionPanelSummary,
    ExpansionPanel,
    ExpansionPanelDetails,
    Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const DescriptionCalculator = () => (
    <div>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    <Typography variant='subheading'>BMR (Basal Metabolic Rate) หมายถึง:</Typography>
                    ค่าพลังงานที่ร่างกายต้องการเพื่อที่จะทำให้กระบวนการพื้นฐานเพื่อการดำรงชีวิต เช่น
                    การหายใจ การไหลเวียนโลหิต ในขณะที่พักอยู่เฉยๆ ดำเนินไปได้
                    <hr/>
                    <Typography variant='subheading'>TDEE (Total Daily Energy Expenditure)
                        หมายถึง:</Typography>
                    ค่าของพลังงานที่ใช้ทั้งหมดในแต่ละวัน เมื่อมีการทำกิจกรรมต่างๆ
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default DescriptionCalculator;
