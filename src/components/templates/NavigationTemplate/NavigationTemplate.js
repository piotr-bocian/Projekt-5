import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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
// import { Animals } from '../../Organisms/Animals.js/Animals';
// import VolunteerForm from '../../Organisms/VolunteerForm/VolunteerForm';
import AdotpionForm from '../../Organisms/AdotpionForm/AdotpionForm';
import { MainPage } from '../../Organisms/MainPage/MainPage';
import { AnimalPage } from '../../Organisms/AnimalPage/AnimalPage';
import SignInForm from '../../Organisms/SignUpInForms/SignInForm';
import SignUpForm from '../../Organisms/SignUpInForms/SignUpForm';
import Education from '../../Organisms/Education/Education';
import EditProfile from '../../Organisms/EditProfile/EditProfile';

// export const Wrapper = styled.div`
import UserPage from '../../Organisms/UserPage/UserPage';
import { AuthProvider, useAuth } from '../../../contexts/AuthContext';
import PrivateRoute from '../../Organisms/UserPage/PrivateRoute';
import AdminRoute from '../../Organisms/UserPage/AdminRoute';
import UserPageVisitForm from '../../Organisms/AdoptionVisit/UserPageVisitForm';
import UserPageVolunteerForm from '../../Organisms/VolunteerForm/UserPageVolunteerForm';
import { UserVisits } from '../../Organisms/AdoptionVisit/UserVisit';
import UserPagePaymentForm from '../../Organisms/PaymentForm/UserPagePaymentForm';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;
const NavigationTemplate = ({ children }) => {
  const { isLogged } = useAuth();
  return (
    <>
      <GridContainerNavigationWrapper>
        {/* <Navigation makeNavigation={navigationArrayWithRoutes} /> */}
        <AuthProvider>
          <Navigation props={{isLogged}}/>
        </AuthProvider>
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
            <AuthProvider>
              <Route path="/" exact>
                <Wrapper>
                  <AdotpionForm />
                </Wrapper>
              </Route>
              <Route path="/registration">
                <SignUpForm />
              </Route>
              <Route path="/login">
                <SignInForm />
              </Route>
              <Route path="/news"></Route>
              <Route path="/animals">
                <Animals />
              </Route>
              <Route path="/adoption">
                <Wrapper>
                  <AdoptionVisitPage />
                </Wrapper>
              </Route>
              <Route path="/education" />
              <AdminRoute path="/howtohelp" component={PaymentForm} />
                {/* <PaymentForm />
              </AdminRoute> */}
              <Route path="/about"></Route>
              <Route path="/contact"></Route>
              <PrivateRoute path="/useraccount" component={UserPage} />
              <Route path="/volunteerform">
                <UserPageVolunteerForm link={{link:"/useraccount"}}/>
              </Route>
              <Route path="/mypayments" />
              <Route path="/adoptionvist">
                <UserPageVisitForm link={{link:"/useraccount"}}/>
              </Route>
              <Route path="/myadoptionvisits" >
                <UserVisits link={{link:"/useraccount"}}/>
              </Route>
              <Route path="/payment" >
                <UserPagePaymentForm link={{link:"/useraccount"}}/>
              </Route>
              <Route path="/myposts" />
              <Route path="/editprofile">
                <Wrapper>
                  <EditProfile />
                </Wrapper>
              </Route>
            </AuthProvider>
          </Switch>
        </NavigationTemplate>
      </Router>
    </ThemeProvider>
  );
}

export default NavigationView;
