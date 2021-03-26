import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import useStyles from './signUpInStyles';
import SignUpInTitle from '../../Atoms/SignUpInAtoms/signUpInTitle';
import Avatar from '../../Atoms/SignUpInAtoms/avatar';
import SignUpRawForm from '../../Molecules/SignUpInMolecules/signUpRawForm';
import SignUpInLink from '../../Atoms/SignUpInAtoms/signUpInLink';




const SignUpForm = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container} component='main' maxWidth="xs">
            <CssBaseline />
            <div className={classes.formContainer}>
                <Avatar/>
                <SignUpInTitle title="Rejestracja" />
                <SignUpRawForm />
                <SignUpInLink linkText="Masz już konto? Zaloguj się"/>
            </div>
        </Container>
)}

export default SignUpForm