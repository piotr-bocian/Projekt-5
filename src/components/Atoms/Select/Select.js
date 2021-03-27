import React from 'react';
import { Label } from '../Label/Label';
import { Wrapper } from '../../Molecules/PaymentFormField/PaymentFormFieldWrapper.styles';
import { FormControl, NativeSelect } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

const SelectPay = ({ onChange, optionType, name, id, label, error }) => {
  return (
    <Wrapper>
      <FormControl error={error}>
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
          <FormHelperText style={{ color: 'red' }}>{error}</FormHelperText>
        </Label>
      </FormControl>
    </Wrapper>
  );
};

export default SelectPay;
