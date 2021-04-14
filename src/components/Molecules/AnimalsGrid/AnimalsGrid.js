import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AnimalCard } from '../../Atoms/AnimalCard/AnimalCard.js'

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    marginLeft: '0.5vw',
    marginTop: '2vh',
    width: '99.5vw',
  },
  gridClass: {
    margin: '0 auto',
    width: '100%',
  },
}));

export function AllAnimalsGrid (props) {
    const classes = useStyles();
    // const classes = useStyles();
      return (
          <div className={classes.rootGrid}>
          <Grid container spacing={10} className={classes.gridClass}>
              {props.animals.map((animal) =>(
                <div key={animal._id}>
                <Link to={`/animals/${animal._id}`}>
                    <Grid item>
                        <AnimalCard animal={animal}></AnimalCard>
                    </Grid>
                  </Link>
                  </div>
                  )
              )}
            </Grid>
          </div>
      );
};