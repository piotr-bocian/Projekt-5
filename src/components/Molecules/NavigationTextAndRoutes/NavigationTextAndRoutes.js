import React from 'react';
import { StyledNavLink } from '../../Organisms/Navigation/Navigation.style';
import NavigationText from '../../Atoms/NavigationText/NavigationText';

const NavigationTextWithRoutes = ({ route, text }) => {
  return (
    <StyledNavLink to={route}>
      <NavigationText mainText={text} />
    </StyledNavLink>
  );
};

export default NavigationTextWithRoutes;
