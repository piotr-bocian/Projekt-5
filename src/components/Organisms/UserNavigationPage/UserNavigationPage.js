import React from 'react';
import { OptionsWrapper, PageWrapper, NavigationWrapper } from './UserNavigationPage.style';
import NavigationTextWithRoutes from '../../Molecules/NavigationTextAndRoutes/NavigationTextAndRoutes';
import UserCard from './UserCard'

const UserNavigationPage = ({ props }) => {
  const navigationArrayWithRoutes = [
    { name: 'Wypełnij formularz wolontariusza', route: '/volunteerform' },
    { name: 'Moje płatności', route: '/mypayments' },
    { name: 'Umów wizytę adopcyjną', route: '/adoptionvist' },
    { name: 'Moje wizyty adopcyjne', route: '/myadoptionvisits' },
    { name: 'Dodaj post', route: '/post' },
    { name: 'Moje posty', route: '/myposts' },
  ];

  return (
    <>
      <PageWrapper>
        <h2>
          STRONA UŻYTKOWNIKA - {props.name} {props.lastName}
        </h2>
        <NavigationWrapper>
          <UserCard props={props}/>
          <OptionsWrapper>
          {navigationArrayWithRoutes.map((nav, id) => {
            return (
              <NavigationTextWithRoutes
                key={id}
                text={nav.name}
                route={nav.route}
              />
            );
          })}
        </OptionsWrapper>
        </NavigationWrapper>
      </PageWrapper>
    </>
  );
};

export default UserNavigationPage;
