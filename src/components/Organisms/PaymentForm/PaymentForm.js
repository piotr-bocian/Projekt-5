import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { validatePayment } from '../../../helpers/paymentHelpers/paymentValidate';
import SelectPay from '../../Atoms/Select/Select';
import PaymentFormField from '../../Molecules/PaymentFormField/PaymentFormField';
import useHttp from '../../../hooks/useHttp/useHttp';
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
import CircularLoader from '../../Loaders/CircularLoader/CircularLoader';
import { Wrapper } from './PaymentForm.style';
import {
  paymentMethod,
  typeOfPayment,
} from '../../../helpers/paymentHelpers/paymenttypeAndMethodConst';
import SpringModal from '../../Molecules/Modal/Modal';

const PaymentForm = ({ title }) => {
  const initialState = {
    typeOfPayment: '',
    amount: 0,
    paymentMethod: '',
  };
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

  return handler.isLoading ? (
    <Wrapper>
      <CircularLoader />
    </Wrapper>
  ) : (
    <Wrapper>
      <SpringModal
        optionalMessage={handler.data.message}
        statement={handler.data}
      />
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
