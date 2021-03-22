import { TextField } from '@material-ui/core';

const AnimalNameField = ({ text }) => {
    return (
        <TextField
            variant="outlined"
            id="animal-name"
            label="Imię zwierzaka"
            defaultValue={text}
            InputProps={{
                readOnly: true,
            }}
        />
    );
};

export default AnimalNameField;
