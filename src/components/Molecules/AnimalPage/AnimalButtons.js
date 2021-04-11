import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import VisitForm from '../../Organisms/AdoptionVisit/AdoptionVisitForm';
import BackButton from '../../Atoms/UserNavigationPage/BackButton'

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    margin: 'auto',
    width: '80vw',
    '& button': {
      fontSize: '1.2em',
      margin: 'auto'
  },
  },
  gridClass: {
    margin: '0 auto',
    width: '100%',
  }
}));

export function AnimalButtons (props) {
    const classes = useStyles();

      return (
          <div className={classes.rootGrid}>
          <Grid container spacing={10} className={classes.gridClass}>
            <Grid item>
                <BackButton link={{link: "/animals", text: 'do wszystkich zwierząt'}}/>
            </Grid>
            <Grid item>
              <VisitForm animal={props.animal}/>
            </Grid>
            </Grid>
          </div>
      );
};