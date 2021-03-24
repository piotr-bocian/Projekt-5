import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Container';
import PaymentText from '../TextSeparator/TextSeparator';

function AdministratorPayment({ payment }) {
  return (
    <>
      <Grid
        key={payment._id}
        item
        xs={4}
        style={{
          border: '0.06em solid #0292c9',
          boxShadow: '0px 0.25em 0.25em #0292c9',
          margin: '20px',
        }}
      >
        <Typography>
          <PaymentText text="Id płatności: " />
          {payment._id}
        </Typography>
        <Typography>
          <PaymentText text="Kwota:  " />
          {payment.amount} PLN
        </Typography>
        <Typography>
          <PaymentText text="Typ płatności: " />
          {payment.typeOfPayment}
        </Typography>
        <Typography>
          <PaymentText text="Data płatności: " />
          {payment.paymentDate}
        </Typography>
        <Typography>
          <PaymentText text="Metoda płatności:  " />
          {payment.paymentMethod}
        </Typography>
        {payment.userID ? (
          <Typography>
            <PaymentText text="Metoda płatności:  " />
            {payment.userId}
          </Typography>
        ) : null}
      </Grid>
    </>
  );
}

export default AdministratorPayment;
