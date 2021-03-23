import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '300px',
        display: 'flex',
        flexWrap: 'wrap',
        width: '300px',
    },
    image: {
        height: '100%',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
          width: '100% !important', // Overrides inline-style
          height: '100%',
        },
    },
    imageTitle: {
      position: 'absolute',
      bottom: '0px',
      zIndex: 2,
      width: '300px',
      color: 'white',
      fontFamily: 'Amatic SC, sans-sarif',
      letterSpacing: '0.1em',
      fontSize: '3em',
      fontWeight: 'bold',
      backgroundColor: '#0292C9',
      opacity: '70%',
    },
  }));
  
  export function AnimalCard(props) {
    const classes = useStyles();

    function AnimalImage(p){
        if(p.isImage !== undefined){
          return <img src={`data:image/jpeg;base64,${Buffer.from(props.animal.image).toString('base64')}`} alt="animal" className={classes.image}/>
        }
        return null;
    }
   
    return (
      <ButtonBase key={props.animal.id} className={classes.root}>
        <AnimalImage isImage={typeof props.animal.image} className={classes.image}/>
        <Typography variant="subtitle1" color="inherit" className={classes.imageTitle}>
          {props.animal.name}
        </Typography>
      </ButtonBase>
    );
  }