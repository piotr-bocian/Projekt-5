import styled from 'styled-components';
import paw from '../../../assets/paw/paw-black-shape.png'


export const AnimalPaw = styled.div`
   background: url(${paw});
   background-repeat: no-repeat;
   object-fit: contain;
   width: 1.3em;
   height: 1.3em;
   display: inline-block;
   margin-left: 10px;
`;