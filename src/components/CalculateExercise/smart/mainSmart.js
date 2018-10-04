import React from 'react';
import {
  Grid,
  Divider,
  Card,
  CardContent,
  Typography,
  Button
} from '@material-ui/core';
import Ex1 from './Cable_Fly';
import Ex2 from './Close-Grip_Barbell_Bench_Press';
import Ex3 from './Deadlift';
import Ex4 from './Dumbbell_Rear_Delt_Fly';
import Ex5 from './Knee_pull';
import { Link } from 'react-router-dom';

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
        <Grid item xs={10} sm={4}>
          <Ex4/>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Ex5/>
        </Grid>
      </Grid>
      <Divider style={styles.divider}/>
      <Grid container justify="center">
        <Grid item xs={10} sm={5}>
          <Card>
            <CardContent>
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
              }            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowSmart;
