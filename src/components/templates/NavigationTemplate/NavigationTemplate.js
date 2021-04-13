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
import AdotpionForm from '../../Organisms/AdotpionForm/AdotpionForm';
import { MainPage } from '../../Organisms/MainPage/MainPage';
import { AnimalPage } from '../../Organisms/AnimalPage/AnimalPage';
import SignInForm from '../../Organisms/SignUpInForms/SignInForm';
import SignUpForm from '../../Organisms/SignUpInForms/SignUpForm';
import AddAnimalForm from '../../Organisms/AddAnimal/AddAnimalForm';
import Education from '../../Organisms/Education/Education';
import VisitForm from '../../Organisms/AdoptionVisit/AdoptionVisitForm';
import NewPosts from '../../Organisms/Posts/newPosts';
import LatestPosts from '../../Organisms/Posts/LatestPosts';
import OnePost from '../../Organisms/Posts/OnePost';
import PostForm from '../../Organisms/Posts/postForm';


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
      <Router>
        <NavigationTemplate>
          <Switch>
            <Route path="/" exact>
              {/* odpowiedni komponent */}
              <MainPage />
              {/* <Wrapper>
                <AdotpionForm />
              </Wrapper> */}
              <LatestPosts />
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
            <Route path="/news" exact> 
              {/* <PostForm /> */}
              <NewPosts />
            </Route>
            <Route path="/news/:id" component={OnePost} />
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
                <Education />
                {/* <VolunteerForm /> */}
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
