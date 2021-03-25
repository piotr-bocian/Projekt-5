import React from 'react';
import { TextField } from '@material-ui/core';

const SignUpInTxtField = ({name, value, id, label,type, autoFocus, updateForm, err, setErr}) => {
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
            onChange={
                (e) => {
                    // setErr(false);
                    updateForm(e);
                }
            }
        />
    )
}

export default SignUpInTxtField

