import React , { useState, useEffect } from 'react';
import { AnimalsForAdoption } from '../../Atoms/HeaderAnimalsForAdoption/HeaderAnimalsForAdoption.js';
import { WaitingFiltersFrame } from '../../Molecules/WaitingFiltersFrame/WaitingFiltersFrame.js';
import { AllAnimalsGrid } from '../../Molecules/AnimalsGrid/AnimalsGrid.js';
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
import useHttp from '../../../hooks/useHttp/useHttp';


export function Animals () {
    // const classes = useStyles();
    const [animals, setAnimals] = useState([]);
    // const [selectedButton, setSelectedButton] = useState('');

    const handler = useHttp(
        `https://best-animal-shelter.herokuapp.com/api/animals`,
        httpMethods.GET
    );    

    useEffect(() => {
        handler.makeHttpRequest()
            .then((result) => {                
                    setAnimals(result.animals.results);
                    console.log('elo')
            });
    }, [])


    return handler.isLoading ? (
        <div data-testid="loading"></div>) :
        (
        <div className='animals'>
            <AnimalsForAdoption>ZWIERZĘTA DO ADOPCJI</AnimalsForAdoption>
            <WaitingFiltersFrame setAnimals={setAnimals}></WaitingFiltersFrame>
            <AllAnimalsGrid animals={animals}></AllAnimalsGrid>
        </div>
    );
};