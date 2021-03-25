import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import SignUpInTxtField from '../../Atoms/SignUpInAtoms/signUpInTxtField';
import useStyles from '../../Organisms/SignUpInForms/signUpInStyles';
import { TermsCheckbox } from '../../Atoms/SignUpInAtoms/termsCheckbox';
import SignUpInButton from '../../Atoms/SignUpInAtoms/signUpInButton';

const SignUpRawForm = () => {
    const classes = useStyles();

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        image: '',
        password: '',
        repPassword: ''
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
                <Grid item xs={12} sm={6}>
                    <SignUpInTxtField
                        name="firstName"
                        id="firstName"
                        label="Imię"
                        autoFocus={true}
                        updateForm={updateForm}
                        value={form.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SignUpInTxtField
                        name="lastName"
                        id="lastName"
                        label="Nazwisko"
                        updateForm={updateForm}
                        value={form.lastName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SignUpInTxtField 
                        name="mobile"
                        id="mobile"
                        label="Telefon"
                        updateForm={updateForm}
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