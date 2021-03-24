import { TextField } from '@material-ui/core';

const SignUpInTxtField = ({name, value, id, label,type, autoFocus}) => {
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
        />
    )
}

export default SignUpInTxtField

