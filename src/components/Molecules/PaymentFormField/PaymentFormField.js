import { TextField } from '@material-ui/core';
import React from 'react';
import { Label } from '../../Atoms/Label/Label';
import { Wrapper } from './PaymentFormFieldWrapper.styles';
import FormHelperText from '@material-ui/core/FormHelperText';

const PaymentFormField = ({
  label,
  id,
  name,
  type = 'text',
  onChange,
  value,
  errorHandler,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <TextField
        autoFocus={true}
        value={value}
        name={name}
        id={id}
        type={type}
        onChange={onChange}
      />
      <FormHelperText style={{ color: 'red' }}>{errorHandler}</FormHelperText>
    </Wrapper>
  );
};

export default PaymentFormField;
