import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

=======
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationView from '../components/templates/NavigationTemplate/NavigationTemplate';
>>>>>>> development

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#0292c9',
      main: '#0093CA',
      dark: '#0274A2',
    },
  },
});

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
<<<<<<< HEAD
    <Wrapper>
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </Wrapper>
=======
    <ThemeProvider theme={theme}>
      <NavigationView />
    </ThemeProvider>
>>>>>>> development
  );
}

export default App;
