import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import wanted from '../../../../assets/wanted/wanted.png'

const useStyles = makeStyles((theme) => ({
    imageWanted: {
        height: '130px',
        width: '130px',
        display: 'inline-block',
        margin: 'auto 40px',
        backgroundImage: `url(${wanted})`,
        boxSizing: 'border-box',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('xs')]: {
          width: '100% !important', // Overrides inline-style
          height: '100%',
        },
    },
  }));
  
  export function WantedImage() {
    const classes = useStyles();
   
    return (
        <div className={classes.imageWanted}></div>
    );
  }