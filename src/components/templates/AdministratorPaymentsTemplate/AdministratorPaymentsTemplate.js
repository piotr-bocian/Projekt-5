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
  const querry = filter.length === 0 ? '' : `?search=${filter}`;
  const handler = useHttp(
    'http://localhost:5000/api/payments' + querry,
    httpMethods.GET
  );
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const getPayments = async () => {
      const data = await handler.makeHttpRequest();
      setPayments(data.payments.results);
    };
    getPayments();
  }, [filter]);

  const onLoadPayments = (e) => setFilter(e.target.value);
  const onLoadAllPayments = () => setFilter('');

  return handler.isLoading ? (
    <Center>
      <CircularLoader />
    </Center>
  ) : (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
        WIDOK ADMINISTRATORA (PŁATNOŚCI)
      </h1>
      <Grid
        style={{ marginTop: '150px' }}
        container
        direction="row"
        spacing={3}
      >
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
          {payments.map((payment, id) => {
            return <AdministratorPayment key={id} payment={payment} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default AdministratorPaymentsTemplate;
