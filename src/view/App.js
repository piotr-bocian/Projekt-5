import React from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/styles';
import NavigationView from '../components/templates/NavigationTemplate/NavigationTemplate';
import AdministratorNavigation from '../components/templates/AdministratorNavigation/AdministratorNavigation';

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
