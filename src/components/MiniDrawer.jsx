import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  pink: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: '14px',
    background: 'linear-gradient(45deg, #3f51b5 30%, #21CBF3 90%)',
    borderRadius: 50,
    border: 0,
    color: 'white',
  },
  linkSub: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  listpL: {
    '& .MuiListItem-gutters': {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 10,
        paddingRight: 6,
      },
    },
  },
  b1: {
    whiteSpace: 'normal',
  },
}));

function MiniDrawer(props) {
  const [open, setOpen] = React.useState(false);
  const { topics } = props;

  const handleDrawerClose = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <Typography></Typography>
        <IconButton onClick={handleDrawerClose}>
          {open ? (
            theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )
          ) : (
            <ListIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List className={classes.listpL}>
        {topics.map(items => {
          const { id, name, loc } = items;
          return (
            <Link key={id} to={loc} className={classes.linkSub}>
              <ListItem button>
                <ListItemIcon>
                  <Avatar className={classes.pink}>{id}</Avatar>{' '}
                </ListItemIcon>
                <Box>
                  <ListItemText
                    primary={name}
                    className={clsx({
                      [(classes.drawerOpen, classes.b1)]: open,
                      [classes.drawerClose]: !open,
                    })}
                  />
                </Box>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
}

export default MiniDrawer;
