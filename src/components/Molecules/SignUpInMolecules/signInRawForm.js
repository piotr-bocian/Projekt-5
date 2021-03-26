import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import SignUpInTxtField from '../../Atoms/SignUpInAtoms/signUpInTxtField';
import useStyles from '../../Organisms/SignUpInForms/signUpInStyles';
import RememberMeCheckbox from '../../Atoms/SignUpInAtoms/rememberMeCheckbox';
import SignUpInButton from '../../Atoms/SignUpInAtoms/signUpInButton';
import useHttp from '../../../hooks/useHttp/useHttp';

const SignInRawForm = () => {
    const classes = useStyles();
    const [form, setForm] = useState({
        email: '',
        emailErr: '',
        password: '',
        passwordErr: '',
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
            emailErr: '',
            passwordErr: '',
        };

        if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(form.email)) {
            isError = true;
            errors.emailErr = 'Nieprawidłowy email.';
        }

        if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z<>!@#$%^&*?_=+-]{8,}$/i.test(form.password)) {
            isError = true;
            errors.passwordErr = 'Nieprawidłowe hasło.';
        }

        setForm({
            ...form,
            ...errors
        });

        return isError;
    }

    const httpHandler = useHttp(
        'https://best-animal-shelter.herokuapp.com/api/login',
        'POST',        
        {
            email: form.email,
            password: form.password
        }
    );

    const handleForm = (e) => {
        e.preventDefault();
        const err = validateForm();
        if(!err) {
            httpHandler.makeHttpRequest();
            console.log('Logowanie...');
            setForm({
                //clear form
                email: '',
                emailErr: '',
                password: '',
                passwordErr: '',
            });
        }
    }

    return(
        <form className={classes.accountForm} onSubmit={handleForm}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SignUpInTxtField 
                        name="email"
                        id="email"
                        label="Adres email"
                        type="email"
                        autoFocus={true}
                        value={form.email}
                        helperText={form.emailErr}
                        err={form.emailErr}
                        updateForm={updateForm}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SignUpInTxtField 
                        name="password"
                        id="password"
                        label="Hasło"
                        type="password"
                        value={form.password}
                        helperText={form.passwordErr}
                        err={form.passwordErr}
                        updateForm={updateForm}
                    />
                </Grid>
            </Grid>
            <RememberMeCheckbox />
            <SignUpInButton btnText="Zaloguj się"/>
        </form>
    )
}

export default SignInRawForm
