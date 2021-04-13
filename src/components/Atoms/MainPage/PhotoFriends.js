import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import friends from '../../../assets/friends/friends.png';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '45vh',
        display: 'flex',
        width: '100vw',
        margin: 0,
        backgroundImage: `url(${friends})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
  }));

export function PhotoFriends() {
    const classes = useStyles();
   
    return (
      <div className={classes.root}></div>
    );
  }