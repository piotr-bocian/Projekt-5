import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnimaShelterLogo } from '../../Atoms/Logo/AnimalShelterLogo';
import { FlexWrapper } from '../../stylesContainer/FlexWrapper';
import NavigationText from '../../Atoms/NavigationText/NavigationText';
import GridItemMenuWrapper from '../../stylesContainer/GridItemMenuWrapper';
import {
  GridItemRegistrationWrapper,
  StyledNavLink,
  StyledFacebookIcon,
  StyledInstagramIcon,
} from './Navigation.style';
import NavigationTextWithRoutes from '../../Molecules/NavigationTextAndRoutes/NavigationTextAndRoutes';
import TextSeparator from '../../Atoms/TextSeparator/TextSeparator';

const Navigation = () => {
  const navigationArrayWithRoutes = [
    { name: 'Aktualności', route: '/news' },
    { name: 'Zwierzęta', route: '/animals' },
    { name: 'Adopcja', route: '/adoption' },
    { name: 'Edukacja', route: '/education' },
    { name: 'Jak pomóc', route: '/howtohelp' },
    { name: 'O nas', route: '/about' },
    { name: 'Kontakt', route: '/contact' },
  ];

  return (
    <>
      <NavLink to="/" exact>
        <AnimaShelterLogo />
      </NavLink>

      <GridItemRegistrationWrapper>
        <StyledNavLink to="/registration">
          <NavigationText mainText="Rejestracja" />
        </StyledNavLink>
        <TextSeparator />
        <StyledNavLink to="/login">
          <NavigationText mainText="Logowanie" />
        </StyledNavLink>
      </GridItemRegistrationWrapper>

      <GridItemMenuWrapper>
        <FlexWrapper>
          {navigationArrayWithRoutes.map((nav, id) => {
            return (
              <NavigationTextWithRoutes key={id} text={nav.name} route={nav.route} />
            );
          })}
          <StyledInstagramIcon />
          <StyledFacebookIcon />
        </FlexWrapper>
      </GridItemMenuWrapper>
    </>
  );
};

export default Navigation;
