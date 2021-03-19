import styled from 'styled-components';
import { Label } from '../../Atoms/Label/Label';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 30px;
${Label} {
  margin: 10px auto;
}
`;