import React from 'react';
import { Typography, CssBaseline, Container, Grid, FormControlLabel, Button, Link } from '@material-ui/core';
import useStyles from './registrationStyles';
import BlueTextField from '../../Atoms/blueTextField';
import Avatar from '../../Atoms/avatar';
import BlueCheckbox from '../../Atoms/blueCheckbox';




const RegistrationForm = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container} component='main' maxWidth="xs">
            <CssBaseline />
            <div className={classes.formContainer}>
                <Avatar/>
                <Typography component='h1' variant='h5'>
                    Rejestracja
                </Typography>
                <form className={classes.registrationForm} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <BlueTextField
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Imię"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <BlueTextField
                                name="lastName"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Nazwisko"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <BlueTextField
                                name="mobile"
                                variant="outlined"
                                required
                                fullWidth
                                id="mobile"
                                label="Telefon"
                                autoComplete="mobile"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <BlueTextField
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Adres email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <BlueTextField
                                name="password"
                                variant="outlined"
                                required
                                fullWidth
                                type="password"
                                id="password"
                                label="Hasło"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <BlueTextField
                                name="repeatPassword"
                                variant="outlined"
                                required
                                fullWidth
                                type="password"
                                id="repeatPassword"
                                label="Powtórz hasło"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                            control={<BlueCheckbox value="acceptTerms" color="primary" />}
                            label={<div><span>Zapoznałem się i akceptuję </span><Link href="#">regulamin </Link> <span>Schroniska.</span></div>}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.register}
                        >
                            Zarejestruj się
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Masz już konto? Zaloguj się
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
)}

export { RegistrationForm }

// import React, { useState } from 'react';
// import { TextField, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';

// // import './VolunteerForm.css';

// const RegistrationForm = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [birthDate, setBirthDate] = useState('');
//     const [occupation, setOccupation] = useState('');
//     const [preferredTask, setPreferredTask] = useState('');

//     const sendForm = (e) => {
//         e.preventDefault();
//         console.log(firstName);
//         console.log(lastName);
//         console.log(mobile);
//         console.log(birthDate);
//         console.log(occupation);
//         console.log(preferredTask);
//     }
//     return (
//         <form className="form">
//             <TextField variant="outlined" label="Imię" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//             <TextField variant="outlined" label="Nazwisko" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//             <TextField variant="outlined" label="Telefon" value={mobile} onChange={(e) => setMobile(e.target.value)} />
//             <TextField variant="outlined" helperText="Data urodzenia" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} type="date"/>
//             <TextField className="full-width" variant="outlined" label="Czym się zajmujesz? " value={occupation} onChange={(e) => setOccupation(e.target.value)} />

//             <RadioGroup className="full-width" row value={preferredTask} onChange={(e) => {setPreferredTask(e.target.value)}}>
//                 <FormControlLabel value="praca z psami" control={<Radio />} label="Praca z psami" />
//                 <FormControlLabel value="praca z kotami" control={<Radio />} label="Praca z kotami" />
//                 <FormControlLabel value="promocja schroniska" control={<Radio />} label="Promocja schroniska" />
//             </RadioGroup>

//             <Button className="full-width" variant="contained" type="submit" onClick={sendForm}>Wyślij</Button>
//         </form>
//     )
// }

// export default RegistrationForm;