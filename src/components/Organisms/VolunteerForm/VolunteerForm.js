import React, { useState } from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio, Button, FormControl, FormLabel } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import useHttp from '../../../hooks/useHttp/useHttp';
import VolunteerFormTextField from '../../Atoms/VolunteerFormTextField/VolunteerFormTextField';
import { useAuth } from '../../../contexts/AuthContext';

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

    const { authToken } = useAuth();

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
        },
        null,
        authToken
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()){
            handler.makeHttpRequest();
            //console.log('Wysylam zapytanie');
        }
    }

    return (
        // <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis animi excepturi architecto officiis optio est esse et perferendis maxime labore. Cumque libero quis obcaecati quam voluptate ad molestiae dolores provident aliquid totam a, quo illo esse harum molestias, optio, aperiam iure eum quas. Exercitationem delectus rem, alias ut odio obcaecati quia illo? Obcaecati eius voluptatum laborum unde. Dolorum magnam aliquam velit repudiandae ut eaque maiores ducimus perferendis, optio eligendi accusamus officia qui ratione? Nihil explicabo, omnis perspiciatis amet adipisci ipsum harum veniam quisquam. Repellat, beatae accusamus, laboriosam quia incidunt libero, nesciunt voluptatem facere consectetur non amet suscipit earum esse error deserunt culpa eius dolorem iste! Reprehenderit veniam fuga odio architecto, error, dolorem ex tempore facilis dolore sint numquam quisquam, sit provident? Ducimus debitis a quos fuga saepe voluptas aliquid sit quisquam voluptates veniam, laborum cum nesciunt. Eveniet odio sit pariatur vitae architecto necessitatibus dolore illo dolorum nulla, voluptate dicta provident natus neque, animi alias itaque fuga explicabo suscipit excepturi expedita modi. Ipsum voluptates sequi voluptatibus dolor dolores odit. Quisquam dolores commodi quasi, velit odio voluptas sunt libero veniam, assumenda pariatur cum! Perferendis fuga maiores architecto atque! Temporibus, quisquam esse dolor assumenda incidunt explicabo ducimus repellendus autem laboriosam praesentium fugit corrupti.</div>
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