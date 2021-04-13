import React, { useState, useEffect } from 'react';
import { AnimalsForAdoption } from '../../Atoms/HeaderAnimalsForAdoption/HeaderAnimalsForAdoption.js';
import { WaitingFiltersFrame } from '../../Molecules/WaitingFiltersFrame/WaitingFiltersFrame.js';
import { AllAnimalsGrid } from '../../Molecules/AnimalsGrid/AnimalsGrid.js';
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
import AnimalLoader from '../../Loaders/AnimalLoader/AnimalLoader';
import useHttp from '../../../hooks/useHttp/useHttp';
import CircularIndeterminate from '../../Loaders/CircularLoader/CircularLoader.js';
import styled from 'styled-components';
import gsap from 'gsap';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;

export function Animals() {
  // const classes = useStyles();
  const [animals, setAnimals] = useState([]);
  // const [selectedButton, setSelectedButton] = useState('');

  const handler = useHttp(
    `https://best-animal-shelter.herokuapp.com/api/animals`,
    httpMethods.GET
  );

  useEffect(() => {
    handler.makeHttpRequest().then((result) => {
      setAnimals(result.animals.results);
    });
  }, []);
  return (handler.isLoading = true ? (
      <AnimalLoader />
  ) : (
    <>
      <AnimalsForAdoption>ZWIERZĘTA DO ADOPCJI</AnimalsForAdoption>
      <WaitingFiltersFrame setAnimals={setAnimals}></WaitingFiltersFrame>
      <AllAnimalsGrid animals={animals}></AllAnimalsGrid>
    </>
  ));
}
