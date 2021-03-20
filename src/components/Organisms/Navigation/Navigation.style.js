import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export const GridItemRegistrationWrapper = styled.div`
  align-self: start;
  justify-self: end;
  grid-column: 3/4;
  grid-row: 1/2;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'activeLink',
})`
  text-decoration: none;
  &.activeLink {
    background-color: ${({ theme }) => theme.colors.clickedNav};
    transition: 0.5s;
    border-radius: 5px;
  }
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in;
  }
`;

export const StyledInstagramIcon = styled(InstagramIcon)`
  margin-right: 10px;
  margin-left: 10px;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in;
  }
`;
