import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { AnimalPage } from '../../Organisms/AnimalPage/AnimalPage.js';
// import { makeStyles } from '@material-ui/core/styles';
import { AnimalCard } from '../../Atoms/AnimalCard/AnimalCard.js'

export function AllAnimalsGrid (props) {
    // const classes = useStyles();
  
      return (
          <div>
          <Grid container spacing={10}>
              {props.animals.map((animal) =>(
                <div key={animal._id}>
                <NavLink to={`/animals/${animal._id}`} exact>
                    <Grid item>
                        <AnimalCard animal={animal}></AnimalCard>
                    </Grid>
                  </NavLink>
                  {console.log(animal)}
                  <Switch>
                <Route path={`/animals/${animal._id}`} exact render={(props) => (<AnimalPage animalId={animal}/>)} />
                  </Switch>
                  </div>
                  )
              )}
            </Grid>
          </div>
      );
};