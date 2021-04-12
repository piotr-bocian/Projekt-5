import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimaShelterLogo } from '../../Atoms/Logo/AnimalShelterLogo';
import { FlexWrapper } from '../../../styles/stylesContainer/FlexWrapper';
import NavigationText from '../../Atoms/NavigationText/NavigationText';
import GridItemMenuWrapper from '../../../styles/stylesContainer/GridItemMenuWrapper';
import { GridItemRegistrationWrapper, StyledNavLink } from './Navigation.style';
import NavigationTextWithRoutes from '../../Molecules/NavigationTextAndRoutes/NavigationTextAndRoutes';
import TextSeparator from '../../Atoms/TextSeparator/TextSeparator';
import useWindowDimensions from '../../../hooks/useWindowDimensions/useWindowDimensions';
import HamburgerButton from '../../Atoms/HamburgerButton/HamburgerButton';


const Navigation = ({ makeNavigation, user=true }) => {
  const { height, width } = useWindowDimensions();
  const MOBILE_BREAKPOINT = 768;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <NavLink to="/" exact>
        <AnimaShelterLogo className="main-logo"/>
      </NavLink>

      <GridItemRegistrationWrapper>
        {user && (
          <>
            <StyledNavLink to="/registration">
              <NavigationText margin="0" mainText="Rejestracja" />
            </StyledNavLink>
            <TextSeparator />
          </>
        )}

        <StyledNavLink to="/login">
          <NavigationText mainText="Logowanie" />
        </StyledNavLink>

        {width <= MOBILE_BREAKPOINT &&
          <HamburgerButton setShowMenu={setShowMenu}/>
        }
      </GridItemRegistrationWrapper>

    {(showMenu || width > MOBILE_BREAKPOINT) &&
    <GridItemMenuWrapper>
      <FlexWrapper>
        {makeNavigation.map((nav, id) => {
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
    }
    </>
  );
};

export default Navigation;
