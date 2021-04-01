import React from 'react';
import { OptionsWrapper } from './UserNavigationPage.style';
import NavigationTextWithRoutes from '../../Molecules/NavigationTextAndRoutes/NavigationTextAndRoutes';

const UserNavigation = () => {
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
    </>
  );
};

export default UserNavigation;
