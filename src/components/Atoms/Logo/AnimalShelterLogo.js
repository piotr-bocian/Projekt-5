import styled from 'styled-components';
import logo from '../../../assets/logo/pet-house 1.png';

export const AnimaShelterLogo = styled.div`
  background: url(${logo});
  background-repeat: no-repeat;
  width: 130px;
  height: 140px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
