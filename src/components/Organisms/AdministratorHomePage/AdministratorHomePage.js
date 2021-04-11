import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const AdministratorSectionTitles = styled.h3`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 1.3em;
  color: black;
  text-align: left;
  margin-left: 40px;
  margin-top: 30px;
`;

const AdministratorHomePage = () => {
  return (
    <div>
      <>
        <Grid
          style={{ marginTop: '50px' }}
          container
          direction="row"
          spacing={3}
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            container
            xs={12}
            sm={4}
            spacing={3}
            justify="space-around"
            alignItems="baseline"
          >
            <AdministratorSectionTitles>
              Dodaj zwierzę
            </AdministratorSectionTitles>
          </Grid>

          <Grid
            item
            container
            xs={12}
            sm={4}
            spacing={3}
            justify="space-around"
            alignItems="baseline"
          >
            <AdministratorSectionTitles>
              Dodaj nowy Post
            </AdministratorSectionTitles>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={4}
            spacing={3}
            justify="space-around"
            alignItems="baseline"
          >
            <AdministratorSectionTitles>
              Dodaj Pracownika
            </AdministratorSectionTitles>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default AdministratorHomePage;
