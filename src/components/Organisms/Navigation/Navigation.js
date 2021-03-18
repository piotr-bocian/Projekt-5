import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { AnimaShelterLogo } from '../../Atoms/Logo/AnimalShelterLogo';
import GridItemTitle from '../../Atoms/AnimalShelterTitle/AnimalShelterTitle';
import { FlexWrapper } from '../../stylesContainer/FlexWrapper';
import NavMenu from '../../Molecules/NavigationMenu/NavigationMenu';
import NavigationText from '../../Atoms/NavigationText/NavigationText';
import GridItemMenuWrapper from '../../stylesContainer/GridItemMenuWrapper';

const GridItemRegistrationWrapper = styled.div`
  align-self: start;
  justify-self: end;
  grid-column: 3/4;
  grid-row: 1/2;
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'activeLink',
})`
  text-decoration: none;
  &.activeLink {
    background-color: #aa90d7;
    transition: 0.5s;
    border-radius: 5px; 
  }
`;

const styles = { marginRight: 10, marginLeft: 10 };

const Navigation = () => {
  const animalTextMenu = [
    'Koty do adopcji',
    'Psy do adopcji',
    'Inne zwierzęta',
    'Zaginione/znalezione',
  ];
  const adoptionTextMenu = [
    'Koty do adopcji',
    'Jak przebiega adopcja',
    'Zanim zdecydujesz się na psa',
    'Zanim zdecydujesz się na zwierzę',
    'Wirtualna adopcja',
  ];
  const howToHelpTextMenu = [
    'Pomoc rzeczowa',
    'Pomoc finansowa',
    'Wolonariat',
    'Wirtualna adopcja',
  ];
  return (
    <>
      <NavLink to="/">
        <AnimaShelterLogo />
      </NavLink>

      <GridItemTitle />

      <GridItemRegistrationWrapper>
        <StyledNavLink to="/registration" exact>
          <NavigationText mainText="Rejestracja/Logowanie" />
        </StyledNavLink>
      </GridItemRegistrationWrapper>

      <GridItemMenuWrapper>
        <FlexWrapper>
          <StyledNavLink to="/news" exact>
            <NavigationText mainText="Aktualności" />
          </StyledNavLink>
          <StyledNavLink to="/animals" exact>
            <NavMenu mainText="Zwierzęta" menuIterator={animalTextMenu} />
          </StyledNavLink>
          <StyledNavLink to="/adoption" exact>
            <NavMenu mainText="Adopcja" menuIterator={adoptionTextMenu} />
          </StyledNavLink>
          <StyledNavLink to="/education" exact>
            <NavigationText mainText="Edukacja" />
          </StyledNavLink>
          <StyledNavLink to="/howtohelp" exact>
            <NavMenu mainText="Jak pomóc" menuIterator={howToHelpTextMenu} />
          </StyledNavLink>
          <StyledNavLink to="/about" exact>
            <NavigationText mainText="O nas" />
          </StyledNavLink>
          <StyledNavLink to="/contact" exact>
            <NavigationText mainText="Kontakt" />
          </StyledNavLink>

          <InstagramIcon style={styles} />
          <FacebookIcon />
        </FlexWrapper>
      </GridItemMenuWrapper>
    </>
  );
};

export default Navigation;
