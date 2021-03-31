import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import SignUpInTxtField from '../../Atoms/SignUpInAtoms/signUpInTxtField';
import useStyles from '../../Organisms/SignUpInForms/signUpInStyles';
import { TermsCheckbox } from '../../Atoms/SignUpInAtoms/termsCheckbox';
import SignUpInButton from '../../Atoms/SignUpInAtoms/signUpInButton';
import useHttp from '../../../hooks/useHttp/useHttp';

const SignUpRawForm = () => {
    const classes = useStyles();

    const [form, setForm] = useState({
        firstName: '',
        firstNameErr: '',
        lastName: '',
        lastNameErr: '',
        mobile: '',
        mobileErr: '',
        email: '',
        emailErr: '',
        password: '',
        passwordErr: '',
        repPassword: '',
        repPasswordErr: '',
    });

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const validateForm = () => {
        let isError = false;
        const errors = {
            firstNameErr: '',
            lastNameErr: '',
            mobileErr: '',
            emailErr: '',
            passwordErr: '',
            repPasswordErr: '',
        };

        if(!form.firstName || form.firstName.length < 2){
            isError = true;
            errors.firstNameErr = 'Imię jest za krótkie.'
        } else if (!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,50}$/i.test(form.firstName)) {
            isError = true;
            errors.firstNameErr = 'Imię musi zawierać same litery.'
        }

        if(!form.lastName || form.lastName.length < 2){
            isError = true;
            errors.lastNameErr = 'Nazwisko jest za krótkie.'
        } else if (!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,50}$/i.test(form.lastName)) {
            isError = true;
            errors.lastNameErr = 'Nazwisko musi zawierać same litery.'
        }

        if(!/^(\+\d{2} )?\d{3}-\d{3}-\d{3}$/i.test(form.mobile)) {
            isError = true;
            errors.mobileErr = 'Podaj telefon wg. wzoru: +12 123-456-789 lub 123-456-789.';
        }

        if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(form.email)) {
            isError = true;
            errors.emailErr = 'Nieprawidłowy email.';
        }

        if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z<>!@#$%^&*?_=+-]{8,}$/i.test(form.password)) {
            isError = true;
            errors.passwordErr = 'Hasło musi mieć min. 8 znaków, zawierać 1 cyfrę, 1 małą i 1 dużą literę.';
        }

        if(form.password !== form.repPassword) {
            isError = true;
            errors.repPasswordErr = 'Hasła nie są jednakowe.';
        }

        setForm({
            ...form,
            ...errors
        });


        return isError;
    }

    const httpHandler = useHttp(
        // 'https://best-animal-shelter.herokuapp.com/api/users',
        'http://localhost:5000/api/users',
        'POST',        
        {
            firstName: form.firstName,
            lastName: form.lastName,
            mobile: form.mobile,
            email: form.email,
            image: '',
            password: form.password
        }
    );

    const handleForm = (e) => {
        e.preventDefault();
        const err = validateForm();
        if(!err) {
            // console.log(form);
            httpHandler.makeHttpRequest();
            console.log('Wysłano dane do rejestracji konta');
            setForm({
                //clear form
                firstName: '',
                firstNameErr: '',
                lastName: '',
                lastNameErr: '',
                mobile: '',
                mobileErr: '',
                email: '',
                emailErr: '',
                password: '',
                passwordErr: '',
                repPassword: '',
                repPasswordErr: ''
            });
        }
        
    }
    return(
        <form className={classes.accountForm} onSubmit={handleForm}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <SignUpInTxtField
                        name="firstName"
                        id="firstName"
                        label="Imię"
                        autoFocus={true}
                        updateForm={updateForm}
                        helperText={form.firstNameErr}
                        err={form.firstNameErr}
                        value={form.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SignUpInTxtField
                        name="lastName"
                        id="lastName"
                        label="Nazwisko"
                        updateForm={updateForm}
                        helperText={form.lastNameErr}
                        err={form.lastNameErr}
                        value={form.lastName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SignUpInTxtField 
                        name="mobile"
                        id="mobile"
                        label="Telefon"
                        updateForm={updateForm}
                        helperText={form.mobileErr}
                        err={form.mobileErr}
                        value={form.mobile}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SignUpInTxtField 
                        name="email"
                        id="email"
                        label="Adres email"
                        type="email"
                        updateForm={updateForm}
                        helperText={form.emailErr}
                        err={form.emailErr}
                        value={form.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SignUpInTxtField 
                        name="password"
                        id="password"
                        label="Hasło"
                        type="password"
                        updateForm={updateForm}
                        helperText={form.passwordErr}
                        err={form.passwordErr}
                        value={form.password}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SignUpInTxtField 
                        name="repPassword"
                        id="repPassword"
                        label="Powtórz hasło"
                        type="password"
                        updateForm={updateForm}
                        helperText={form.repPasswordErr}
                        err={form.repPasswordErr}
                        value={form.repPassword}
                    />
                </Grid>
            </Grid>
            <TermsCheckbox />
            <SignUpInButton btnText="Zarejestruj się"/>
        </form>
    )
}

export default SignUpRawForm