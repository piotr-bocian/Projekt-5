import React, { useState } from 'react';
import { Wrapper } from './AdoptionVisitForm.style';

import SelectDuration from '../../Atoms/AdoptionVisit/SelectDuration';
import SelectDateTime from '../../Molecules/SelectDateTime';
import FormButton from '../../Atoms/AdoptionVisit/FormButton';

let date = new Date();
const minDate = date.setDate(date.getDate() + 1);
const maxDate = date.setDate(date.getDate() + 60);

const durationValues = [ 
    {
        value: 30,
        label: '30 minut',
    },
    {
        value: 45,
        label: '45 minut',
    },
    {
        value: 60,
        label: '1 godzina',
    },
    {
        value: 90,
        label: '1 godzina 30 minut',
    },
    {
        value: 120,
        label: '2 godziny',
    }
];

const VisitForm = () => {
    const [visitDate, setVisitDate] = useState(minDate);
    const [visitTime, setVisitTime] = useState("09:00");
    const [duration, setDuration] = useState(30);

    const sendForm = (e) => {
        e.preventDefault();
        console.log(visitDate);
        console.log(visitTime);
        console.log(duration);
    }

    // convert Time to valid database type
    const addZero = (i) => {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
    }

    const timeToString = (e) => {
        return `${addZero(e.getHours())}:${addZero(e.getMinutes())}`
    }

    const stringToTime = (time) => {
        let hours = parseInt(time.substring(0, 2));
        let minutes = parseInt(time.substring(3, 5));
        let startTime = date.setHours(hours);
        startTime = date.setMinutes(minutes);
        return startTime;
    }

    return (
        <Wrapper>

            <SelectDateTime
                onChangeDate={(e) => setVisitDate(e)}
                labelDate='Data wizyty'
                valueDate={visitDate}
                idDate='date-picker'
                minDate={minDate}
                maxDate={maxDate}
                onChangeTime={(e) => setVisitTime(timeToString(e))}
                labelTime='Godzina wizyty'
                valueTime={stringToTime(visitTime)}
                idTime='time-picker'
            />

            <SelectDuration 
                label='Czas trwania'
                id='select-duration'
                value={duration}
                optionValues={durationValues}
                onChange={(e) => setDuration(e.target.value)}
            />

            <FormButton 
                onClick={sendForm}
                text="Wyślij"
            />

        </Wrapper>
    )
}

export default VisitForm;