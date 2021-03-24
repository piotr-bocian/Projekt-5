import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../components/Organisms/SignUpInForms/SignUpForm';
import SignInForm from '../components/Organisms/SignUpInForms/SignInForm';
import SignInTxtFields from '../components/Molecules/SignUpInMolecules/signInTextFields'
import { ThemeProvider, createMuiTheme } from '@material-ui/core';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const theme = createMuiTheme({
  palette:{
    primary:{
      light: '#0292c9',
      main: '#0093CA',
      dark: '#0274A2'
    }
  }
});

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        {/* <SignUpForm /> */}
        <SignInForm />
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
