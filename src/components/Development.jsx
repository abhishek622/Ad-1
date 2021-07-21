import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  rootX: {
    '& .MuiButton-text': {
      padding: '0px',
    },
    '& .MuiButton-root': {
      padding: '0px',
      minWidth: '0px',
    },
  },
}));

function MyApp(props) {
  const { text, ...others } = props;
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = () => () => {
    enqueueSnackbar('Under Development !! 💀', {
      variant: 'error',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
      TransitionComponent: Slide,
      autoHideDuration: 2000,
    });
  };

  return (
    <span className={classes.rootX}>
      <Button onClick={handleClickVariant()} {...others}>
        {text}
      </Button>
    </span>
  );
}

export default function Development(props) {
  const { text, ...others } = props;
  return (
    <SnackbarProvider maxSnack={1}>
      <MyApp {...others} text={text} />
    </SnackbarProvider>
  );
}
