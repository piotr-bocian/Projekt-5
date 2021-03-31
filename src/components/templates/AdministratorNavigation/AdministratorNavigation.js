import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/styles';
import AdministratorViewTemplate from '../AdministratorViewTemplate/AdministratorViewTemplate';
import GridContainerNavigationWrapper from '../../../styles/stylesContainer/GridContainerNavigationWrapper';
import Navigation from '../../Organisms/Navigation/Navigation';
import { administratorNavigation } from '../../../helpers/navigationNamesAndRoutes/administratorNavigation';
import { AnimalsForAdoption as Title } from '../../Atoms/HeaderAnimalsForAdoption/HeaderAnimalsForAdoption';
import { administratorPaymentConfig } from '../../../Config/administratorViewConfigFile';
import AdministratorPayment from '../../Organisms/AdministratorPayment/AdministratorPayment';

const NavigationTemplate = ({ children }) => {
  return (
    <>
      <GridContainerNavigationWrapper>
        <Navigation makeNavigation={administratorNavigation} user={false} />
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
          <Title style={{ textAlign: 'center', marginTop: '50px' }}>
            Panel Administratora
          </Title>
          <Switch>
            <Route path="/" exact>
              {/* odpowiedni komponent */}
            </Route>
            <Route path="/login"></Route>

            <Route path="/payments">
              {/* <Wrapper> */}
              <AdministratorViewTemplate
                administratorConfig={administratorPaymentConfig}
                componentName={<AdministratorPayment />}
              ></AdministratorViewTemplate>
              {/* </Wrapper> */}
            </Route>
          </Switch>
        </NavigationTemplate>
      </Router>
    </ThemeProvider>
  );
}

export default AdministratorNavigation;
