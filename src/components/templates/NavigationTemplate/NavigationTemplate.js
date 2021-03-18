import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
 } from 'react-router-dom';
 import styled from 'styled-components';
 import { Typography } from '@material-ui/core';
 import AppleIcon from '@material-ui/icons/Apple';
import Navigation from '../../Organisms/Navigation/Navigation';
import GridContainerNavigationWrapper from '../../stylesContainer/GridContainerNavigationWrapper';

 const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100vh;
 `;


const NavigationTemplate = ({children})=>{
   return(
      <GridContainerNavigationWrapper>
      <Navigation />
      {children}
      </GridContainerNavigationWrapper>
   )
}

function NavigationView() {
   return (
     <Router>
       <NavigationTemplate>
       <Switch>
         <Route path="/"></Route>
       </Switch>
       <Switch>
         <Route path="/registration"></Route>
       </Switch>
       <Switch>
         <Route path="/news"></Route>
       </Switch>
       <Switch>
         <Route path="/animals"></Route>
       </Switch>
       <Switch>
         <Route path="/adoption"></Route>
       </Switch>
       <Switch>
         <Route path="/education"></Route>
       </Switch>
       <Switch>
         <Route path="/howtohelp"></Route>
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
   );
 }

export default NavigationView;