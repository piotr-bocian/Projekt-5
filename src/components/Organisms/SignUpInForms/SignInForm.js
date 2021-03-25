import React from 'react';
import {CssBaseline, Container } from '@material-ui/core';
import useStyles from '../SignUpInForms/signUpInStyles';
import Avatar from '../../Atoms/SignUpInAtoms/avatar';
import SignUpInTitle from '../../Atoms/SignUpInAtoms/signUpInTitle';
import SignInRawForm from '../../Molecules/SignUpInMolecules/signInRawForm';
import SignUpInLink from '../../Atoms/SignUpInAtoms/signUpInLink';




const SignInForm = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container} component='main' maxWidth="xs">
            <CssBaseline />
            <div className={classes.formContainer}>
                <Avatar/>
                <SignUpInTitle title="Logowanie" />
                <SignInRawForm />
                <SignUpInLink linkText="Nie masz konta? Zarejestruj się"/>
            </div>
        </Container>
)}

export default SignInForm