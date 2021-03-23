import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/styles';
import { Typography } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import Navigation from '../../Organisms/Navigation/Navigation';
import GridContainerNavigationWrapper from '../../../styles/stylesContainer/GridContainerNavigationWrapper';
import PaymentForm from '../../Organisms/PaymentForm/PaymentForm';
import VisitForm from '../../Organisms/AdoptionVisit/AdoptionVisitForm';
import { Animals } from '../../Organisms/Animals.js/Animals';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;

const NavigationTemplate = ({ children }) => {
  return (
    <>
      <GridContainerNavigationWrapper>
        <Navigation />
      </GridContainerNavigationWrapper>
      {children}
    </>
  );
};

function NavigationView() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationTemplate>
          <Wrapper>
            <Switch>
              <Route path="/" exact>
                {/* odpowiedni komponent */}
              </Route>
            </Switch>
            <Switch>
              <Route path="/registration"></Route>
            </Switch>
            <Switch>
              <Route path="/login"></Route>
            </Switch>
            <Switch>
              <Route path="/news"></Route>
            </Switch>
            <Switch>
              <Route path="/animals">
                <Animals />
              </Route>
            </Switch>
            <Switch>
              <Route path="/adoption">
                  <VisitForm />
              </Route>
            </Switch>
            <Switch>
              <Route path="/education"></Route>
            </Switch>
            <Switch>
              <Route path="/howtohelp">
                <PaymentForm />
              </Route>
            </Switch>
            <Switch>
              <Route path="/about">
                  <Typography variant="h1">Hello world!</Typography>
                  <AppleIcon style={{ fontSize: 130 }} />
              </Route>
            </Switch>
            <Switch>
              <Route path="/contact"></Route>
            </Switch>
          </Wrapper>
        </NavigationTemplate>
      </Router>
    </ThemeProvider>
  );
}

export default NavigationView;
