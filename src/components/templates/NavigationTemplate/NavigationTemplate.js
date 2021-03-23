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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
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
          <Route path="/animals">{/* odpowiedni komponent */}</Route>
        </Switch>
        <Switch>
          <Route path="/adoption"></Route>
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
            <Wrapper>
              <Typography variant="h1">Hello world!</Typography>
              <AppleIcon style={{ fontSize: 130 }} />
            </Wrapper>
          </Route>
        </Switch>
        <Switch>
          <Route path="/contact"></Route>
        </Switch>
      </NavigationTemplate>
    </Router>
    </ThemeProvider>
  );
}

export default NavigationView;