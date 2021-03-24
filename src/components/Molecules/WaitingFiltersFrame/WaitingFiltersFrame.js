import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {  WaitingText  } from '../../Atoms/WaitingFrameText/WaitingFrameText.js';
import { AnimalPaw } from '../../Atoms/Paw/Paw.js';
import { WaitingFiltersSize } from '../../Atoms/WaitingFilters/WaitingFiltersSize.js'
import { WaitingFiltersGender } from '../../Atoms/WaitingFilters/WaitingFiltersGender.js'
import { WaitingFiltersAge } from '../../Atoms/WaitingFilters/WaitingFiltersAge.js'
import { WaitingFiltersAll } from '../../Atoms/WaitingFilters/WaitingFiltersAll.js'
import { WaitingFiltersAnimalType } from '../../Atoms/WaitingFilters/WaitingFiltersAnimalType.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function WaitingFiltersFrame (props) {
  const classes = useStyles();

    return (
      <div>
        <div>
            <WaitingText>
                Czekam na Ciebie
                <AnimalPaw></AnimalPaw>
            </WaitingText>
        </div>
        <div className={classes.root}>
        <Grid container spacing={10}>
          <Grid item>
            <WaitingFiltersAnimalType filterFunction={props.filterFunction}></WaitingFiltersAnimalType>
          </Grid>
          <Grid item>
            <WaitingFiltersSize></WaitingFiltersSize>
          </Grid>
          <Grid item>
            <WaitingFiltersGender></WaitingFiltersGender>
          </Grid>
          <Grid item>
          <WaitingFiltersAge></WaitingFiltersAge>
          </Grid>
          <Grid item>
          <WaitingFiltersAll></WaitingFiltersAll>
          </Grid>
        </Grid>
        </div>
      </div>
    );
  };