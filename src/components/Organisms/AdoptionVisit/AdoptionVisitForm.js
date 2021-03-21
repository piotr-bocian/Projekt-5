import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@material-ui/core';
import { Wrapper } from './AdoptionVisitForm.style';

import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'


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
    const [visitTime, setVisitTime] = useState('09:00');
    const [duration, setDuration] = useState(30);

    const sendForm = (e) => {
        e.preventDefault();
        console.log(visitDate);
        console.log(visitTime);
        console.log(duration);
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
            </MuiPickersUtilsProvider>

            <TextField
                variant='outlined'
                id='time'
                label='Godzina wizyty'
                type='time'
                defaultValue= {visitTime}
                InputLabelProps={{
                shrink: true,
                }}
                inputProps={{
                step: 900, // 15 min
                }}
                onChange={(e) => setVisitTime(e.target.value)}
            />

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