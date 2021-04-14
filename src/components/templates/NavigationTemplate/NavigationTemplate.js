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
import AddAnimalForm from '../../Organisms/AddAnimal/AddAnimalForm';
import Education from '../../Organisms/Education/Education';
import EditProfile from '../../Organisms/EditProfile/EditProfile';
import UserPageEditProfile from '../../Organisms/EditProfile/UserPageEditProfile';
// export const Wrapper = styled.div`
import UserPage from '../../Organisms/UserPage/UserPage';
import { AuthProvider, useAuth } from '../../../contexts/AuthContext';
import PrivateRoute from '../../Organisms/UserPage/PrivateRoute';
import AdminRoute from '../../Organisms/UserPage/AdminRoute';
import UserPageVisitForm from '../../Organisms/AdoptionVisit/UserPageVisitForm';
import UserPageVolunteerForm from '../../Organisms/VolunteerForm/UserPageVolunteerForm';
import { UserVisits } from '../../Organisms/AdoptionVisit/UserVisit';
import UserPagePaymentForm from '../../Organisms/PaymentForm/UserPagePaymentForm';
import UserPagePostForm from '../../Organisms/Posts/UserPagePostForm';
import AdministratorNavigation from '../AdministratorNavigation/AdministratorNavigation';

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
        {/* <Navigation  /> */}
        <AuthProvider>
          <Navigation props={{ isLogged }} makeNavigation={navigationArrayWithRoutes}/>
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
                  <MainPage />
                </Wrapper>
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
                  <Education />
                </Wrapper>
              </Route>
              <Route path="/howtohelp" component={PaymentForm} />
              {/* <AdminRoute path="/admin" component={AdministratorNavigation} /> */}
              <Route path="/about"></Route>
              <Route path="/contact"></Route>
              <PrivateRoute path="/useraccount" component={UserPage} />
              <Route path="/volunteerform" component={UserPageVolunteerForm} />
              <Route path="/adoptionvist" component={UserPageVisitForm} />
              <Route path="/myadoptionvisits" component={UserVisits} />
              <Route path="/payment" component={UserPagePaymentForm} />
              <Route path="/post" component={UserPagePostForm} />
              <Route path="/editprofile" component={UserPageEditProfile} />
            </AuthProvider>
          </Switch>
        </NavigationTemplate>
      </Router>
    </ThemeProvider>
  );
}

export default NavigationView;
