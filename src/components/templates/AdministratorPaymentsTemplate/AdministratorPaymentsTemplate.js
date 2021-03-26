import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useHttp from '../../../hooks/useHttp/useHttp';
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
import Grid from '@material-ui/core/Grid';
import AdministratorPayment from '../../Organisms/AdministratorPayment/AdministratorPayment';
import SelectPay from '../../Atoms/Select/Select';
import { Button } from '@material-ui/core';
import CircularLoader from '../../Loaders/CircularLoader/CircularLoader';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;

const AdministratorPaymentsTemplate = () => {
  const paymentMethods = [
    '',
    'Blik',
    'Apple Pay',
    'Google Pay',
    'Przelew bankowy',
    'Karta płatnicza',
  ];
  const typeOfPayment = [
    '',
    'Opłata adopcyjna',
    'Jednorazowy przelew',
    'Wirtualny opiekun-opłata cykliczna',
  ];
  const [filter, setFilter] = useState('');
  const [id, setId] = useState('');
  const querry = filter.length === 0 ? `${id}` : `?search=${filter}`;
  const handler = useHttp(
    'http://localhost:5000/api/payments' + querry,
    httpMethods.GET
  );
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    console.log(1);
    const getPayments = async () => {
      const data = await handler.makeHttpRequest();
      if (data.payment) {
        setPayments(data.payment);
      } else {
        setPayments(data.payments.results);
      }
    };
    getPayments();
  }, [filter, id]);

  const onLoadPayments = (e) => setFilter(e.target.value);
  const onLoadAllPayments = () => {
    setFilter('');
    setId('');
  };
  const takeOneId = (handler) => {
    const route = '/' + handler;
    setId(route);
  };

  return handler.isLoading ? (
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
            optionType={paymentMethods}
            onChange={onLoadPayments}
            id="Metody płatności"
          />
          <SelectPay
            label="Filtr typ płatnośći"
            optionType={typeOfPayment}
            onChange={onLoadPayments}
            id="Typ płatności"
          />
          <Button onClick={onLoadAllPayments}>
            Wyświetl wszystkie płatnośći
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
                  take={takeOneId}
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
