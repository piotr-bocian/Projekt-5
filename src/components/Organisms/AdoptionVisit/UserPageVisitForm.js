import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PetsIcon from '@material-ui/icons/Pets';

import { Wrapper, centerText, avatarStyle, FormWrapper, ConfirmationWrapper, confirmationHeader } from './AdoptionVisitForm.style';
import { PageWrapper, NavWrapper, BodyWrapper } from './UserPageVisitForm.style';

import SelectDuration from '../../Atoms/AdoptionVisit/SelectDuration';
import SelectDateTime from '../../Molecules/AdoptionVisit/SelectDateTime';
import FormButton from '../../Atoms/AdoptionVisit/FormButton';
import BackButton from '../../Atoms/UserNavigationPage/BackButton';

let date = new Date();
const minDate = new Date(date.setDate(date.getDate() + 1)).toISOString().slice(0, 10);
const maxDate = new Date(date.setDate(date.getDate() + 60)).toISOString().slice(0, 10);

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

const UserPageVisitForm = () => {
    const [visitDate, setVisitDate] = useState(minDate);
    const [visitTime, setVisitTime] = useState("09:00");
    const [duration, setDuration] = useState(30);
    const [errors, setErrors] = useState();
    const [confirmation, setConfirmation] = useState(false)

    let visitState = {
            visitDate: visitDate,
            visitTime: visitTime,
            duration: duration
        }

    const sendForm = async (e) => {
        const url = 'https://best-animal-shelter.herokuapp.com/api/visits/me';
        const authToken = window.localStorage.getItem('x-auth-token');
        e.preventDefault();

        if (!Boolean(errors?.timeError)) {
            const signUpResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-auth-token': authToken,
                },
                body: JSON.stringify(visitState)
            });
            if (signUpResponse.status === 201){
                setConfirmation(true)
            }
        } else {
            console.log('Popraw formularz')
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
    <PageWrapper>
        <NavWrapper >
            <div><BackButton link={{link:"/useraccount"}}/></div>
            <h2> Formularz - Wizyta adopcyjna </h2>
        </NavWrapper>
        <BodyWrapper>
        <Wrapper>
            <FormWrapper>
            <Avatar style={avatarStyle}>
                <AssignmentIcon />
            </Avatar>

            {!confirmation ? (
                <>
                    <h2 style={centerText}>WIZYTA ADOPCYJNA</h2>
                    <SelectDateTime
                        onChangeDate={(e) => setVisitDate(e.toISOString().slice(0, 10))}
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
                </>
            ) : (
                <>
                    <h2 style={confirmationHeader}>POTWIERDZENIE<br/>WIZYTY ADOPCYJNEJ</h2>
                    <ConfirmationWrapper>
                        <PetsIcon color="primary"/> <p>Data wizyty: <span>{visitDate}</span></p>
                        <PetsIcon color="primary"/> <p>Godzina wizyty: <span >{visitTime}</span></p>
                        <PetsIcon color="primary"/> <p>Czas trwania wizyty: <span >{duration} minut</span></p>
                    </ConfirmationWrapper>
                </>
            )}
            </FormWrapper>
        </Wrapper>
        </BodyWrapper>
    </PageWrapper>
    ) 
}

export default UserPageVisitForm;