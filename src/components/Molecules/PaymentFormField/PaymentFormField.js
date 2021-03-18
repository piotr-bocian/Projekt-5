import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Label } from '../../Atoms/Label/Label';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  ${Label} {
    margin: 10px auto;
  }
`;

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
