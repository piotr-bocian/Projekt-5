import React, { useState } from 'react';
import {Avatar, Button, Dialog } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CloseIcon from '@material-ui/icons/Close';
import PetsIcon from '@material-ui/icons/Pets';

import { Wrapper, centerText, avatarStyle, FormWrapper, closeIconStyle, ConfirmationWrapper, confirmationHeader } from './AdoptionVisitForm.style';

import { useAuth } from '../../../contexts/AuthContext';
import SelectDuration from '../../Atoms/AdoptionVisit/SelectDuration';
import SelectDateTime from '../../Molecules/AdoptionVisit/SelectDateTime';
import FormButton from '../../Atoms/AdoptionVisit/FormButton';
import AnimalNameField from '../../Atoms/AdoptionVisit/AnimalNameField'

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

const VisitForm = ({ animal }) => {

    const [visitDate, setVisitDate] = useState(minDate);
    const [visitTime, setVisitTime] = useState("09:00");
    const [duration, setDuration] = useState(30);
    const [errors, setErrors] = useState();
    const [open, setOpen] = useState(false);
    const [confirmation, setConfirmation] = useState(false);

    let visitState;
    if (animal) {
        visitState = {
            visitDate: visitDate,
            visitTime: visitTime,
            duration: duration,
            animalID: animal._id
        }
    } else {
        visitState = {
            visitDate: visitDate,
            visitTime: visitTime,
            duration: duration
        }
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

    // handle openining Dialog Window
    const handleClickOpen = () => {
        setOpen(true);
        setConfirmation(false);
      };
    const handleClose = () => {
        setOpen(false);
    };

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
    <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Zarezerwuj wizytę
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

            <Wrapper>
                <CloseIcon className="exitButton" onClick={handleClose} color="primary" style={closeIconStyle}/>
                <FormWrapper>
                <Avatar style={avatarStyle}>
                    <AssignmentIcon />
                </Avatar>

                {!confirmation ? (
                    <>
                        <h2 style={centerText}>WIZYTA ADOPCYJNA</h2>
                        {animal ? (<AnimalNameField text={animal.name}/>):null}
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
                            {animal ? (<><PetsIcon color="primary"/> <p>Imię zwierzaka: <span>{animal.name}</span></p></>):null}
                            <PetsIcon color="primary"/> <p>Data wizyty: <span>{visitDate}</span></p>
                            <PetsIcon color="primary"/> <p>Godzina wizyty: <span >{visitTime}</span></p>
                            <PetsIcon color="primary"/> <p>Czas trwania wizyty: <span >{duration} minut</span></p>
                        </ConfirmationWrapper>
                    </>
                )}
                </FormWrapper>
            </Wrapper>

        </Dialog>
    </div>
    ) 
}

export default VisitForm;