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
import GridContainerNavigationWrapper from '../../stylesContainer/GridContainerNavigationWrapper';
import GridItemMenuWrapper from '../../stylesContainer/GridItemMenuWrapper';

const GridItemRegistrationWrapper = styled.div`
  align-self: start;
  justify-self: end;
  grid-column: 3/4;
  grid-row: 1/2;
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
    <GridContainerNavigationWrapper>
      <NavLink to="/">
        <AnimaShelterLogo />
      </NavLink>

      <GridItemTitle />

      <GridItemRegistrationWrapper>
        <NavLink to="/registration" exact>
          <NavigationText mainText="Rejestracja/Logowanie" />
        </NavLink>
      </GridItemRegistrationWrapper>

      <GridItemMenuWrapper>
        <FlexWrapper>
          <NavLink to="/news" exact>
            <NavigationText mainText="Aktualności" />
          </NavLink>
          <NavLink to="/animals" exact>
            <NavMenu mainText="Zwierzęta" menuIterator={animalTextMenu} />
          </NavLink>
          <NavLink to="/adoption" exact>
            <NavMenu mainText="Adopcja" menuIterator={adoptionTextMenu} />
          </NavLink>
          <NavLink to="/education" exact>
            <NavigationText mainText="Edukacja" />
          </NavLink>
          <NavLink to="/howtohelp" exact>
            <NavMenu mainText="Jak pomóc" menuIterator={howToHelpTextMenu} />
          </NavLink>
          <NavLink to="/about" exact>
            <NavigationText mainText="O nas" />
          </NavLink>
          <NavLink to="/contact" exact>
            <NavigationText mainText="Kontakt" />
          </NavLink>

          <InstagramIcon style={styles} />
          <FacebookIcon />
        </FlexWrapper>
      </GridItemMenuWrapper>
    </GridContainerNavigationWrapper>
  );
};

export default Navigation;
