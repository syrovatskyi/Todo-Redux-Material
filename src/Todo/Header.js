import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  toolbar: {
    textAlign: 'center',
    height: 80,
  },
  heading: {
    margin: 'auto',
    align: 'center'
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position={"static"}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.heading} variant='h5'>
          Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Header;



