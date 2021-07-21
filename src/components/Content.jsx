import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import char1 from '../images/char1.svg';
import char2 from '../images/char2.svg';
import char3 from '../images/char3.svg';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    overflowX: 'hidden',
  },
  imgHor: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  },
  imgX: {
    maxHeight: 500,
    maxWidth: 500,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 95,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: 180,
    },
  },
}));

function Content(props) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.imgHor}>
        <img className={classes.imgX} src={char1} alt="" />
        <img className={classes.imgX} src={char2} alt="" />
        <img className={classes.imgX} src={char3} alt="" />
      </div>
      <Typography
        variant="h5"
        align="center"
        style={{ color: '#00c851', fontWeight: 600 }}
      >
        Work in Progress !!!
      </Typography>
    </main>
  );
}

export default Content;
