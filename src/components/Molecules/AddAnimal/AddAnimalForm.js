import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import SignUpInTxtField from '../../Atoms/SignUpInAtoms/signUpInTxtField';
import useStyles from '../../Organisms/AddAnimal/AddAnimalStyles';
import SignUpInButton from '../../Atoms/SignUpInAtoms/signUpInButton';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ImageUpload from "./ImageUpload";


const AddAnimal = () => {
    const classes = useStyles();
    
    const [image, setImage] = useState()
    const [form, setForm] = useState({
        animalName: '',
        animalNameErr: false,
        animalType: '',
        animalAge: '',
        animalGender: '',
        animalSize: '',
        animalBreed: '',
        animalDescription: '',
        animalDescriptionErr: false,
        registrationDate: Date.now(),
        isAdopted: false,
        image: ''
    });
    

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    
    const addImage = () => {
        setForm({
            ...form,
            image: image
        });
    }

    const validateForm = () => {
        let isError = false;
        const errors = {
            animalNameErr: '',
            animalAgeErr: '',
            animalDescriptionErr: ''
        };

        if(!form.animalName || form.animalName.length < 2){
            isError = true;
            errors.firstNameErr = 'Imię jest za krótkie.'
        } else if (!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,50}$/i.test(form.animalName)) {
            isError = true;
            errors.animalNameErr = 'Imię musi zawierać same litery.'
        }

        if(!form.animalDescription || form.animalDescription.length < 50){
            isError = true;
            errors.animalDescriptionErr = 'Opis jest za krótki.'
        }

        setForm({
            ...form,
            ...errors
        });


        return isError;
    }


    const httpHandler = () => {
        const formData = new FormData();   
        formData.append("name", form.animalName) ;
        formData.append("animalType", form.animalType) ;
        formData.append("gender", form.animalGender) ;
        formData.append("age", form.animalAge) ;
        formData.append("size", form.animalSize) ;
        formData.append("description", form.animalDescription) ;
        formData.append("breed", form.animalBreed) ;
        formData.append("isAdopted", form.isAdopted) ;           
        
        formData.set('image', image, 'image')   
        console.log(...formData.entries());

        const authToken = window.localStorage.getItem('x-auth-token');

        fetch('https://best-animal-shelter.herokuapp.com/api/animals/adminanimals', {
        method: 'POST',
        headers: {
            'x-auth-token': authToken,
        },
        body: formData   
    });        
    } 

    const handleForm = (e) => {
        e.preventDefault();
        const err = validateForm();
        if(!err) {
            httpHandler();
            console.log('Zwierzak został zarejestrowany!');
            setForm({
                //clear form
                animalName: '',
                animalNameErr: '',
                animalAge: '',
                animalAgeErr: '',
                animalType: '',
                animalBreed: '',
                animalDescription: '',
                animalDescriptionErr: '',
                animalSize: '',
                isAdopted: false,
                image: null
            });
        }        
    }
    return(
        <form className={classes.accountForm} onSubmit={handleForm}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <SignUpInTxtField
                        name="animalName"
                        id="animalName"
                        label="Imię zwierzaka"
                        autoFocus={true}
                        updateForm={updateForm}
                        helperText={form.animalNameErr}
                        err={form.animalNameErr}
                        value={form.animalName}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gatunek</FormLabel>
                        <RadioGroup 
                            row 
                            name="animalType" 
                            value={form.animalType} 
                            onChange={(e) => {updateForm(e);}}           
                        >
                            <FormControlLabel 
                                value="kot" 
                                control={<Radio color="primary" disableRipple />} 
                                label="kot" 
                            />
                            <FormControlLabel 
                                value="pies" 
                                control={<Radio color="primary" disableRipple />}
                                label="pies"
                            />
                            <FormControlLabel 
                            value="inne" 
                            control={<Radio color="primary" disableRipple />} 
                            label="inne"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <SignUpInTxtField
                        name="animalAge"
                        id="animalAge"
                        label="Wiek"
                        autoFocus={true}
                        updateForm={updateForm}
                        value={form.animalAge}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                    <FormLabel component="legend">Płeć</FormLabel>
                        <RadioGroup 
                            row 
                            name="animalGender"
                            value={form.animalGender} 
                            onChange={(e) => {updateForm(e)}}           
                        >
                            <FormControlLabel 
                                value="męska" 
                                control={<Radio color="primary" disableRipple />} 
                                label="męska" 
                            />
                            <FormControlLabel 
                                value="żeńska" 
                                control={<Radio color="primary" disableRipple />}
                                label="żeńska"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl className={classes.formControl}>
                    <InputLabel id="animalSize">Rozmiar</InputLabel>
                    <Select
                        name="animalSize"
                        labelId="animalSize"
                        id="animalSize"
                        value={form.animalSize}
                        onChange={(e) => updateForm(e)}
                                            >
                        <MenuItem value={'mały'}>mały</MenuItem>
                        <MenuItem value={'mały/średni'}>mały/średni</MenuItem>
                        <MenuItem value={'średni'}>średni</MenuItem>
                        <MenuItem value={'średni/duży'}>średni/duży</MenuItem>
                        <MenuItem value={'duży'}>duży</MenuItem>
                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <SignUpInTxtField
                        name="animalBreed"
                        id="animalBreed"
                        label="Rasa"
                        updateForm={updateForm}
                        value={form.animalBreed}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <SignUpInTxtField
                        name="animalDescription"
                        id="animalDescription"
                        label="Opis zwierzaka"
                        updateForm={updateForm}
                        helperText={form.animalDescriptionErr}
                        err={form.animalDescriptionErr}
                        value={form.animalDescription}
                        multiline
                        rows={3}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset" width='120px'>
                    <FormLabel component="legend">Status</FormLabel>
                        <RadioGroup 
                            row 
                            name="isAdopted" 
                            value={form.isAdopted} 
                            onChange={(e) => {updateForm(e)}}           
                        >
                            <FormControlLabel 
                                value="true" 
                                control={<Radio color="primary" disableRipple />} 
                                label="Zaadoptowany" 
                            />
                            <FormControlLabel 
                                value="false" 
                                control={<Radio color="primary" disableRipple />}
                                label="Do adopcji"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <ImageUpload cardName="Input Image" onUpload={(image) => {
                        setImage(image);
                    }}/>
                </Grid>
            </Grid>
            <SignUpInButton btnText="Dodaj zwierzaka!"/>
        </form>
    )
}

export default AddAnimal;