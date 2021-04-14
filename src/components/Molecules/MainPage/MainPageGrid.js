import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Dogo } from '../../Atoms/MainPage/Dogo';
import { Cato } from '../../Atoms/MainPage/Cato';
import { WantedDiv } from '../../Molecules/MainPage/WantedDiv';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    rootGrid: {
        marginLeft: '15vw',
        marginTop: '-7.5vh',
        width: '85vw',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0'
        }
    },
    gridClasses: {
        margin: '0 auto',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    gridItem: {
        marginTop: '-7.5vh',
    }
  }));

export function MainPageGrid (props) {
    const classes = useStyles();
  
      return (
          <div className={classes.rootGrid}>
            <Grid container spacing={10} className={classes.gridClasses}>
                <Grid item className={classes.gridItem}>
                    <Dogo></Dogo>
                </Grid>
                <Grid item >
                    <WantedDiv></WantedDiv>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Cato></Cato>
                </Grid>
            </Grid>
          </div>
      );
};