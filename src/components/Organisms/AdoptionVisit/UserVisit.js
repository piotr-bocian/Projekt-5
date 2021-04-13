import React , { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PetsIcon from '@material-ui/icons/Pets';
import AnimalLoader from '../../../components/Loaders/AnimalLoader/AnimalLoader';

import { Wrapper, ConfirmationWrapper, confirmationHeader } from './AdoptionVisitForm.style';

 export function UserVisits () {

    const [visits, setVisits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const url = 'https://best-animal-shelter.herokuapp.com/api/visits/me';
    const authToken = window.localStorage.getItem('x-auth-token');

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
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
            setIsLoading(false);
        };
    
        fetchData();
    },[])
    
    return isLoading ? (
        <div><AnimalLoader /></div>) :
        (
        <div style={{ padding: '2em 5em' }}>
            <Grid container spacing={10}>
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
                        </Wrapper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}