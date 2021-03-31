import React from 'react';
import { TextField } from '@material-ui/core';

const VolunteerFormTextField = ({ label, name, value, updateForm, err, setErr}) => {
    return (
        <TextField 
            fullWidth
            variant="outlined" 
            label={label}
            name={name}
            value={value}
            error={err}
            onChange={
                (e) => {
                    setErr(false);
                    updateForm(e);
                }
            }
        />
    )
}

export default VolunteerFormTextField;