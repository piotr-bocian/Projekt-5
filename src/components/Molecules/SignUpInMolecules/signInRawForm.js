import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import SignUpInTxtField from '../../Atoms/SignUpInAtoms/signUpInTxtField';
import useStyles from '../../Organisms/SignUpInForms/signUpInStyles';
import RememberMeCheckbox from '../../Atoms/SignUpInAtoms/rememberMeCheckbox';
import SignUpInButton from '../../Atoms/SignUpInAtoms/signUpInButton';

const SignInRawForm = () => {
    const classes = useStyles();
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log(form);
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
