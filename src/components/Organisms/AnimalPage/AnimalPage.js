import React, { useState, useEffect } from 'react';
// import { AnimalPageBackBtn } from '../../Atoms/AnimalPage/AnimalPageBackButton/AnimalPageBackBtn.js';
import { AnimalsForAdoption  } from '../../Atoms/HeaderAnimalsForAdoption/HeaderAnimalsForAdoption.js';
// import { AnimalPagePhoto } from '../../Atoms/AnimalPage/AnimalPagePhoto/AnimalPagePhoto.js'



export function AnimalPage(match) {

    const [animal, setAnimal] = useState({});

    useEffect(() => {
        fetchAnimal();
    }, []);

    const animalId = match.match.params.id;

    const fetchAnimal = async () => {
        const fetchAnimal = await fetch(`https://best-animal-shelter.herokuapp.com/api/animals/${animalId}`);
        const animal = await fetchAnimal.json();
        setAnimal(animal)
        console.log(animal)
    }

   
    return (
        <div>
            <AnimalsForAdoption>ZWIERZĘTA DO ADOPCJI</AnimalsForAdoption>
        </div>
    );
};
