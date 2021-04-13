import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/styles';
import Navigation from '../../Organisms/Navigation/Navigation';
import GridContainerNavigationWrapper from '../../../styles/stylesContainer/GridContainerNavigationWrapper';
import PaymentForm from '../../Organisms/PaymentForm/PaymentForm';
import VisitForm from '../../Organisms/AdoptionVisit/AdoptionVisitForm';
import { Animals } from '../../Organisms/Animals.js/Animals';
import NewPosts from '../../Organisms/Posts/newPosts';
import LatestPosts from '../../Organisms/Posts/LatestPosts';
import AdotpionForm from '../../Organisms/AdotpionForm/AdotpionForm';
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
              <LatestPosts />
              <AdotpionForm />
            </Route>
          </Switch>
          <Switch>
            <Route path="/registration"></Route>
          </Switch>
          <Switch>
            <Route path="/login"></Route>
          </Switch>
          <Switch>
            <Route path="/news" exact> 
              {/* <PostForm /> */}
              <NewPosts />
            </Route>
            <Route path="/news/:id" component={OnePost} />
          </Switch>
          <Switch>
            <Route path="/animals">
              <Animals />
            </Route>
          </Switch>
          <Switch>
            <Route path="/adoption">
              <Wrapper>
                <VisitForm />
              </Wrapper>
            </Route>
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
