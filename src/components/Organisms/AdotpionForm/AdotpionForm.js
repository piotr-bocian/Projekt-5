import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import './AdotpionForm.css';

const AdotpionForm = () => {
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const animalName = "Rudy"

    const sendForm = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(question);
    }

    return (
        <form className="form" onSubmit={sendForm}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm={12} md={12}>
                    <Typography
                        variant="h4"
                        align="center"
                        color="textPrimary"
                    >
                    Zadaj pytanie
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        variant="outlined"
                        disabled
                        label="Imię zwierzaka*" value={animalName}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        variant="outlined"
                        label="Tytuł *" value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label="Treść *"
                        multiline
                        rows={6}
                        value={question} onChange={(e) => setQuestion(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
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