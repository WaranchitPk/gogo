import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Banner from '../asset/banner.jpg';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import Img1 from '../asset/home/slide/1.jpg'
import Img2 from '../asset/home/slide/2.jpg'
import Img3 from '../asset/home/slide/3.jpg'
import Img4 from '../asset/home/slide/4.jpg'
import Img5 from '../asset/home/slide/5.jpg'
import Img6 from '../asset/home/slide/6.jpg'
import Img7 from '../asset/home/slide/7.jpg'
import Img8 from '../asset/home/slide/8.jpg'
import Img9 from '../asset/home/slide/9.jpg'
import Img10 from '../asset/home/slide/10.jpg'

import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import Slider from "react-slick";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 400,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 300,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  hobbie: {
    marginTop: theme.spacing.unit * 4,
  },
  imageOrther: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 300,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  fontTitle: {
    fontFamily: 'monospace',
  }
});

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true
};
const Home = ({
  classes
}) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <div className={classes.image}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${Banner})`,
            }}/>
            <span className={classes.imageBackdrop}/>
            <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="display3"
              color="inherit"
              className={classes.imageTitle}>
              GO-GYM
              <span className={classes.imageMarked}/>
            </Typography>
          </span>
          </div>
        </Grid>
      </Grid>
      {/*hobbies*/} <Divider className={classes.hobbie}/>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="display1" color="textSecondary" classes={classes.fontTitle}>ภาพกิจกรรมต่างๆ ภายในยิม</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <Grid container justify="center">
            <Carousel
              autoplay={true}
              autoplayInterval={3000}
              width="600px">
              <img src={Img1} />
              <img src={Img2} />
              <img src={Img3} />
              <img src={Img4} />
              <img src={Img5} />
              <img src={Img6} />
              <img src={Img7} />
              <img src={Img8} />
              <img src={Img9} />
              <img src={Img10} />
            </Carousel>
          </Grid>
        </ListItem>
      </List>
      <Divider className={classes.hobbie}/>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="display1" color="textSecondary" classes={classes.fontTitle}>อื่นๆ</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <Grid container justify="center" spacing={40}>
            <Grid item>
              <ButtonBase
                focusRipple
                className={classes.imageOrther}
                focusVisibleClassName={classes.focusVisible}
                component={Link}
                to='/calculator'
                style={{
                  width: '600px',
                }}>
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${Img10})`,
                }}/>
                <span className={classes.imageBackdrop}/>
                <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="display2"
                color="inherit"
                className={classes.imageTitle}>
              คำนวณค่าต่างๆ
              <span className={classes.imageMarked}/>
              </Typography>
              </span>
              </ButtonBase>
            </Grid>
            <Grid item>
              <ButtonBase
                focusRipple
                className={classes.imageOrther}
                focusVisibleClassName={classes.focusVisible}
                component={Link}
                to='/pricing'
                style={{
                  width: '600px',
                }}>
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${Img5})`,
                  }}/>
                <span className={classes.imageBackdrop}/>
                <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="display2"
                  color="inherit"
                  className={classes.imageTitle}>
                ค่าใช้จ่ายต่างๆ
                <span className={classes.imageMarked}/>
                </Typography>
                </span>
              </ButtonBase>
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <Divider/>
    </div>
  );
};


export default withStyles(styles)(withRouter(Home))
