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