import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import dogo from '../../../assets/dogo/dogo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '31vh',
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        width: '15vw',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))',
    },
    image: {
        height: '70%',
        width: '70%',
        backgroundImage: `url(${dogo})`,
        boxSizing: 'border-box',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('xs')]: {
          width: '100% !important', // Overrides inline-style
          height: '100%',
        },
    },
    imageTitle: {
      position: 'absolute',
      bottom: '0px',
      zIndex: 2,
      width: '15vw',
      color: 'white',
      fontFamily: 'Amatic SC, sans-sarif',
      letterSpacing: '0.1em',
      fontSize: '2.75em',
      fontWeight: 'bold',
      backgroundColor: '#0292C9',
      opacity: '70%',
    },
  }));
  
  export function Dogo() {
    const classes = useStyles();
   
    return (
      <ButtonBase className={classes.root}>
        <div className={classes.image}></div>
        <Typography variant="subtitle1" color="inherit" className={classes.imageTitle}>PSY DO ADOPCJI</Typography>
      </ButtonBase>
    );
  }