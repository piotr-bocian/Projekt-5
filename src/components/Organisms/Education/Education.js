import React from 'react';
import EducationList from '../../Molecules/EducationList/EducationList';
import { Grid } from '@material-ui/core';

import './Education.css';

const title1 = 'Jak prawidłowo witać się z psem?'
const correct1 = ['Pozwól psu pierwszemu podejść do siebie.', 'Pogłaszcz psa po bocznej stronie ciała lub pod brodą.', 'Obserwuj psa.', 'Zachowaj spokój.'];
const wrong1 = ['Nie pochylaj się nad psem.', 'Nie chwytaj gwałtownie psa i nie przytulaj go na siłę.', 'Nie wpatruj się psu intynsywnie w oczy.', 'Nie piszcz, nie krzycz, nie wymachuj rękoma.'];

const title2 = 'Zachowanie w schronisku'
const correct2 = ['Stosuj się do zaleceń pracowników', 'Zostaw swojego pupila w domu', 'Bądź wyrozumiały dla zwierzaków'];
const wrong2 = ['Nie dotykaj psów znajdujących się w boksach', 'Nie dokarmiaj zwierząt znajdujących się w boksach', 'Nie biegaj, nie krzycz, nie stresuj zwierząt'];

const Education = () => {

    return (
        <Grid container justify={'center'} className="grid-container">
            <Grid item xs={12} sm={6}>
                <EducationList title={title1} correct={correct1} wrong={wrong1}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <EducationList title={title2} correct={correct2} wrong={wrong2}/>
            </Grid>
        </Grid>
    )
}

export default Education;