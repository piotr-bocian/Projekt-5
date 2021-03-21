import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../components/Organisms/SignUpInForms/SignUpForm';
import SignInForm from '../components/Organisms/SignUpInForms/SignInForm';

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
      {/* <SignUpForm /> */}
      <SignInForm />
    </Wrapper>
  );
}

export default App;
