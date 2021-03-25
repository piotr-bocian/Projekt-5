import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '40vh',
        display: 'flex',
        width: '90vw',
        margin: '30px',
    }
}));

export function AnimalData(props) {
    const classes = useStyles();
   
    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" color="inherit" className={classes.data}>
          GATUNEK: {props.animal.animalType}
        </Typography>
        <Typography variant="subtitle1" color="inherit" className={classes.data}>
          DATA REJESTRACJI: {props.animal.registrationDate}
        </Typography>
        <Typography variant="subtitle1" color="inherit" className={classes.data}>
          PŁEĆ: {props.animal.gender}
        </Typography>
        <Typography variant="subtitle1" color="inherit" className={classes.data}>
          ROZMIAR: {props.animal.size}
        </Typography>
        <Typography variant="subtitle1" color="inherit" className={classes.data}>
          WIEK: {props.animal.age}
        </Typography>
        <Typography variant="subtitle1" color="inherit" className={classes.data}>
          RASA: {props.animal.breed}
        </Typography>
        <Typography variant="subtitle1" color="inherit" className={classes.data}>
          OPIS: {props.animal.description}
        </Typography>
      </div>
    );
  }