import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '30vh',
        display: 'flex',
        width: '90vw',
        margin: '30px',
    },
    image: {
        height: '100%',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
          width: '100% !important', // Overrides inline-style
          height: '100%',
        },
    },
  }));

export function AnimalPagePhoto(props) {
    const classes = useStyles();

    function AnimalImage(p){
        if(p.isImage !== undefined){
          return <img src={`data:image/jpeg;base64,${Buffer.from(props.animal.image).toString('base64')}`} alt="animal" className={classes.image}/>
        }
        return null;
    }
   
    return (
      <div key={props.animal.id} className={classes.root}>
        <AnimalImage isImage={typeof props.animal.image} className={classes.image}/>
      </div>
    );
  }