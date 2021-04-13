import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../styles/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationView from '../components/templates/NavigationTemplate/NavigationTemplate';
import Footer from '../components/Organisms/Footer/Footer';
import AdministratorNavigation from '../components/templates/AdministratorNavigation/AdministratorNavigation';











import AnimalLoader from '../components/Loaders/AnimalLoader/AnimalLoader';
import { Center } from '../components/templates/AdministratorViewTemplate/AdministratorViewTemplate.styles';
import styled from 'styled-components';
import paw from '../assets/catAndDogLoader/Loader_Animal_Sheltercat_dog.svg';

export const AnimalPaw = styled.div`
  background: url(${paw});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 50vh;
`;

// export const AnimalPaw = styled.img.attrs({
//   src: paw,
// })

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
      <Router>
        <NavigationView />
        {/* <AdministratorNavigation /> */}
      </Router>
      <Center>
        <AnimalLoader />
      </Center>
    </ThemeProvider>
  );
}

export default App;
