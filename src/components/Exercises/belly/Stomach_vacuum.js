import React from 'react';
import {Typography, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import SV from '../../../asset/exercise/belly/Stomach_vacuum.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Stomach_vacuum = () => (
    <div>
        <Typography variant='headline' align='center'>
            Stomach vacuum
        </Typography>
        <Typography variant='title' align='center'>
            45-60 นาที / 3 เซ็ท
        </Typography>
        <img src={SV} style={{width: '77%', marginLeft: '12%'}}/>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='subheading'>คำอธิบาย</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant='body1'>
                    การฝึกด้วยท่า Stomach Vacuum เริ่มต้นจากการยืนตรง วางเท้าทั้งสองข้างให้กว้างประมาณหัวไหล่
                    วางแขนไว้ข้างสะโพก เป็นท่าเตรียมฝึกท่า Stomach Vacuum <br/>
                    1. เริ่มต้นด้วยการสูดลมหายใจเข้าจนสุด
                    จากนั้นหายใจออกจนสุดพร้อมกับออกแรงแขม่วหน้าท้องเข้าไปให้มากที่สุด โดยให้นึกภาพว่า
                    แขม่วจนหน้าท้องไปติดกับหลัง <br/>
                    2. จากนั้นให้เกร็งค้างที่ตำแหน่งนั้นไว้ประมาณ 20 วินาที โดยให้หายใจตามปรกติ <br/>
                    3. พอครบแล้วให้สูดลมหายใจเข้าจนสุด พร้อมกับคลายหน้าท้องออกมากลับสู่ท่าเตรียม นับเป็น 1 ครั้ง
                    *หากฝึกจนชำนาญแล้วสามารถเพิ่มความยากได้โดยการเพิ่ม ช่วงเวลาในการเกร็งเป็น 40-60 วินาที ต่อครั้ง<br/>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);

export default Stomach_vacuum;
