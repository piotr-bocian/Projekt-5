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
                console.log(result)
                result.animals.results.forEach(e => {
                        setAnimals(a =>[...a, e])  
                })
            });
    } , [])


    console.log(animals);
    return handler.isLoading ? (
        <div></div>) :
        (
        <div>
            <AnimalsForAdoption>ZWIERZĘTA DO ADOPCJI</AnimalsForAdoption>
            <WaitingFiltersFrame></WaitingFiltersFrame>
            <AllAnimalsGrid animals={animals}></AllAnimalsGrid>
        </div>
    );
};