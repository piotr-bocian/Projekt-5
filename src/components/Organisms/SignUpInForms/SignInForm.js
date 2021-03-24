import React from 'react';
import {CssBaseline, Container, Grid, FormControlLabel } from '@material-ui/core';
import useStyles from '../SignUpInForms/signUpInStyles';
import Avatar from '../../Atoms/SignUpInAtoms/avatar';
import SignUpInTitle from '../../Atoms/SignUpInAtoms/signUpInTitle';
import SignInTxtFields from '../../Molecules/SignUpInMolecules/signInTextFields'
import { BlueCheckbox } from '../../Atoms/SignUpInAtoms/termsCheckbox';
import SignUpInButton from '../../Atoms/SignUpInAtoms/signUpInButton';
import SignUpInLink from '../../Atoms/SignUpInAtoms/signUpInLink';




const SignInForm = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container} component='main' maxWidth="xs">
            <CssBaseline />
            <div className={classes.formContainer}>
                <Avatar/>
                <SignUpInTitle title="Logowanie" />
                <form className={classes.accountForm} noValidate>
                    <Grid container spacing={2}>
                        <SignInTxtFields />
                        <Grid item xs={12}>
                            <FormControlLabel
                            control={<BlueCheckbox value="rememberMe" color="primary" />}
                            label='Zapamiętaj mnie'
                            />
                        </Grid>
                    </Grid>
                    <SignUpInButton btnText="Zaloguj się"/>
                    <SignUpInLink linkText="Nie masz konta? Zarejestruj się"/>
                </form>
            </div>
        </Container>
)}

export default SignInForm