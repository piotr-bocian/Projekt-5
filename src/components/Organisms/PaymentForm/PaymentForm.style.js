import styled from 'styled-components';
export const Wrapper = styled.form`
  width: 30vw;
  padding: 2em;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 5vw auto;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  box-shadow: ${({ theme }) => theme.border.shadow};
  background-color: ${({ theme }) => theme.colors.white};
`;
