import React from 'react';
import UserCard from './UserCard';
import { PageWrapper, NavigationWrapper } from './UserNavigationPage.style';
import UserNavigation from './UserNavigation';

function UserNavigationPage({ props }) {
  return (
      <PageWrapper>
        <h2>
          STRONA UŻYTKOWNIKA - {props.name} {props.lastName}
        </h2>
        <NavigationWrapper>
          <UserCard props={props}/>
          <UserNavigation />
        </NavigationWrapper>
      </PageWrapper>
  );
};

export default UserNavigationPage;