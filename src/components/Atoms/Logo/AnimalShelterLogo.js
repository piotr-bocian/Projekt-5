import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/logo/LogoAndTitleSVG.svg';

export const AnimaShelterLogo = styled(Logo)`
  height: 100px;

  @media (max-width: 768px){
       width: 100%;
       height: auto;
 }
`;
