import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { SimpleList } from '../../Atoms/MainPage/Wanted/WantedList';
import { WantedImage } from '../../Atoms/MainPage/Wanted/WantedImage';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '25vh',
      display: 'flex',
      flexWrap: 'wrap',
      width: '25vw',
      backgroundColor: 'white',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))',
    },
    header1: {
      color: 'red',
      fontFamily: 'Montserrat, sans-sarif',
      fontWeight: 'bold',
      fontSize: '1.4em',
      margin: '15px auto 0 auto',
      height: 'fit-content'
    },
    header2: {
      fontFamily: 'Montserrat, sans-sarif',
      fontWeight: 'bold',
      fontSize: '1.3em',
      margin: '-15px auto',
      height: 'fit-content'
    },
}));
  
  export function WantedDiv() {
    const classes = useStyles();
   
    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" className={classes.header1}>ZGUBIŁEM SIĘ!</Typography>
        <Typography variant="subtitle2" className={classes.header2}>Zgubiłeś lub znalazłeś zwierzaka?</Typography>
        <SimpleList></SimpleList>
        <WantedImage></WantedImage>
      </div>
    );
  }