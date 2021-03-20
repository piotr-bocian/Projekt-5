import React from 'react';
import styled from 'styled-components';
import VolunteerForm from '../components/Organisms/VolunteerForm/VolunteerForm';

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
      <VolunteerForm />
    </Wrapper>
  );
}

export default App;
