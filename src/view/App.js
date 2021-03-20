import React from 'react';
import { ThemeProvider } from 'styled-components';
import NavigationView from '../components/templates/NavigationTemplate/NavigationTemplate';
import { theme } from '../Context/styles';


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavigationView />
      </ThemeProvider>
    </div>
  );
}

export default App;
