import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/styles';
import Navigation from '../../Organisms/Navigation/Navigation';
import GridContainerNavigationWrapper from '../../../styles/stylesContainer/GridContainerNavigationWrapper';
import AdoptionVisitPage from '../../Organisms/AdoptionVisit/AdoptionVisitPage';
import { navigationArrayWithRoutes } from '../../../helpers/navigationNamesAndRoutes/userNavigation';
import { Animals } from '../../Organisms/Animals/Animals';
import {AnimalPage} from '../../Organisms/AnimalPage/AnimalPage';
import { MainPage } from '../../Organisms/MainPage/MainPage';
import SignInForm from '../../Organisms/SignUpInForms/SignInForm';
import SignUpForm from '../../Organisms/SignUpInForms/SignUpForm';
import Education from '../../Organisms/Education/Education';
import HelpPage from '../../Organisms/HelpPage/HelpPage';
import UserPageEditProfile from '../../Organisms/EditProfile/UserPageEditProfile';
import NewPosts from '../../Organisms/Posts/newPosts';
import LatestPosts from '../../Organisms/Posts/LatestPosts';
import OnePost from '../../Organisms/Posts/OnePost';
import Contact from '../../Organisms/Contact/Contact';
import UserPage from '../../Organisms/UserPage/UserPage';
import { AuthProvider } from '../../../contexts/AuthContext';
import PrivateRoute from '../../Organisms/UserPage/PrivateRoute';
import UserPageVisitForm from '../../Organisms/AdoptionVisit/UserPageVisitForm';
import UserPageVolunteerForm from '../../Organisms/VolunteerForm/UserPageVolunteerForm';
import { UserVisits } from '../../Organisms/AdoptionVisit/UserVisit';
import UserPagePaymentForm from '../../Organisms/PaymentForm/UserPagePaymentForm';
import UserPagePostForm from '../../Organisms/Posts/UserPagePostForm';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;
const NavigationTemplate = ({ children }) => {
  return (
    <>
      <GridContainerNavigationWrapper>
          <Navigation
            makeNavigation={navigationArrayWithRoutes}
          />
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
            <AuthProvider>
              <Route path="/" exact>
                <Wrapper>
                  <MainPage />
                </Wrapper>
                <LatestPosts />
              </Route>
              <Route path="/registration">
                <SignUpForm />
              </Route>
              <Route path="/login">
                <SignInForm />
              </Route>
              <Route path="/news" exact> 
                <NewPosts />
              </Route>
              <Route path="/news/:id" component={OnePost} />
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
              <Route path="/howtohelp" component={HelpPage} />
              <Route path="/about">elo, to my :)</Route>
              <PrivateRoute path="/useraccount" component={UserPage} />
              <PrivateRoute path="/volunteerform" component={UserPageVolunteerForm} />
              <Route path="/adoptionvist" component={UserPageVisitForm} />            
              <Route path="/contact" component={Contact}></Route>
              <PrivateRoute path="/myadoptionvisits" component={UserVisits} />
              <PrivateRoute path="/payment" component={UserPagePaymentForm} />
              <PrivateRoute path="/post" component={UserPagePostForm} />
              <PrivateRoute path="/editprofile" component={UserPageEditProfile} />
            </AuthProvider>
          </Switch>
        </NavigationTemplate>
    </ThemeProvider>
  );
}

export default NavigationView;
