import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import SignUpInTxtField from '../../Atoms/SignUpInAtoms/signUpInTxtField';
import useStyles from '../../Organisms/SignUpInForms/signUpInStyles';
import RememberMeCheckbox from '../../Atoms/SignUpInAtoms/rememberMeCheckbox';
import SignUpInButton from '../../Atoms/SignUpInAtoms/signUpInButton';
import { useAuth } from '../../../contexts/AuthContext';
import Alert from '@material-ui/lab/Alert';

const SignInRawForm = () => {
    const classes = useStyles();
    const [form, setForm] = useState({
        email: '',
        emailErr: '',
        password: '',
        passwordErr: '',
    });

    const [apiError, setApiError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();
    const history = useHistory();

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

    const handleForm = async (e) => {
        e.preventDefault();
        const error = validateForm();
        if(!error) {
            setApiError('');
            setLoading(true);
            const login = await signIn(form.email, form.password);
            if ( login ) {
                console.log(login);
                setApiError(login)
            } else {
                setForm({
                    //clear form
                    email: '',
                    emailErr: '',
                    password: '',
                    passwordErr: '',
                });
                history.push("/useraccount");
                window.location.reload();
            }
        }
        setLoading(false);
    }

    return(
        <form className={classes.accountForm} onSubmit={handleForm}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {apiError && <Alert severity="error" >{apiError}</Alert>}
                </Grid>
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
            <SignUpInButton disable={loading} btnText="Zaloguj się"/>
        </form>
    )
}

export default SignInRawForm
