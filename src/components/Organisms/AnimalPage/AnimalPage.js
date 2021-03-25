import React, { useState, useEffect } from 'react';
// import { AnimalPageBackBtn } from '../../Atoms/AnimalPage/AnimalPageBackButton/AnimalPageBackBtn.js';
import { AnimalsForAdoption  } from '../../Atoms/HeaderAnimalsForAdoption/HeaderAnimalsForAdoption.js';
// import { AnimalPagePhoto } from '../../Atoms/AnimalPage/AnimalPagePhoto/AnimalPagePhoto.js'
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
import useHttp from '../../../hooks/useHttp/useHttp';


export function AnimalPage(props) {

    // const [animal, setAnimal] = useState({});

    const handler = useHttp(
        `https://best-animal-shelter.herokuapp.com/api/animals/${props.animalId._id}`,
        httpMethods.GET
    );

    useEffect(() => {
        handler.makeHttpRequest()
            .then((result) => {
                console.log(result);
            })
    }, [])
   
    return handler.isLoading ? (
        <div></div>) :
        (
        <div>
            <AnimalsForAdoption>ZWIERZĘTA DO ADOPCJI</AnimalsForAdoption>
        </div>
    );
};
