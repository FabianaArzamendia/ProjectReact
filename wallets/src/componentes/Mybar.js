import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
//import  Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  lol: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  title: {
    flexGrow: 1,
  },

}));

//style = {{background:"teal"}} 
export default function Mybar() {
  const classes = useStyles();

  return (
    <div style={{ background: "prymary", display: 'flex' }} className={classes.lol}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SPRING BOOT AND REACTJS APPLICATION
          </Typography>
        </Toolbar>
      </AppBar>


    </div>
  );
}




