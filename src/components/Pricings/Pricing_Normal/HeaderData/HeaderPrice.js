import React from 'react';
import Typography from "@material-ui/core/Typography";

const ShowHeaderPrice = () => (
  <div>
    <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
      ค่าบริการ
    </Typography>
    <Typography variant="title" align="center" color="textSecondary" component="p">
      ค่าใช้บริการของ Go Gym โดย แบ่งเป็น รายวัน, รายเดือน, รายปี
    </Typography>
  </div>
);

export default ShowHeaderPrice;
