import React from 'react';
import { Label } from '../Label/Label';
import { NativeSelect } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-right: 30px;
  ${Label} {
    margin: 10px auto;
  }
`;
const SelectPay = ({ onChange, optionType, name=null, id, label='Filtr płatności' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>
        {label}
        <NativeSelect
          style={{ display: 'block', marginTop: '10px',marginRight: '50px' }}
          id={id}
          name={name}
          onChange={onChange}
        >
          {optionType.map((type, index) => (
            <option key={index} value={type} id={id}>
              {type}
            </option>
          ))}
        </NativeSelect>
      </Label>
    </Wrapper>
  );
};

export default SelectPay;
