import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/styles';
import Navigation from '../../Organisms/Navigation/Navigation';
import GridContainerNavigationWrapper from '../../../styles/stylesContainer/GridContainerNavigationWrapper';
import PaymentForm from '../../Organisms/PaymentForm/PaymentForm';
import AdoptionVisitPage from '../../Organisms/AdoptionVisit/AdoptionVisitPage';
import { navigationArrayWithRoutes } from '../../../helpers/navigationNamesAndRoutes/userNavigation';
import { Animals } from '../../Organisms/Animals/Animals';
import VolunteerForm from '../../Organisms/VolunteerForm/VolunteerForm';
import AdotpionForm from '../../Organisms/AdotpionForm/AdotpionForm';
import { MainPage } from '../../Organisms/MainPage/MainPage';
import { AnimalPage } from '../../Organisms/AnimalPage/AnimalPage';
import SignInForm from '../../Organisms/SignUpInForms/SignInForm';
import SignUpForm from '../../Organisms/SignUpInForms/SignUpForm';

// export const Wrapper = styled.div`
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
        <Navigation makeNavigation={navigationArrayWithRoutes} />
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
            <MainPage />
          </Route>
          <Route path="/registration">
            <SignUpForm />
          </Route>
          <Route path="/login">
            <SignInForm />
          </Route>
          <Route path="/news"></Route>
          <Route path="/animals" exact component={Animals} />
          <Route path="/animals/:id" component={AnimalPage} />
          <Route path="/adoption">
            <Wrapper>
              <AdoptionVisitPage />
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
