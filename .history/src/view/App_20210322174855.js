import React from 'react';
import styled from 'styled-components';
import VolunteerForm from '../components/Organisms/AdotpionForm/VolunteerForm';
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
    <ThemeProvider theme={theme}>
      <Wrapper>
        <VolunteerForm />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
