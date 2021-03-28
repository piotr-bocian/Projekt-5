import React, { useEffect, useReducer, useState } from 'react';
import useHttp from '../../../hooks/useHttp/useHttp';
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
import Grid from '@material-ui/core/Grid';
import AdministratorPayment from '../../Organisms/AdministratorPayment/AdministratorPayment';
import SelectPay from '../../Atoms/Select/Select';
import { Button } from '@material-ui/core';
import CircularLoader from '../../Loaders/CircularLoader/CircularLoader';
import { validatePayment } from '../../../helpers/paymentHelpers/paymentValidate';
import httpReducer from '../../../helpers/httpReducer/httpReducer';
import {
  paymentMethod,
  typeOfPayment,
} from '../../../helpers/paymentHelpers/paymenttypeAndMethodConst';
import { Center } from './AdministratorPaymentsTemplate.styles';

const AdministratorPaymentsTemplate = () => {
  const initialState = {
    url: 'http://localhost:5000/api/payments',
    request: 'GET',
    validate: null,
    payload: null,
  };
  const [payments, setPayments] = useState([]);
  const [state, dispatch] = useReducer(httpReducer, initialState);
  const [filter, setFilter] = useState('');
  const [id, setId] = useState('');

  const querry = filter.length === 0 ? `${id}` : `?search=${filter}`;
  console.log(querry);

  const { makeHttpRequest, isLoading } = useHttp(
    'http://localhost:5000/api/payments' + querry,
    state.request,
    state.payload,
    state.validate
  );

  useEffect(() => {

    const getPayments = async () => {
      const data = await makeHttpRequest();
      console.log(data);
      if (data.payment) {
        setPayments(data.payment);
      } else {
        setPayments(data.payments.results);
      }
    };
    getPayments();
  }, [filter, id, state]);



  const searchBy = (e) => setFilter(e.target.value);

  const onLoadAllPayments = async () => {
    setFilter('');
    setId('');
    dispatch({ type: httpMethods.GET });
  };

  const deleteOnePayment = async (handler) => {
    const route = '/' + handler;
    setId(route);
    dispatch({ type: httpMethods.DELETE });
  };

  const updateOnePayment = async (handler, payload) => {
    const route = '/' + handler;
    setId(route);

    dispatch({
      type: httpMethods.PUT,
      validate: validatePayment,
      payload: payload,
    });
  };

  return isLoading ? (
    <Center>
      <CircularLoader />
    </Center>
  ) : (
    <>
      <Grid style={{ marginTop: '50px' }} container direction="row" spacing={3}>
        <Grid
          container
          item
          xs={12}
          spacing={3}
          justify="center"
          alignItems="center"
        >
          <SelectPay
            label="Filtr metoda płatności"
            optionType={paymentMethod}
            onChange={searchBy}
            id="Metody płatności"
          />
          <SelectPay
            label="Filtr typ płatności"
            optionType={typeOfPayment}
            onChange={searchBy}
            id="Typ płatności"
          />
          <Button onClick={onLoadAllPayments}>
            Wyświetl wszystkie płatności
          </Button>
        </Grid>

        <Grid
          container
          item
          xs={12}
          spacing={3}
          justify="center"
          alignItems="center"
        >
          {Array.isArray(payments) && payments.length !== 0 ? (
            payments.map((payment, id) => {
              return (
                <AdministratorPayment
                  deletePayment={deleteOnePayment}
                  updatePayment={updateOnePayment}
                  key={id}
                  payment={payment}
                />
              );
            })
          ) : (
            <AdministratorPayment key={id} payment={payments} />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default AdministratorPaymentsTemplate;
