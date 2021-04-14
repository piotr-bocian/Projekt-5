import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/styles';
import AdministratorViewTemplate from '../AdministratorViewTemplate/AdministratorViewTemplate';
import GridContainerNavigationWrapper from '../../../styles/stylesContainer/GridContainerNavigationWrapper';
import Navigation from '../../Organisms/Navigation/Navigation';
import { administratorNavigation } from '../../../helpers/navigationNamesAndRoutes/administratorNavigation';
import { AnimalsForAdoption as Title } from '../../Atoms/HeaderAnimalsForAdoption/HeaderAnimalsForAdoption';
import { administratorPaymentConfig } from '../../../Config/administratorViewConfigFile';
import AdministratorPayment from '../../Organisms/AdministratorPayment/AdministratorPayment';
import { administratorAnimalsConfig } from '../../../Config/animalViewConfigFile';
import { administratorAdoptionConfig } from '../../../Config/adoptionFormAdministratorConfig';
import { administratorVisitsConfig } from '../../../Config/adoptionVisitConfigFile';
import { administratorPostConfig } from '../../../Config/postConfigFile';
import { administratorVolunteerFormConfig } from '../../../Config/administratorVolunteerFormConfig';
import { administratorUsersConfig } from '../../../Config/administratorUsersConfigFile';
import AdministratorHomePage from '../../Organisms/AdministratorHomePage/AdministratorHomePage';
import PrivateRoute from '../../Organisms/UserPage/PrivateRoute';
import UserPage from '../../Organisms/UserPage/UserPage';
import UserPageEditProfile from '../../Organisms/EditProfile/UserPageEditProfile';

const NavigationTemplate = ({ children }) => {
  return (
    <>
      <GridContainerNavigationWrapper>
        <Navigation makeNavigation={administratorNavigation} user={false} />
      </GridContainerNavigationWrapper>
      {children}
    </>
  );
};

function AdministratorNavigation() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationTemplate>
        <Title style={{ textAlign: 'center', marginTop: '50px' }}>
          Panel Administratora
        </Title>
        <Switch>
          <Route path="/" exact>
            <AdministratorHomePage />
          </Route>
          <PrivateRoute path="/useraccount" component={UserPage} />
          <PrivateRoute path="/editprofile" component={UserPageEditProfile} />
          <Route path="/payments">
            <AdministratorViewTemplate
              administratorConfig={administratorPaymentConfig}
              componentName={<AdministratorPayment />}
            />
          </Route>

          <Route path="/shelteranimals">
            <AdministratorViewTemplate
              administratorConfig={administratorAnimalsConfig}
              componentName={<AdministratorPayment />}
            />
          </Route>
          <Route path="/forms">
            <AdministratorViewTemplate
              administratorConfig={administratorAdoptionConfig}
              componentName={<AdministratorPayment />}
            />
          </Route>
          <Route path="/adoptionvisit">
            <AdministratorViewTemplate
              administratorConfig={administratorVisitsConfig}
              componentName={<AdministratorPayment />}
            />
          </Route>
          <Route path="/posts">
            <AdministratorViewTemplate
              administratorConfig={administratorPostConfig}
              componentName={<AdministratorPayment />}
            />
          </Route>
          <Route path="/volunteers">
            <AdministratorViewTemplate
              administratorConfig={administratorVolunteerFormConfig}
              componentName={<AdministratorPayment />}
            />
          </Route>
          <Route path="/users">
            <AdministratorViewTemplate
              administratorConfig={administratorUsersConfig}
              componentName={<AdministratorPayment />}
            />
          </Route>
        </Switch>
      </NavigationTemplate>
    </ThemeProvider>
  );
}

export default AdministratorNavigation;
