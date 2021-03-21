import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@material-ui/core';
import { Wrapper } from './AdoptionVisitForm.style';

import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers'


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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker 
                    disableToolbar
                    inputVariant='outlined'
                    id='date-picker'
                    format='dd/MM/yyyy'
                    margin='normal'
                    label='Data wizyty'
                    onChange={(e) => setVisitDate(e)}
                    value={visitDate}
                    minDate={minDate}
                    maxDate={maxDate}
                />

                <TimePicker
                    inputVariant='outlined'
                    id='time-picker'
                    margin='normal'
                    label='Godzina wizyty'
                    onChange={(e) => setVisitTime(timeToString(e))}
                    value={stringToTime(visitTime)}
                    minutesStep={15}
                    ampm={false}
                    defaultTime="09:00"
                />
            </MuiPickersUtilsProvider>

            <TextField
                variant='outlined'
                id='select-duration'
                select
                label='Czas trwania'
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            >
                {durationValues.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </TextField>

            <Button className='full-width' variant='contained' type='submit' onClick={sendForm}>Wyślij</Button>
        </Wrapper>
    )
}

export default VisitForm;