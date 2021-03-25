import React, { useState } from 'react';
import { Typography, TextField, Button, Dialog  } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Grid } from '@material-ui/core';

import './AdotpionForm.css';

const AdotpionForm = () => {
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [open, setOpen] = React.useState(false);
    const animalName = "Rudy"

    const sendForm = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(question);
    }
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Zapytaj o zwięrzę
        </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form className="form" onSubmit={sendForm}>
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={12} sm={12} md={12}>
                            <CloseIcon className="exitButton" onClick={handleClose} color="primary" />
                        </Grid>
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
            </Dialog>
        </div>
    )
}
export default AdotpionForm;