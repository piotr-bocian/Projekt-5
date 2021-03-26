import React from 'react';
import { Label } from '../Label/Label';
import { Wrapper } from '../../Molecules/PaymentFormField/PaymentFormFieldWrapper.styles';
import { NativeSelect } from '@material-ui/core';

const SelectPay = ({ onChange, optionType, name, id, label }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>
        {label}
        <NativeSelect
          style={{ display: 'block', marginTop: '10px' }}
          id={id}
          name={name}
          onChange={onChange}
        >
          {optionType.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </NativeSelect>
      </Label>
    </Wrapper>
  );
};

export default SelectPay;
