import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {  WaitingText  } from '../../Atoms/AllAnimalsPage/WaitingFrameText/WaitingFrameText.js';
import { AnimalPaw } from '../../Atoms/Paw/Paw.js';
import { WaitingFiltersSize } from '../../Atoms/AllAnimalsPage/WaitingFilters/WaitingFiltersSize.js'
import { WaitingFiltersGender } from '../../Atoms/AllAnimalsPage/WaitingFilters/WaitingFiltersGender.js'
import { WaitingFiltersAge } from '../../Atoms/AllAnimalsPage/WaitingFilters/WaitingFiltersAge.js'
import { WaitingFiltersAll } from '../../Atoms/AllAnimalsPage/WaitingFilters/WaitingFiltersAll.js'
import { WaitingFiltersAnimalType } from '../../Atoms/AllAnimalsPage/WaitingFilters/WaitingFiltersAnimalType.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '30px',
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
            <WaitingFiltersAnimalType></WaitingFiltersAnimalType>
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