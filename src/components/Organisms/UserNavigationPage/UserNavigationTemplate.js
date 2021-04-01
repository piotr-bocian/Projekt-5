import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/styles';
import VolunteerForm from '../VolunteerForm/VolunteerForm';
import UserNavigationPage from './UserNavigationPage';


function UserNavigationTemplate({ props }) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route exact path="/contact">
              <UserNavigationPage props={props}/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/volunteerform">
              <VolunteerForm />
            </Route>
          </Switch>
          <Switch>
            <Route path="/mypayments">
            </Route>
          </Switch>
          <Switch>
            <Route path="/adoptionvist">
            </Route>
          </Switch>
          <Switch>
            <Route path="/myadoptionvisits">
            </Route>
          </Switch>
          <Switch>
            <Route path="/post">
            </Route>
          </Switch>
          <Switch>
            <Route path="/myposts">
            </Route>
          </Switch>
          <Switch>
            <Route path="/editprofile">
              <h1>EDYCJA</h1>
            </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default UserNavigationTemplate;
