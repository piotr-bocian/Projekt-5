import React from 'react';
import { TextField, CssBaseline, Container } from '@material-ui/core';
import useStyles from './registrationStyles'

const RegistrationForm = () => {
    const classes = useStyles();
    return(
        <>
            <CssBaseline />
            <div className={classes.container}>
                <Container maxWidth='xs'>
                    <form className="registrationForm" align='center'>
                        <TextField variant="standard" required="true" label="Imię" />
                        <TextField variant="standard" required="true" label="Nazwisko" />
                        <TextField variant="standard" required="true" label="Telefon" />
                        <TextField variant="standard" required="true" type="email" label="email" />
                        <TextField variant="standard" required="true"  type="password" label="Hasło" />
                        <TextField variant="standard" required="true" type="password" label="Powtórz hasło" />
                    </form>
                </Container>
            </div>
        </>



        // <Button variant="contained" color="primary">
        //     Rejestracja
        // </Button>
        
    )
}

export default RegistrationForm

//     return (
//         <form className="form">
//             <TextField variant="standard" label="Imię" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//             <TextField variant="standard" label="Nazwisko" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//             <TextField variant="standard" label="Telefon" value={mobile} onChange={(e) => setMobile(e.target.value)} />
//             <TextField variant="standard" helperText="Data urodzenia" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} type="date"/>
//             <TextField className="full-width" variant="standard" label="Czym się zajmujesz? " value={occupation} onChange={(e) => setOccupation(e.target.value)} />

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