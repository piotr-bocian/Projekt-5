import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import './AdotpionForm.css';

const AdotpionForm = () => {
    const [title, setTitle] = useState('');
    const [occupation, setOccupation] = useState('');


    const sendForm = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(occupation);

    }

    return (
        <form className="form" onSubmit={sendForm}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h4" align="center" color="text">Zadaj pytanie odnośnie zwierzaka</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <TextField 
                        variant="outlined" 
                        label="Tytuł" value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth 
                    />
                </Grid>
                <Grid item xs={12}>    
                    <TextField  
                        variant="outlined"
                        label="Zadaj pytanie"
                        multiline
                        rows={3}
                        value={occupation} onChange={(e) => setOccupation(e.target.value)} 
                        fullWidth 
                    />
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