import React, { useState } from 'react';
import { Typography, TextField, Button, Dialog  } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LocalPostOfficeIcon  from '@material-ui/icons/LocalPostOffice';
import { Grid } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';

import './AdotpionForm.css';

const AdotpionForm = () => {

    const setupJson = ()=>{
        let jsonToSend = {}
        jsonToSend = {
            content: question,
            userID:'6036925f8146b60b78d3508d',
            animalID:'6036925f8146b60b7853d081'
        }
        setPost(jsonToSend)
    }
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [open, setOpen] = useState(false);
    const [sendInfo, setSendInfo] = useState(false);
    const [errors, setErrors] = useState({});
    const [post, setPost] = useState({
        content:'',
        userID:'6036925f8146b60b78d3508d',
        animalID:'6036925f8146b60b7853d081'
    });
    const animalName = "Rudy"
    const validate = () => {
        console.log(post)
        let temp = {}
            temp.title = title?"":"This field is required"
            temp.question = question?"":"This field is required"
            setErrors({
                ...temp
            })
        return Object.values(temp).every(x => x =='')
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleSendInfo = () =>{
        setSendInfo(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSendInfo(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
         if(validate()){
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQzOWQ4YWJkNTZmMzM4NTU0ZGU2MmYiLCJlbWFpbCI6InN1cGVyQWRtaW5AZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaXNWb2x1bnRlZXIiOmZhbHNlLCJpc1N1cGVyQWRtaW4iOnRydWUsImlhdCI6MTYxODMzNDUwOCwiZXhwIjoxNjE4MzM4MTA4fQ.C2letvEBgOGMdc8MAN_7JcD4Y4MHbq7peY5pBzxu8Hc',
                },
                body: JSON.stringify(post)
            };
            fetch('https://best-animal-shelter.herokuapp.com/api/adoptionforms', requestOptions)
            .then(response => {
                handleSendInfo()
                console.log(response)
            }).catch(error =>{
                console.log(error)
            })
            setTitle('')
            setQuestion('')
         }
         else{
             console.log('error nie wszystko uzupełnione')
         }
    }
    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Zapytaj o zwięrzę
        </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form
                    className="formAdoption"
                    onSubmit={handleSubmit}
                    autoComplete="off">
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={12} sm={12} md={12}>
                            <CloseIcon className="exitButton" onClick={handleClose} color="primary" />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} jusify="center" >
                            <LocalPostOfficeIcon color="primary" style={{ fontSize: 50 }}/>
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
                                error={errors.title}
                                variant="outlined"
                                label="Tytuł *" value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                fullWidth
                                helperText="Tytuł wymagany"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={errors.question}
                                variant="outlined"
                                label="Treść *"
                                multiline
                                rows={6}
                                value={question} onChange={(e) => setQuestion(e.target.value)}
                                fullWidth
                                helperText="Napisz coś"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                onClick={setupJson}
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
            <Dialog open={sendInfo} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Grid container justify="center" className="formAdoption">
                    <Grid item xs={2} sm={2} md={2} jusify="center" style={{ textAlign: "center" }}>
                            <TelegramIcon color="Secondary" style={{ fontSize: 50 }}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                        <Typography
                                variant="h4"
                                align="center"
                                color="green"
                        >
                            Formularz został wysłany
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} jusify="center" style={{ textAlign: "center" }}>
                        <Button variant="outlined" color="primary" onClick={handleClose}>OK</Button>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    )
}
export default AdotpionForm;