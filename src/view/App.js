import React from 'react';
import { ThemeProvider } from 'styled-components';
import NavigationView from '../components/templates/NavigationTemplate/NavigationTemplate';
import { theme } from '../Context/styles';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationView />
    </ThemeProvider>
  );
}

export default App;
