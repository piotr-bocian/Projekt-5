import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationView from '../components/templates/NavigationTemplate/NavigationTemplate';

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
    </ThemeProvider>
  );
}

export default App;