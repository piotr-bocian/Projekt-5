import React, { useState } from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import useHttp from '../../../hooks/useHttp/useHttp';

import './VolunteerForm.css';

const VolunteerForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [occupation, setOccupation] = useState('');
    const [preferredTasks, setPreferredTasks] = useState('');

    const handler = useHttp(
        'https://best-animal-shelter.herokuapp.com/api/volunteerForms',
        'POST',
        {
            firstName: firstName,
            lastName: lastName,
            mobile: mobile,
            birthDate: birthDate,
            occupation: occupation,
            preferredTasks: preferredTasks
        }
    );

    return (
        <form className="form">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        variant="outlined" 
                        label="Imię" value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                        fullWidth 
                    />
                </Grid>
                <Grid item xs={12} sm={6}>    
                    <TextField 
                        variant="outlined" 
                        label="Nazwisko" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>    
                    <TextField 
                        variant="outlined"
                        label="Telefon" 
                        value={mobile} 
                        onChange={(e) => setMobile(e.target.value)} 
                        fullWidth 
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        variant="outlined"
                        label="Data urodzenia" 
                        InputLabelProps={{
                            shrink: true,
                        }} 
                        value={birthDate} 
                        onChange={(e) => setBirthDate(e.target.value)} 
                        type="date"
                        fullWidth 
                    />
                </Grid>
                <Grid item xs={12}>    
                    <TextField  
                        variant="outlined"
                        label="Czym się zajmujesz? Uczysz się? Studiujesz? Pracujesz?"
                        multiline
                        rows={4}
                        value={occupation} onChange={(e) => setOccupation(e.target.value)} 
                        fullWidth 
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <RadioGroup row value={preferredTasks} onChange={(e) => {setPreferredTasks(e.target.value)}}>
                        <FormControlLabel 
                            value="praca z psami" 
                            control={<Radio color="primary" disableRipple />} 
                            label="Praca z psami" 
                        />
                        <FormControlLabel 
                            value="praca z kotami" 
                            control={<Radio color="primary" disableRipple />}
                            label="Praca z kotami"
                        />
                        <FormControlLabel 
                        value="promocja schroniska" 
                        control={<Radio color="primary" disableRipple />} 
                        label="Promocja schroniska"
                        />
                    </RadioGroup>
                </Grid>
                
                <Grid item xs={12}>
                    <Button 
                        color="primary"
                        variant="contained" 
                        onClick={handler.makeHttpRequest}
                        fullWidth 
                    >
                        Wyślij
                    </Button>
                </Grid>    
            </Grid>    
        </form>
    )
}

export default VolunteerForm;