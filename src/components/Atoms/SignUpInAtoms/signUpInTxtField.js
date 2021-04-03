import React from 'react';
import { TextField } from '@material-ui/core';

const SignUpInTxtField = ({name, value, id, label,type, autoFocus, updateForm, err, helperText}) => {
    return (
        <TextField
            name={name}
            variant="outlined"
            value={value}
            required
            fullWidth
            id={id}
            label={label}
            type={type}
            autoFocus={autoFocus}
            error={err}
            helperText={helperText}
            onChange={
                (e) => {
                    updateForm(e);
                }
            }
        />
    )
}

export default SignUpInTxtField

