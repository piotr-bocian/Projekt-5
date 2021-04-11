import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    margin: 'auto',
    width: '80vw',
  },
  gridClass: {
    margin: '0 auto',
    width: '100%',
  },
  btn: {
    width: '400px',
    color: 'black',
    margin: 'auto',
    padding: '5px',
    fontFamily: 'Amatic SC, sans-sarif',
    letterSpacing: '0.1em',
    fontSize: '2em',
    fontWeight: 'bold',
    backgroundColor: 'white',
    opacity: '70%',
    border: '1px solid #0292c9',
    boxShadow: '0px 4px 4px #0292c9',
    cursor: 'pointer',
    '&:focus': {
        outline: 'none',
    '&:hover': {
        cursor: 'pointer',
    }
  },
  }
}));

export function AnimalButtons (props) {
    const classes = useStyles();
    let history = useHistory();
      
    function handleClick() {
        history.push("/animals");
    }

      return (
          <div className={classes.rootGrid}>
          <Grid container spacing={10} className={classes.gridClass}>
            <Grid item>
                <button className={classes.btn} onClick={handleClick}> <ArrowBackIosIcon/> Wróć do wszystkich zwierząt</button>
            </Grid>
            </Grid>
          </div>
      );
};