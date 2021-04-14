import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import useStyles from './signUpInStyles';
import SignUpInTitle from '../../Atoms/SignUpInAtoms/signUpInTitle';
import Avatar from '../../Atoms/SignUpInAtoms/avatar';
import EmployeeFormLogic from '../../Molecules/SignUpInMolecules/EmployeeFormLogic';




const AddEmployeeForm = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container} component='main' maxWidth="xs">
            <CssBaseline />
            <div className={classes.formContainer}>
                <Avatar/>
                <SignUpInTitle title="Dodaj nowego pracownika" />
                <EmployeeFormLogic />
            </div>
        </Container>
)}

export default AddEmployeeForm