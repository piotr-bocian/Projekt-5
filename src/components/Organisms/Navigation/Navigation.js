import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnimaShelterLogo } from '../../Atoms/Logo/AnimalShelterLogo';
import { FlexWrapper } from '../../../styles/stylesContainer/FlexWrapper';
import NavigationText from '../../Atoms/NavigationText/NavigationText';
import GridItemMenuWrapper from '../../../styles/stylesContainer/GridItemMenuWrapper';
import { GridItemRegistrationWrapper, StyledNavLink } from './Navigation.style';
import NavigationTextWithRoutes from '../../Molecules/NavigationTextAndRoutes/NavigationTextAndRoutes';
import TextSeparator from '../../Atoms/TextSeparator/TextSeparator';
import { navigationArrayWithRoutes } from '../../../helpers/navigationNamesAndRoutes/userNavigation';

const Navigation = (makeNavigation = navigationArrayWithRoutes) => {
  const arrayWithRoutes = makeNavigation
  console.log(arrayWithRoutes)
  return (
    <>
      <NavLink to="/" exact>
        <AnimaShelterLogo />
      </NavLink>

      <GridItemRegistrationWrapper>
        <StyledNavLink to="/registration">
          <NavigationText margin="0" mainText="Rejestracja" />
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
              <NavigationTextWithRoutes
                key={id}
                text={nav.name}
                route={nav.route}
              />
            );
          })}
        </FlexWrapper>
      </GridItemMenuWrapper>
    </>
  );
};

export default Navigation;
