import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { AnimaShelterLogo } from '../../Atoms/Logo/AnimalShelterLogo';
import GridTitle from '../../Atoms/AnimalShelterTitle/AnimalShelterTitle';
import { Wrapper } from '../../stylesContainer/FlexWrapper';
import NavMenu from '../../Molecules/NavigationMenu/NavigationMenu';
import NavigationText from '../../Atoms/NavigationText/NavigationText';
import GridNavigationWrapper from '../../stylesContainer/GridNavigationWrapper';
import GridWrapper from '../../stylesContainer/GridWrapper';

const RegistrationWrapper = styled.div`
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
    <GridNavigationWrapper>
      <AnimaShelterLogo />
      <GridTitle />

      <RegistrationWrapper>
        <NavigationText mainText="Rejestracja/Logowanie" />
      </RegistrationWrapper>

      <GridWrapper>
        <Wrapper>
          <NavigationText mainText="Aktualności" />
          <NavMenu mainText="Zwierzęta" menuIterator={animalTextMenu} />
          <NavMenu mainText="Adopcja" menuIterator={adoptionTextMenu} />
          <NavigationText mainText="Edukacja" />
          <NavMenu mainText="Jak pomóc" menuIterator={howToHelpTextMenu} />
          <NavigationText mainText="O nas" />
          <NavigationText mainText="Kontakt" />
          <InstagramIcon style={styles} />
          <FacebookIcon />
        </Wrapper>
      </GridWrapper>
    </GridNavigationWrapper>
  );
};

export default Navigation;
