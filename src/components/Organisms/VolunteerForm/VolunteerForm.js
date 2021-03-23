import React, { useState, useRef } from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import useHttp from '../../../hooks/useHttp/useHttp';

import './VolunteerForm.css';

const VolunteerForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        birthDate: '',
        occupation: '',
        preferredTasks: ''
    });

    const [firstNameErr, setFirstNameErr] = useState(false);
    const [lastNameErr, setLastNameErr] = useState(false);

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validateForm = () => {
        let valid = true;

        if(!form.firstName){
            setFirstNameErr(true);
            valid = false;
        }
        if(!form.lastName){
            setLastNameErr(true);
            valid = false;
        }

        return valid;
    }

    const handler = useHttp(
        'https://best-animal-shelter.herokuapp.com/api/volunteerForms',
        'POST',
        form
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()){
            handler.makeHttpRequest();
            console.log('Wysylam zapytanie')
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        variant="outlined" 
                        label="Imię"
                        name="firstName"
                        value={form.firstName}
                        onChange={
                            (e) => {
                                setFirstNameErr(false);
                                updateForm(e);
                            }
                        }
                        fullWidth
                        error={firstNameErr}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>    
                    <TextField 
                        variant="outlined" 
                        label="Nazwisko"
                        name="lastName"
                        value={form.lastName} 
                        onChange={
                            (e) => {
                                setLastNameErr(false);
                                updateForm(e);
                            }
                        } 
                        fullWidth
                        error={lastNameErr}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>    
                    <TextField 
                        variant="outlined"
                        label="Telefon"
                        name="mobile" 
                        value={form.mobile} 
                        onChange={updateForm} 
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
                        name="birthDate"
                        value={form.birthDate} 
                        onChange={updateForm} 
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
                        name="occupation"
                        value={form.occupation} 
                        onChange={updateForm} 
                        fullWidth
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <RadioGroup row name="preferredTasks" value={form.preferredTasks} onChange={updateForm}>
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
                        type="submit"
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