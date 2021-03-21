import React from 'react';
import styled from 'styled-components';
import { RegistrationForm } from '../components/Organisms/RegistrationForm/RegistrationForm';

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
      <RegistrationForm />
      {/* <VolunteerForm /> */}
    </Wrapper>
  );
}

export default App;
