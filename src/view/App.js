import React from 'react';
import AdministratorPaymentsTemplate from '../components/templates/AdministratorPaymentsTemplate/AdministratorPaymentsTemplate';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/styles';
import NavigationView from '../components/templates/NavigationTemplate/NavigationTemplate';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AdministratorPaymentsTemplate />
      </ThemeProvider>
    </>
  );
}

export default App;
