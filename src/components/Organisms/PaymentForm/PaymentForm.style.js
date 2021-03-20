import styled from 'styled-components';
export const Wrapper = styled.form`
  width: 20vw;
  padding: 2em;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;
