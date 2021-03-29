import React from 'react';
import styled from 'styled-components';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationView from '../components/templates/NavigationTemplate/NavigationTemplate';
import VolunteerForm from '../components/Organisms/VolunteerForm/VolunteerForm';



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
      <NavigationView />
    </ThemeProvider>
  );

}

export default App;
