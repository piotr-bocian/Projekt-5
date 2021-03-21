import React from 'react';
import styled from 'styled-components';
import { Animals } from '../components/Organisms/Animals.js/Animals.js'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Animals></Animals>
    </Wrapper>
  );
}

export default App;
