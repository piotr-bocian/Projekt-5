import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import useStyles from '../SignUpInForms/signUpInStyles';
import SignUpInTitle from '../../Atoms/SignUpInAtoms/signUpInTitle';
// import Avatar from '../../Atoms/SignUpInAtoms/avatar';
import AddAnimalFormMolecule from '../../Molecules/AddAnimal/AddAnimalForm';

const AddAnimalForm = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container} component='main' maxWidth="xs">
            <CssBaseline />
            <div className={classes.formContainer}>
                {/* <Avatar/> */}
                <SignUpInTitle title="Dodaj nowego zwierzaka" />
                <AddAnimalFormMolecule />
            </div>
        </Container>
)}

export default AddAnimalForm;