import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/styles';
import Navigation from '../../Organisms/Navigation/Navigation';
import GridContainerNavigationWrapper from '../../../styles/stylesContainer/GridContainerNavigationWrapper';
import PaymentForm from '../../Organisms/PaymentForm/PaymentForm';
import AdoptionVisitPage from '../../Organisms/AdoptionVisit/AdoptionVisitPage';
import { Animals } from '../../Organisms/Animals.js/Animals';
import VolunteerForm from '../../Organisms/VolunteerForm/VolunteerForm';
import AdotpionForm from '../../Organisms/AdotpionForm/AdotpionForm';
import SignInForm from '../../Organisms/SignUpInForms/SignInForm';
import SignUpForm from '../../Organisms/SignUpInForms/SignUpForm';
import UserNavigationPage from '../../Organisms/UserNavigationPage/UserNavigationPage'
import UserPageVisitForm from '../../Organisms/AdoptionVisit/UserPageVisitForm';
import UserPageVolunteerForm from '../../Organisms/VolunteerForm/UserPageVolunteerForm';
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
              <Wrapper>
                <AdotpionForm />
              </Wrapper>
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
            <Route path="/animals">
              <Animals />
            </Route>
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
                <VolunteerForm />
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
            <Route path="/contact">
              <UserNavigationPage props={defaultuser}/>
            </Route>
          </Switch>
          {/* USER PROFILE ROUTES */}
          <Switch>
            <Route path="/volunteerform">
              <UserPageVolunteerForm link={"/contact"}/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/mypayments">
            </Route>
          </Switch>
          <Switch>
            <Route path="/adoptionvist">
              <UserPageVisitForm link={"/contact"}/>
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
        </NavigationTemplate>
      </Router>
    </ThemeProvider>
  );
}

let defaultuser={name: "Robert", lastName: "Makłowicz", email: "robert.maklowicz@gmail.com", mobile: "123-456-789", isVolunteer: true, userID: "123"}

export default NavigationView;
