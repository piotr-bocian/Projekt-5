import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '300px',
        display: 'flex',
        flexWrap: 'wrap',
        width: '300px',
        margin: ' 20px auto',
    },
    imageTitle: {
      width: '300px',
      color: 'white',
      margin: '30px auto',
      fontFamily: 'Amatic SC, sans-sarif',
      letterSpacing: '0.1em',
      fontSize: '3em',
      fontWeight: 'bold',
      backgroundColor: '#0292C9',
      opacity: '70%',
    },
}));
  
export function AnimalName(props) {
    const classes = useStyles();
   
    return (
        <Typography variant="subtitle1" color="inherit" className={classes.imageTitle} align='center'>
          {props.animal.name}
        </Typography>
    );
}