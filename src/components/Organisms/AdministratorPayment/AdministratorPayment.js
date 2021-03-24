import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Container';

import styled from 'styled-components';

const StyledPaymentText = styled.span`
  font-weight: 700;
`;

function AdministratorPayment({ payment, take }) {
  let idHandler = () => take(payment._id);
  if (!take) {
    idHandler = null;
  }
  return (
    <>
      <Grid
        onClick={idHandler}
        key={payment._id}
        item
        xs={4}
        style={{
          border: '0.06em solid #0292c9',
          boxShadow: '0px 0.25em 0.25em #0292c9',
          margin: '20px',
          backgroundColor: 'white',
        }}
      >
        <Typography>
          <StyledPaymentText>Id płatności: </StyledPaymentText>
          {payment._id}
        </Typography>
        <Typography>
          <StyledPaymentText>Kwota: </StyledPaymentText>
          {payment.amount} PLN
        </Typography>
        <Typography>
          <StyledPaymentText>Typ płatności: </StyledPaymentText>
          {payment.typeOfPayment}
        </Typography>
        <Typography>
          <StyledPaymentText>Data płatności: </StyledPaymentText>
          <StyledPaymentText text="Data płatności: " />
          {payment.paymentDate ? payment.paymentDate.substr(0, 10) : ''}
        </Typography>
        <Typography>
          <StyledPaymentText>Metoda płatności: </StyledPaymentText>
          {payment.paymentMethod}
        </Typography>
        {payment.userID ? (
          <Typography>
            <StyledPaymentText>Użytkownik: </StyledPaymentText>
            {payment.userId}
          </Typography>
        ) : null}
      </Grid>
    </>
  );
}

export default AdministratorPayment;
