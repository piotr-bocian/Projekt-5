import { NavLink } from 'react-router-dom';
import { AnimaShelterLogo } from '../../Atoms/Logo/AnimalShelterLogo';
import { FlexWrapper } from '../../../styles/stylesContainer/FlexWrapper';
import NavigationText from '../../Atoms/NavigationText/NavigationText';
import GridItemMenuWrapper from '../../../styles/stylesContainer/GridItemMenuWrapper';
import { GridItemRegistrationWrapper, StyledNavLink } from './Navigation.style';
import NavigationTextWithRoutes from '../../Molecules/NavigationTextAndRoutes/NavigationTextAndRoutes';
import TextSeparator from '../../Atoms/TextSeparator/TextSeparator';
import { useAuth } from '../../../contexts/AuthContext';

const Navigation = ({ props }) => {
  const navigationArrayWithRoutes = [
    { name: 'Aktualności', route: '/news' },
    { name: 'Zwierzęta', route: '/animals' },
    { name: 'Adopcja', route: '/adoption' },
    { name: 'Edukacja', route: '/education' },
    { name: 'Jak pomóc', route: '/howtohelp' },
    { name: 'O nas', route: '/about' },
    { name: 'Kontakt', route: '/contact' },
  ];

  const { isLogged, logout } = useAuth();


  return (
    <>
      <NavLink to="/" exact>
        <AnimaShelterLogo />
      </NavLink>

      {isLogged ? (
        <GridItemRegistrationWrapper>
        <StyledNavLink to="/useraccount">
          <NavigationText margin="0" mainText="Profil" />
        </StyledNavLink>
        <TextSeparator />
        <StyledNavLink to="/">
          <NavigationText mainText="Wyloguj" handleClick={ logout } />
        </StyledNavLink>
      </GridItemRegistrationWrapper>
      ):(
        <GridItemRegistrationWrapper>
        <StyledNavLink to="/registration">
          <NavigationText margin="0" mainText="Rejestracja" />
        </StyledNavLink>
        <TextSeparator />
        <StyledNavLink to="/login">
          <NavigationText mainText="Logowanie" />
        </StyledNavLink>
      </GridItemRegistrationWrapper>
      )}

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
    </>
  );
};

export default Navigation;
