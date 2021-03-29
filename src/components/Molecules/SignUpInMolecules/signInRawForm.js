import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import SignUpInTxtField from '../../Atoms/SignUpInAtoms/signUpInTxtField';
import useStyles from '../../Organisms/SignUpInForms/signUpInStyles';
import RememberMeCheckbox from '../../Atoms/SignUpInAtoms/rememberMeCheckbox';
import SignUpInButton from '../../Atoms/SignUpInAtoms/signUpInButton';
// import useHttp from '../../../hooks/useHttp/useHttp';

const SignInRawForm = () => {
    const classes = useStyles();
    const [form, setForm] = useState({
        email: '',
        emailErr: '',
        password: '',
        passwordErr: '',
    });

    const [redirect, setRedirect] = useState(false);

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

    // const httpHandler = useHttp(
    //     // 'https://best-animal-shelter.herokuapp.com/api/login',
    //     'http://localhost:5000/api/login',
    //     'POST',        
    //     {
    //         email: form.email,
    //         password: form.password
    //     }
    // );

    // const setTokenInLocalStorage = async () => {
    //     const resData = await httpHandler.makeHttpRequest();
    //     const authToken = resData.token;
    //     window.localStorage.setItem('x-auth-token', authToken);
    //     return;
    // }

    const handleForm = async (e) => {
        const url = 'http://localhost:3000/api/login';
        // const url = 'https://best-animal-shelter.herokuapp.com/api/login';
        e.preventDefault();
        const err = validateForm();
        if(!err) {
            const loginResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password
                })
            });
            const data = await loginResponse.json();
            window.localStorage.setItem('x-auth-token', data.token);
            console.log('Logowanie...');

            // setTokenInLocalStorage();
            setForm({
                //clear form
                email: '',
                emailErr: '',
                password: '',
                passwordErr: '',
            });

            setRedirect(true);
            
        }
    }

    if (redirect) {
        return <Redirect to="/useraccount" />;
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
