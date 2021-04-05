import React, { useState, useEffect } from 'react';
// import { AnimalPageBackBtn } from '../../Atoms/AnimalPage/AnimalPageBackButton/AnimalPageBackBtn.js';
import { AnimalsForAdoption  } from '../../Atoms/HeaderAnimalsForAdoption/HeaderAnimalsForAdoption.js';
import { AnimalPagePhoto } from '../../Atoms/AnimalPage/AnimalPagePhoto/AnimalPagePhoto';
import { AnimalData } from '../../Atoms/AnimalPage/AnimalPageAnimalData/AnimalPageAnimalData';
import { AnimalName } from '../../Atoms/AnimalPage/AnimalPageAnimalName/AnimalPageAnimalName';


export function AnimalPage(match) {

    const [animal, setAnimal] = useState({});

    useEffect(() => {
        fetchAnimal();
    }, []);

    const animalId = match.match.params.id;

    const fetchAnimal = async () => {
        const fetchAnimal = await fetch(`https://best-animal-shelter.herokuapp.com/api/animals/${animalId}`);
        const animal = await fetchAnimal.json();
        setAnimal(animal);
    }

    function AnimalDetails (props) {
       return props.animal ?
        <div>
            <AnimalPagePhoto animal={props.animal}></AnimalPagePhoto>
            <AnimalName animal={props.animal}></AnimalName>
            <AnimalData animal={props.animal}></AnimalData>
        </div>           
            :null
    }

   
    return (
        <div>
            <AnimalsForAdoption>ZWIERZĘTA DO ADOPCJI</AnimalsForAdoption>
            <AnimalDetails animal={animal.animal}/>
        </div>
    );
};
