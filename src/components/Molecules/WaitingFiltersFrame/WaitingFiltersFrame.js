import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {  WaitingText  } from '../../Atoms/AllAnimalsPage/WaitingFrameText/WaitingFrameText.js';
import { AnimalPaw } from '../../Atoms/Paw/Paw.js';
// import { WaitingFiltersSize } from '../../Atoms/AllAnimalsPage/WaitingFilters/WaitingFiltersSize.js'
// import { WaitingFiltersGender } from '../../Atoms/AllAnimalsPage/WaitingFilters/WaitingFiltersGender.js'
// import { WaitingFiltersAge } from '../../Atoms/AllAnimalsPage/WaitingFilters/WaitingFiltersAge.js'
// import { WaitingFiltersAll } from '../../Atoms/AllAnimalsPage/WaitingFilters/WaitingFiltersAll.js'
import { WaitingFiltersAnimalType } from '../../Atoms/AllAnimalsPage/WaitingFilters/WaitingFiltersAnimalType.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '0',
    fontSize: '1em',

  },
  rootGrid: {
    margin:0,
    width: '100vw',
  },
  rootItem: {
    padding: '10px !important',
    marginLeft: '20px',
  }
}));

export function WaitingFiltersFrame (props) {
  const classes = useStyles();

    return (
      <div>
        <div className={classes.root}>
            <WaitingText>
                CZEKAM WŁAŚNIE NA CIEBIE
                <AnimalPaw></AnimalPaw>
            </WaitingText>
        </div>
        <div>
        <Grid container spacing={10} className={classes.rootGrid}>
          <Grid item className={classes.rootItem}>
            <WaitingFiltersAnimalType setAnimals={props.setAnimals}></WaitingFiltersAnimalType>
          </Grid>
          {/* <Grid item>
            <WaitingFiltersSize></WaitingFiltersSize>
          </Grid>
          <Grid item>
            <WaitingFiltersGender></WaitingFiltersGender>
          </Grid>
          <Grid item>
          <WaitingFiltersAge></WaitingFiltersAge>
          </Grid> */}
          {/* <Grid item>
          <WaitingFiltersAll></WaitingFiltersAll>
          </Grid> */}
        </Grid>
        </div>
      </div>
    );
  };