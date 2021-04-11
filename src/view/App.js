import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../styles/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationView from '../components/templates/NavigationTemplate/NavigationTemplate';
import Footer from '../components/Organisms/Footer/Footer';
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
    <ThemeProvider theme={theme}>
      <NavigationView />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
