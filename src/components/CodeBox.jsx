import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  codeConfig: {
    [theme.breakpoints.down('xs')]: {
      minWidth: 310,
    },
    padding: theme.spacing(1),
    overflowX: 'auto',
  },
  paper: {
    marginBottom: theme.spacing(2),
  },
}));

function CodeBox({ progm }) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <pre className={classes.codeConfig}>{progm}</pre>
    </Paper>
  );
}

export default CodeBox;
