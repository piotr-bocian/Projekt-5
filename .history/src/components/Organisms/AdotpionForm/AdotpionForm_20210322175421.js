import React, { useState } from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import './AdotpionForm.css';

const AdotpionForm = () => {
    const [title, setTitle] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [occupation, setOccupation] = useState('');
    const [preferredTask, setPreferredTask] = useState('');

    const sendForm = (e) => {
        e.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(mobile);
        console.log(birthDate);
        console.log(occupation);
        console.log(preferredTask);
    }

    return (
        <form className="form" onSubmit={sendForm}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                    <TextField 
                        variant="outlined" 
                        label="Tytuł" value={title} 
                        onChange={(e) => setTitle(e.target.value)}
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
                        rows={2}
                        value={occupation} onChange={(e) => setOccupation(e.target.value)} 
                        fullWidth 
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <RadioGroup row value={preferredTask} onChange={(e) => {setPreferredTask(e.target.value)}}>
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

export default AdotpionForm;