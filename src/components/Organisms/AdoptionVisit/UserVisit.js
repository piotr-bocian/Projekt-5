import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PetsIcon from '@material-ui/icons/Pets';
import { Button } from '@material-ui/core';

import { Wrapper, ConfirmationWrapper, confirmationHeader } from './AdoptionVisitForm.style';
import { PageWrapper, NavWrapper, BodyWrapper } from './UserPageVisitForm.style';
import BackButton from '../../Atoms/UserNavigationPage/BackButton';
import DogLoader from '../../Loaders/NewLoader/DogLoader';

export function UserVisits() {
  const [visits, setVisits] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [method, setMethod] = useState('GET');
  const [visitId, setVisitId] = useState('');
  const url = 'https://best-animal-shelter.herokuapp.com/api/visits/me/';
  const authToken = window.localStorage.getItem('x-auth-token');

  useEffect(() => {
    async function fetchData() {
      setMethod('GET');
      setLoading(true);

      const response = await fetch(url + visitId, {
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': authToken,
        },
      });

      const data = await response.json();
      if (!data.results) {
        setVisits([]);
      } else {
        setVisits(data.results);
      }
      setVisitId('');
    }
    fetchData();
    setLoading(false);
  }, [authToken, method, visitId]);

  const disableButton = (date) => {
    let d = Date.parse(date);
    let today = Date.parse(new Date());
    let disable = d <= today;
    return disable;
  };

  const handleClick = (visitID) => {
    setMethod('DELETE');
    setVisitId(visitID);
  };

  return isLoading ? (
    <DogLoader />
  ) : (
    <PageWrapper>
      <NavWrapper>
        <div>
          <BackButton link={{link:"/useraccount"}} />
        </div>
        <h2> Moje wizyty adopcyjne </h2>
      </NavWrapper>
      {visits.length === 0 ? (
        <></>
      ) : (
        <BodyWrapper>
          <div style={{ padding: '0 10em' }}>
            <Grid container spacing={10} justify="center">
              {visits.map((item) => (
                <Grid item key={item._id}>
                  <Wrapper>
                    <h2 style={confirmationHeader}>WIZYTA ADOPCYJNA</h2>
                    <ConfirmationWrapper>
                      <PetsIcon color="primary" />{' '}
                      <p>
                        Data wizyty:{' '}
                        <span>{item.visitDate.substring(0, 10)}</span>
                      </p>
                      <PetsIcon color="primary" />{' '}
                      <p>
                        Godzina wizyty: <span>{item.visitTime}</span>
                      </p>
                      <PetsIcon color="primary" />{' '}
                      <p>
                        Czas trwania wizyty: <span>{item.duration} minut</span>
                      </p>
                    </ConfirmationWrapper>
                    <div style={{ textAlign: 'center' }}>
                      <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={disableButton(item.visitDate)}
                        onClick={() => {
                          handleClick(item._id);
                        }}
                      >
                        USUŃ
                      </Button>
                    </div>
                  </Wrapper>
                </Grid>
              ))}
            </Grid>
          </div>
        </BodyWrapper>
      )}
    </PageWrapper>
  );
}
