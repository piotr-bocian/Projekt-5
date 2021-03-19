import { TextField } from '@material-ui/core';
import React from 'react';
import { Label } from '../../Atoms/Label/Label';
import {Wrapper} from './PaymentFormFieldWrapper.styles'


const PaymentFormField = ({
  label,
  id,
  name,
  type = 'text',
  onChange,
  value,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <TextField
        value={value}
        name={name}
        id={id}
        type={type}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default PaymentFormField;
