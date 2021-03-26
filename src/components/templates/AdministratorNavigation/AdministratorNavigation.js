import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/styles';
import AdministratorPaymentsTemplate from '../AdministratorPaymentsTemplate/AdministratorPaymentsTemplate';
import { Wrapper } from '../NavigationTemplate/NavigationTemplate';
import GridContainerNavigationWrapper from '../../../styles/stylesContainer/GridContainerNavigationWrapper';
import Navigation from '../../Organisms/Navigation/Navigation';
import { administratorNavigation } from '../../../helpers/navigationNamesAndRoutes/administratorNavigation';


const NavigationTemplate = ({ children }) => {
  return (
    <>
      <GridContainerNavigationWrapper>
        <Navigation/>
      </GridContainerNavigationWrapper>
      {children}
    </>
  );
};

function AdministratorNavigation() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationTemplate>
          <Switch>
            <Route path="/" exact>
              {/* odpowiedni komponent */}
            </Route>
            <Route path="/login"></Route>

            <Route path="/payment">
              <Wrapper>
                <AdministratorPaymentsTemplate />
              </Wrapper>
            </Route>
          </Switch>
        </NavigationTemplate>
      </Router>
    </ThemeProvider>
  );
}

export default AdministratorNavigation;
