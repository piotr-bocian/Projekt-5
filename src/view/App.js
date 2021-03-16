import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Typography variant="h1">Hello world!</Typography>
      <AppleIcon style={{ fontSize: 130 }} />
    </Wrapper>
  );
}

export default App;
