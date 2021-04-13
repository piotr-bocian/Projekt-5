import React , { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PetsIcon from '@material-ui/icons/Pets';
import { Button } from '@material-ui/core';

import AnimalLoader from '../../../components/Loaders/AnimalLoader/AnimalLoader';
import { Wrapper, ConfirmationWrapper, confirmationHeader } from './AdoptionVisitForm.style';
import { PageWrapper, NavWrapper, BodyWrapper } from './UserPageVisitForm.style';
import BackButton from '../../Atoms/UserNavigationPage/BackButton';

 export function UserVisits ({ link }) {

    const [visits, setVisits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const url = 'https://best-animal-shelter.herokuapp.com/api/visits/me/';
    const authToken = window.localStorage.getItem('x-auth-token');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-auth-token': authToken,
                },
            });
            const data = await response.json();
            setVisits(data.results);
        }
        fetchData(); 
        return fetchData();     
    },);

    const disableButton = (date) => {
        let d = Date.parse(date);
        let today = Date.parse(new Date());
        let disable = (d <= today);
        return disable;
    }

    const handleClick = visitID => {

        const requestOptions = {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': authToken,
        },
        };
      
        fetch(url + visitID, requestOptions).then((response) => {
          return response.json();
        }).then((result) => {
        });
      }
    
    return isLoading ? (
        <div></div>) :
        (
        <PageWrapper>
            <NavWrapper>
                <div><BackButton link={link}/></div>
                <h2> Moje wizyty adopcyjne </h2>
            </NavWrapper>
            {visits.length === 0 ? (<></>):(
            <BodyWrapper>
                <div style={{ padding: '0 10em' }}>
                    <Grid container spacing={10} justify="center">
                        {visits.map(item => (
                            <Grid item key={item._id}>
                                <Wrapper>
                                    <h2 style={confirmationHeader}>WIZYTA ADOPCYJNA</h2>
                                    <ConfirmationWrapper>
                                        {item.animalID ? (<><PetsIcon color="primary"/> <p>Imię zwierzaka: <span>{item.animalID}</span></p></>):null}
                                        <PetsIcon color="primary"/> <p>Data wizyty: <span>{item.visitDate.substring(0, 10)}</span></p>
                                        <PetsIcon color="primary"/> <p>Godzina wizyty: <span >{item.visitTime}</span></p>
                                        <PetsIcon color="primary"/> <p>Czas trwania wizyty: <span >{item.duration} minut</span></p>
                                    </ConfirmationWrapper>
                                    <div style={{textAlign:'center'}}>
                                        <Button 
                                            color='primary'
                                            variant='contained' 
                                            type='submit'
                                            disabled= {disableButton(item.visitDate)}
                                            onClick={() => { handleClick(item._id) }}
                                        >
                                        USUŃ
                                        </Button>
                                    </div>
                                </Wrapper>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </BodyWrapper> )}
        </PageWrapper>
    );
}