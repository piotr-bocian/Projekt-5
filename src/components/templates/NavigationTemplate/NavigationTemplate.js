import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/styles';
import Navigation from '../../Organisms/Navigation/Navigation';
import GridContainerNavigationWrapper from '../../../styles/stylesContainer/GridContainerNavigationWrapper';
import PaymentForm from '../../Organisms/PaymentForm/PaymentForm';
import VisitForm from '../../Organisms/AdoptionVisit/AdoptionVisitForm';
import { Animals } from '../../Organisms/Animals.js/Animals';
import VolunteerForm from '../../Organisms/VolunteerForm/VolunteerForm';
import AdotpionForm from '../../Organisms/AdotpionForm/AdotpionForm';

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
      <NavigationTemplate>
        <Switch>
          <Route path="/" exact>
            <Wrapper>
              <AdotpionForm />
            </Wrapper>
          </Route>

          <Route path="/registration"></Route>

          <Route path="/login"></Route>

          <Route path="/news"></Route>

          <Route path="/animals">
            <Animals />
          </Route>

          <Route path="/adoption">
            <Wrapper>
              <VisitForm />
            </Wrapper>
          </Route>

          <Route path="/education">
            <Wrapper>
              <VolunteerForm />
            </Wrapper>
          </Route>

          <Route path="/howtohelp">
            <PaymentForm />
          </Route>

          <Route path="/about"></Route>

          <Route path="/contact"></Route>
        </Switch>
      </NavigationTemplate>
    </ThemeProvider>
  );
}

export default NavigationView;
