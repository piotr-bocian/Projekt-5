import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { Wrapper, centerText, avatarStyle } from './AdoptionVisitForm.style';

import SelectDuration from '../../Atoms/AdoptionVisit/SelectDuration';
import SelectDateTime from '../../Molecules/AdoptionVisit/SelectDateTime';
import FormButton from '../../Atoms/AdoptionVisit/FormButton';
import AnimalNameField from '../../Atoms/AdoptionVisit/AnimalNameField'

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

const VisitForm = ({ animalName }) => {
    const [visitDate, setVisitDate] = useState(minDate);
    const [visitTime, setVisitTime] = useState("09:00");
    const [duration, setDuration] = useState(30);
    const [errors, setErrors] = useState();

    const sendForm = (e) => {
        let visitState = {
            visitDate: visitDate,
            visitTime: visitTime,
            duration: duration
        }
        e.preventDefault();

        if (Boolean(errors?.timeError)) {
            console.log('Popraw formularz')
        } else {
            console.log(visitState);
        }
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

    return  (
        <Wrapper >
            <Avatar style={avatarStyle}>
                <AssignmentIcon />
            </Avatar>
            <h2 style={centerText}>WIZYTA ADOPCYJNA</h2>
            {animalName ? (<AnimalNameField text={animalName}/>):('')}
            <SelectDateTime
                onChangeDate={(e) => setVisitDate(e)}
                labelDate='Data wizyty'
                valueDate={visitDate}
                idDate='date-picker'
                minDate={minDate}
                maxDate={maxDate}
                onChangeTime={(e) => {
                    let time = timeToString(e)
                    setErrors({timeError: ''})
                    setVisitTime(time);
                    let regTime = new RegExp(/(1[0-5]|[0]?[9]):([0-5]?[0-9])|(16):(00)$/).test(time)
                    if (!regTime) {
                        setErrors({timeError: 'Proszę wybrać godzinę wizyty między 09:00 a 16:00'})
                    }
                }}
                labelTime='Godzina wizyty'
                valueTime={stringToTime(visitTime)}
                idTime='time-picker'
                error={Boolean(errors?.timeError)}
                helperText={(errors?.timeError)}
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