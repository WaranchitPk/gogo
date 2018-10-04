import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import Ex1 from './Barbell_Bench_Press';
import Ex2 from './Barbell_Deadlift';
import Ex3 from './Cable_Push_Down';
import Ex4 from './Cable_Seated_Row';
import Ex5 from './Crunch';
import { Link } from "react-router-dom";

const styles = {
  divider: {
    marginTop: '2%',
    marginBottom: '3%'
  }
}
const ShowThin = ({
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
      <Grid container justify="center" spacing={40}>
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
                <b>คำแนะนำ</b>
              </Typography>
              <Typography component="p" variant="title" color="textSecondary">
                ท่านมีรูปร่างที่ผอมเกินไป ควรกินอาหารให้มากยิ่งขึ้นเพื่อเป็นการเพิ่มน้ำหนัง หลังจากนั้นก็ออกกำลังกาย
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
              }
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowThin;
