import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import useStyles from './signUpInStyles';
import SignUpInTitle from '../../Atoms/SignUpInAtoms/signUpInTitle';
import Avatar from '../../Atoms/SignUpInAtoms/avatar';
import SignUpTxtFields from '../../Molecules/SignUpInMolecules/signUpTextFields';
import { TermsCheckBox } from '../../Atoms/SignUpInAtoms/termsCheckbox';
import SignUpInButton from '../../Atoms/SignUpInAtoms/signUpInButton';
import SignUpInLink from '../../Atoms/SignUpInAtoms/signUpInLink';




const SignUpForm = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container} component='main' maxWidth="xs">
            <CssBaseline />
            <div className={classes.formContainer}>
                <Avatar/>
                <SignUpInTitle title="Rejestracja" />
                <form className={classes.accountForm}>
                    <SignUpTxtFields />
                    <TermsCheckBox />
                    <SignUpInButton btnText="Zarejestruj się"/>
                    <SignUpInLink linkText="Masz już konto? Zaloguj się"/>
                </form>
            </div>
        </Container>
)}

export default SignUpForm

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