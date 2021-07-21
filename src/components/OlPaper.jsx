import { Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  liDesign: {
    paddingLeft: 15,

    '& li': {
      marginBottom: theme.spacing(0.5),
      fontSize: '1rem',
    },
  },
}));

function OlPaper(props) {
  const classes = useStyles();
  const { title, items } = props;

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <ol className={classes.liDesign}>
        {items.map(x => (
          <li key={x.id}>{x.point}</li>
        ))}
      </ol>
    </Paper>
  );
}

export default OlPaper;
