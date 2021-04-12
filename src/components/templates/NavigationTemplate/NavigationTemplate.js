import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/styles';
import Navigation from '../../Organisms/Navigation/Navigation';
import GridContainerNavigationWrapper from '../../../styles/stylesContainer/GridContainerNavigationWrapper';
import PaymentForm from '../../Organisms/PaymentForm/PaymentForm';
import AdoptionVisitPage from '../../Organisms/AdoptionVisit/AdoptionVisitPage';
import { Animals } from '../../Organisms/Animals/Animals';
import VolunteerForm from '../../Organisms/VolunteerForm/VolunteerForm';
import AdotpionForm from '../../Organisms/AdotpionForm/AdotpionForm';
import { MainPage } from '../../Organisms/MainPage/MainPage';
import { AnimalPage } from '../../Organisms/AnimalPage/AnimalPage';
import SignInForm from '../../Organisms/SignUpInForms/SignInForm';
import SignUpForm from '../../Organisms/SignUpInForms/SignUpForm';
import AddAnimalForm from '../../Organisms/AddAnimal/AddAnimalForm';

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
          <Switch>
            <Route path="/" exact>
              {/* odpowiedni komponent */}
              <MainPage />
              {/* <Wrapper>
                <AdotpionForm />
              </Wrapper> */}
            </Route>
          </Switch>
          <Switch>
            <Route path="/registration">
              <SignUpForm />
            </Route>
          </Switch>
          <Switch>
            <Route path="/login">
              <SignInForm />
            </Route>
          </Switch>
          <Switch>
            <Route path="/news"></Route>
          </Switch>
          <Switch>
            <Route path="/animals" exact component={Animals} />
            <Route path="/animals/:id" component={AnimalPage} />
          </Switch>
          <Switch>
            <Route path="/adoption">
              <Wrapper>
                <AdoptionVisitPage />
              </Wrapper>
            </Route>
          </Switch>
          <Switch>
            <Route path="/education">
              <Wrapper>
              </Wrapper>
            </Route>
          </Switch>
          <Switch>
            <Route path="/howtohelp">
              <PaymentForm />
            </Route>
          </Switch>
          <Switch>
            <Route path="/about"></Route>
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
