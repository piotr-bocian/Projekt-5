import React from 'react';
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
import useHttp from '../../../hooks/useHttp/useHttp';
import { PhotoFriends } from '../../Atoms/MainPage/PhotoFriends';
import { MainPageGrid } from '../../Molecules/MainPage/MainPageGrid';
import { WorkingHours } from '../../Atoms/MainPage/WorkingHours';
import { Info } from '../../Atoms/MainPage/Info';

export function MainPage () {

    const handler = useHttp(
        `https://best-animal-shelter.herokuapp.com`,
        httpMethods.GET
    );

    return handler.isLoading ? (
        <div></div>) :
        (
        <div>
            <PhotoFriends></PhotoFriends>
            <MainPageGrid></MainPageGrid>
            <WorkingHours>Schronisko otwarte dla odwiedzających w godz. 11-17</WorkingHours>
            <Info>Załóż konto i umów się na wizytę - bardzo ułatwisz nam pracę :)</Info>
        </div>
    );
};