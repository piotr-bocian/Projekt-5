import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Button, FormHelperText, TextField } from '@material-ui/core';
import { FlexWrapper } from '../../../styles/stylesContainer/FlexWrapper';

const StyledPaymentText = styled.span`
  font-weight: 700;
  margin-right: 15px;
`;

const StyledTypography = withStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'baseline',
    padding: '15px',
    flexWrap: 'wrap',
  },
}))(Typography);

function AdministratorPayment({
  payment,
  deletePayment,
  updatePayment = null,
}) {
  const [toggle, setToggle] = useState(false);
  const initialState = {
    typeOfPayment: payment.typeOfPayment,
    amount: payment.amount,
    paymentMethod: payment.paymentMethod,
    paymentDate: payment.paymentDate,
  };

  const [paymentState, setPaymentState] = useState(initialState);

  const inputPaymentHandler = (e) => {
    setPaymentState({
      ...paymentState,
      [e.target.name]: e.target.value,
    });
  };

  let deleteOnePayment = () => deletePayment(payment._id);
  if (!deletePayment || !updatePayment) {
    deleteOnePayment = null;
  }

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
          backgroundColor: 'white',
        }}
      >
        <StyledTypography>
          <StyledPaymentText>Id płatności: </StyledPaymentText>
          {payment._id}
        </StyledTypography>

        <StyledTypography>
          <StyledPaymentText>Kwota: </StyledPaymentText>
          {toggle ? (
            <TextField
              name="amount"
              value={paymentState.amount}
              onChange={inputPaymentHandler}
            />
          ) : (
            <TextField value={payment.amount} disabled />
          )}
          PLN
        </StyledTypography>

        <StyledTypography>
          <StyledPaymentText>Typ płatności: </StyledPaymentText>
          {toggle ? (
            <>
              <TextField
                name="typeOfPayment"
                value={paymentState.typeOfPayment}
                onChange={inputPaymentHandler}
              />
              <FormHelperText>
                Dostępne opcje: 'Opłata adopcyjna', 'Jednorazowy przelew',
                'Wirtualny opiekun-opłata cykliczna',
              </FormHelperText>
            </>
          ) : (
            <TextField fullWidth value={payment.typeOfPayment} disabled />
          )}
        </StyledTypography>

        <StyledTypography>
          <StyledPaymentText>Data płatności: </StyledPaymentText>
          <StyledPaymentText text="Data płatności: " />
          {payment.paymentDate ? payment.paymentDate.substr(0, 10) : ''}
        </StyledTypography>

        <StyledTypography>
          <StyledPaymentText>Metoda płatności: </StyledPaymentText>
          {toggle ? (
            <>
              <TextField
                name="paymentMethod"
                value={paymentState.paymentMethod}
                onChange={inputPaymentHandler}
              />
              <FormHelperText>
                Dostępne opcje: 'Karta płatnicza', 'Blik', 'Przelew bankowy',
                'Apple Pay', 'Google Pay',
              </FormHelperText>
            </>
          ) : (
            <TextField value={payment.paymentMethod} disabled />
          )}
        </StyledTypography>

        {payment.userID ? (
          <StyledTypography>
            <StyledPaymentText>Użytkownik: </StyledPaymentText>
            {payment.userId}
          </StyledTypography>
        ) : null}
        <FlexWrapper style={{ margin: '20px 20px 0' }}>
          <Button
            onClick={deleteOnePayment}
            variant="outlined"
            color="secondary"
          >
            Usuń płatność
          </Button>
          <Button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Edytuj płatność
          </Button>
          <Button
            onClick={() => {
              updatePayment(payment._id, paymentState);
            }}
          >
            Uaktualnij płatność
          </Button>
        </FlexWrapper>
      </Grid>
    </>
  );
}

export default AdministratorPayment;
