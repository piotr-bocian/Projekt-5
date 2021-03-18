import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { validatePayment } from '../../../helpers/paymentHelpers/paymentValidate';
import SelectPay from '../../Atoms/Select/Select';
import PaymentFormField from '../../Molecules/PaymentFormField/PaymentFormField';
import useHttp from '../../../hooks/useHttp/useHttp';
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';

const Wrapper = styled.form`
  width: 20vw;
  padding: 2em;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const initialState = {
  typeOfPayment: '',
  amount: 0,
  paymentMethod: '',
};

const PaymentForm = ({ title }) => {
  const [typeOfPayment, setTypeOfPayment] = useState([
    'Opłata adopcyjna',
    'Jednorazowy przelew',
    'Wirtualny opiekun-opłata cykliczna',
  ]);
  const [paymentMethod, setPaymentMethod] = useState([
    'Karta płatnicza',
    'Blik',
    'Przelew bankowy',
    'Apple Pay',
    'Google Pay',
  ]);
  const [paymentState, setPaymentState] = useState(initialState);

  const handler = useHttp(
    'https://best-animal-shelter.herokuapp.com/api/payments',
    httpMethods.POST,
    paymentState,
    validatePayment
  );

  const inputPaymentHandler = (e) => {
    setPaymentState({
      ...paymentState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper>
      <h2>{title}</h2>
      <PaymentFormField
        label="Kwota Przelewu"
        id="amount"
        name="amount"
        value={paymentState.amount}
        onChange={inputPaymentHandler}
      />
      <SelectPay
        label="Typ płatności"
        id="typeOfPayment"
        name="typeOfPayment"
        value={paymentState.typeOfPayment}
        optionType={typeOfPayment}
        onChange={inputPaymentHandler}
      />
      <SelectPay
        label="Metoda płatności"
        id="paymentMethod"
        name="paymentMethod"
        value={paymentState.paymentMethod}
        optionType={paymentMethod}
        onChange={inputPaymentHandler}
      />
      <Button
        style={{ marginTop: 10 }}
        color="primary"
        variant="contained"
        onClick={handler.handleHttpRequest}
      >
        Wyślij
      </Button>
    </Wrapper>
  );
};

export default PaymentForm;
