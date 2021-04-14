import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationView from '../components/templates/NavigationTemplate/NavigationTemplate';
import Footer from '../components/Organisms/Footer/Footer';
import AdministratorNavigation from '../components/templates/AdministratorNavigation/AdministratorNavigation';
import { AuthProvider, useAuth } from '../contexts/AuthContext';

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
  const { user } = useAuth();
  return (
    <ThemeProvider theme={theme}>
      {!user.isAdmin ? <NavigationView /> : <AdministratorNavigation />}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
