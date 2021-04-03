import React from 'react';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../styles/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationView from '../components/templates/NavigationTemplate/NavigationTemplate';
import AdministratorNavigation from '../components/templates/AdministratorNavigation/AdministratorNavigation';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#0292c9',
      main: '#0093CA',
      dark: '#0274A2',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
       <AdministratorNavigation />
       {/* <NavigationView/> */}
      </ThemeProvider>
    </>
  );
}

export default App;