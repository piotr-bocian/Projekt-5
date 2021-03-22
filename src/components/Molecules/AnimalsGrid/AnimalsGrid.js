import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import { AnimalCard } from '../../Atoms/AnimalCard/AnimalCard.js'

export function AllAnimalsGrid (props) {
    // const classes = useStyles();
  
      return (
          <div>
          <Grid container spacing={10}>
              {props.animals.map((animal) =>(
                    <Grid item key={animal._id}>
                        <AnimalCard animal={animal} key={animal._id}></AnimalCard>
                    </Grid>
                  )
              )}
            </Grid>
          </div>
      );
};