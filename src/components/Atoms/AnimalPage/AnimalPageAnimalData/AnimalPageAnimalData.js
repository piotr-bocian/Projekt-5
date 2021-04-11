import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'fit-content',
        display: 'block',
        width: '75vw',
        margin: 'auto',
        backgroundColor: 'white',
        border: '1px solid #0292C9',
        padding: '20px',
        fontFamily: 'Montserrat, sans-serif',
        boxSizing: 'border-box',  
        boxShadow: '0px 4px 4px #0292C9',
    },
    data: {
      display: 'block',
      backgroundColor: 'white',
    }
}));

export function AnimalData(props) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Typography variant="h6" color="inherit" className={classes.data}>
          GATUNEK: {props.animal.animalType}
        </Typography>
        {/* <Typography variant="h6" color="inherit" className={classes.data}>
          DATA REJESTRACJI: {props.animal.registrationDate}
        </Typography> */}
        <Typography variant="h6" color="inherit" className={classes.data}>
          PŁEĆ: {props.animal.gender}
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.data}>
          ROZMIAR: {props.animal.size}
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.data}>
          WIEK: {props.animal.age}
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.data}>
          RASA: {props.animal.breed}
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.data}>
          OPIS: {props.animal.description}
        </Typography>
      </div>
    );
  }