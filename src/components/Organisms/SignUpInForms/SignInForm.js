import React from 'react';
import {CssBaseline, Container } from '@material-ui/core';
import useStyles from '../SignUpInForms/signUpInStyles';
import Avatar from '../../Atoms/SignUpInAtoms/avatar';
import SignUpInTitle from '../../Atoms/SignUpInAtoms/signUpInTitle';
import SignInTxtFields from '../../Molecules/SignUpInMolecules/signInTextFields';
import RememberMeCheckbox from '../../Atoms/SignUpInAtoms/rememberMeCheckbox';
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
                <form className={classes.accountForm}>
                    <SignInTxtFields />
                    <RememberMeCheckbox />
                    <SignUpInButton btnText="Zaloguj się"/>
                    <SignUpInLink linkText="Nie masz konta? Zarejestruj się"/>
                </form>
            </div>
        </Container>
)}

export default SignInForm