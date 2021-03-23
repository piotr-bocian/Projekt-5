import { TextField, MenuItem } from '@material-ui/core';

const SelectDuration = ({ onChange, optionValues, label, value, id }) => {
    return (
        <TextField
            variant='outlined'
            id={id}
            select
            label={label}
            value={value}
            onChange={onChange}
        >
            {optionValues.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
        ))}
        </TextField>
    );
};

export default SelectDuration;
