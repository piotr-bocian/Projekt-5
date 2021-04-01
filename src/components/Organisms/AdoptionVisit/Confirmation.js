import { TextField } from '@material-ui/core';

const AnimalNameField = () => {
    return (
        <TextField
            variant="outlined"
            disabled
            id="animal-name"
            label="Imię zwierzaka"
            defaultValue="GRATULACJE"
            InputProps={{
                readOnly: true,
            }}
        />
    );
};

export default AnimalNameField;