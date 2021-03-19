import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnimaShelterLogo } from '../../Atoms/Logo/AnimalShelterLogo';
import GridItemTitle from '../../Atoms/AnimalShelterTitle/AnimalShelterTitle';
import { FlexWrapper } from '../../stylesContainer/FlexWrapper';
import NavMenu from '../../Molecules/NavigationMenu/NavigationMenu';
import NavigationText from '../../Atoms/NavigationText/NavigationText';
import GridItemMenuWrapper from '../../stylesContainer/GridItemMenuWrapper';
import {GridItemRegistrationWrapper, StyledNavLink, StyledFacebookIcon, StyledInstagramIcon} from './Navigation.style'


const Navigation = () => {
  const animalTextMenu = [
    { name: 'Koty do adopcji', route: 'cats' },
    { name: 'Psy do adopcji', route: 'dogs' },
    { name: 'Inne zwierzęta', route: 'others' },
    { name: 'Zaginione/znalezione', route: 'found' },
  ];
  const adoptionTextMenu = [
    { name: 'Jak przebiega adopcja', route: 'adoption101' },
    { name: 'Zanim zdecydujesz się na psa', route: 'about-dogs' },
    { name: 'Zanim zdecydujesz się na zwierzę', route: 'about-cats' },
    { name: 'Wirtualna adopcja', route: 'virtual-adoption' },
  ];
  const howToHelpTextMenu = [
    { name: 'Pomoc rzeczowa', route: 'material-assistane' },
    { name: 'Pomoc finansowa', route: 'financial-support' },
    { name: 'Wolonariat', route: 'voluntering' },
    { name: 'Wirtualna adopcja', route: 'virtual-adoption' },
  ];

  return (
    <>
      <NavLink to="/" exact>
        <AnimaShelterLogo />
        <GridItemTitle />
      </NavLink>

      <GridItemRegistrationWrapper>
        <StyledNavLink to="/registration">
          <NavigationText mainText="Rejestracja" />
        </StyledNavLink>
        <StyledNavLink to="/login">
          <NavigationText mainText="Logowanie" />
        </StyledNavLink>
      </GridItemRegistrationWrapper>

      <GridItemMenuWrapper>
        <FlexWrapper>
          <StyledNavLink to="/news">
            <NavigationText mainText="Aktualności" />
          </StyledNavLink>
          <StyledNavLink to="/animals">
            <NavMenu mainText="Zwierzęta" menuIterator={animalTextMenu} />
          </StyledNavLink>
          <StyledNavLink to="/adoption">
            <NavMenu mainText="Adopcja" menuIterator={adoptionTextMenu} />
          </StyledNavLink>
          <StyledNavLink to="/education">
            <NavigationText mainText="Edukacja" />
          </StyledNavLink>
          <StyledNavLink to="/howtohelp">
            <NavMenu mainText="Jak pomóc" menuIterator={howToHelpTextMenu} />
          </StyledNavLink>
          <StyledNavLink to="/about">
            <NavigationText mainText="O nas" />
          </StyledNavLink>
          <StyledNavLink to="/contact">
            <NavigationText mainText="Kontakt" />
          </StyledNavLink>

          <StyledInstagramIcon />
          <StyledFacebookIcon />
        </FlexWrapper>
      </GridItemMenuWrapper>
    </>
  );
};

export default Navigation;
