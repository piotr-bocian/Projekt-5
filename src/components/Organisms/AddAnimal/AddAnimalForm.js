import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './AddAnimalStyles';
import SignUpInTitle from '../../Atoms/SignUpInAtoms/signUpInTitle';
import AddAnimalFormMolecule from '../../Molecules/AddAnimal/AddAnimalForm';

const AddAnimalForm = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container} component='main' maxWidth="md" minHeight='none'>
            <div className={classes.formContainer}>
                <SignUpInTitle title="Dodaj nowego zwierzaka" />
                <AddAnimalFormMolecule />
            </div>
        </Container>
)}

export default AddAnimalForm;