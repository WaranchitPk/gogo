import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import Ex1 from './Decline_Dumbbell_Fly';
import Ex2 from './Dumbbell_Shoulder_Press';
import Ex3 from './Pendlay_Row';
import Ex4 from './Spider_crawl';
import Ex5 from './Standing_Dumbbell_Triceps_Extension';
import { Link } from "react-router-dom";
const styles = {
  divider: {
    marginTop: '2%',
    marginBottom: '3%'
  }
}

const ShowSmart = ({
  userType
}) => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={10} sm={4}>
          <Ex1/>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Ex2/>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Ex3/>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={10} sm={6}>
          <Ex4/>
        </Grid>
        <Grid item xs={10} sm={6}>
          <Ex5/>
        </Grid>
      </Grid>
      <Divider style={styles.divider}/>
      <Grid container justify="center" style={{marginTop: '3%'}}>
        <Grid item xs={10} sm={5}>
          <Card>
            <CardContent>
              <Typography component="p" variant="title" color="textSecondary">
                <b>คำแนะนำ</b>
              </Typography>
              <Typography component="p" variant="title" color="textSecondary">
                ท่านมีรูปร่างที่อ้วนเกินไป ควรรัปประทานอาหารให้น้อยลง และควรออกกำลังกายแบบคาร์ดิโออย่างน้อย วันละ <b>30 นาที</b>
                จำนวน 3-4 วันต่อสัปดาห์
              </Typography>
              <Divider style={styles.divider}/>
              <Typography component="p" variant="title" color="textSecondary">
                ท่าการออกกำลังกายที่ท่านเห็น เป็นเพียงตัวอย่างท่าออกกำลังกายพื้นฐาน.
                หากท่านต้องการท่าออกกำลังกายหรือคำแนะนำจากเทรนเนอร์ผู้มีประสบการณ์
                คลิกเพื่อดูรายละเอียด
              </Typography>
              {
                userType === 3 ? (
                  ""
                ) : (
                  <Button component={Link} to="/pricing" color="primary"
                          variant="contained">รายละเอียดเพิ่มเติม</Button>
                )
              }                 </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowSmart;
