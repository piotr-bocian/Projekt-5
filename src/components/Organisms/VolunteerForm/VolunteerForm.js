import React, { useState } from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio, Button, FormControl, FormLabel } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import useHttp from '../../../hooks/useHttp/useHttp';
import VolunteerFormTextField from '../../Atoms/VolunteerFormTextField/VolunteerFormTextField';

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
    const [mobileErr, setMobileErr] = useState(false);
    const [birthDateErr, setBirthDateErr] = useState(false);
    const [occupationErr, setOccupationErr] = useState(false);
    const [preferredTasksErr, setPreferredTasksErr] = useState(false);

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const validateForm = () => { //this function returns true if all fields are correct, otherwise sets the errors and returns false
        let valid = true;

        if(!form.firstName){
            setFirstNameErr(true);
            valid = false;
        }
        if(!form.lastName){
            setLastNameErr(true);
            valid = false;
        }
        if(form.mobile.length !== 9 || isNaN(Number(form.mobile))){
            setMobileErr(true);
            valid = false;
        }
        if(!form.birthDate){
            setBirthDateErr(true);
            valid = false;
        }
        if(!form.occupation){
            setOccupationErr(true);
            valid = false;
        }
        if(!form.preferredTasks){
            setPreferredTasksErr(true);
            valid = false;
        }

        return valid;
    }

    const handler = useHttp(
        // 'http://localhost:4000/api/volunteerForms',
        'https://best-animal-shelter.herokuapp.com/api/volunteerForms',
        'POST',
        {
            ...form,
            mobile: form.mobile.slice(0, 3) + '-' + form.mobile.slice(3, 6) + '-' + form.mobile.slice(6, 9)
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()){
            handler.makeHttpRequest();
            //console.log('Wysylam zapytanie');
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <VolunteerFormTextField 
                        label="Imię" 
                        name="firstName" 
                        value={form.firstName} 
                        updateForm={updateForm} 
                        err={firstNameErr} 
                        setErr={setFirstNameErr}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>    
                    <VolunteerFormTextField 
                        label="Nazwisko" 
                        name="lastName" 
                        value={form.lastName} 
                        updateForm={updateForm} 
                        err={lastNameErr} 
                        setErr={setLastNameErr}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>    
                    <VolunteerFormTextField 
                        label="Telefon" 
                        name="mobile" 
                        value={form.mobile} 
                        updateForm={updateForm} 
                        err={mobileErr} 
                        setErr={setMobileErr}
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
                        onChange={
                            (e) => {
                                setBirthDateErr(false);
                                updateForm(e);
                            }
                        }
                        type="date"
                        fullWidth
                        error={birthDateErr}
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
                        onChange={
                            (e) => {
                                setOccupationErr(false);
                                updateForm(e);
                            }
                        }
                        fullWidth
                        error={occupationErr}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <FormControl component="fieldset" error={preferredTasksErr}>
                        <FormLabel component="legend">Preferowane zadanie w schronisku</FormLabel>
                        <RadioGroup 
                            row 
                            name="preferredTasks" 
                            value={form.preferredTasks} 
                            onChange={
                                (e) => 
                                    {
                                        setPreferredTasksErr(false);
                                        updateForm(e);
                                    }
                                }           
                        >
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
                    </FormControl>
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