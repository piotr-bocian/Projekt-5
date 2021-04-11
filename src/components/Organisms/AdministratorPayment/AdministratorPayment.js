import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Button, FormHelperText, TextField } from '@material-ui/core';
import { FlexWrapper } from '../../../styles/stylesContainer/FlexWrapper';

const StyledPaymentText = styled.span`
  font-family: 'Roboto';
  font-weight: 550;
  margin-right: 15px;
`;

const StyledTypography = withStyles(() => ({
  root: {
    fontFamily: 'Roboto',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'baseline',
    padding: '15px',
    flexWrap: 'wrap',
  },
}))(Typography);

const StyledButton = withStyles(() => ({
  root: {
    margin: '0 auto',
    fontFamily: 'Roboto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    flexWrap: 'wrap',
  },
}))(Button);

function AdministratorPayment({
  renderData,
  createState,
  payment,
  deletePayment,
  updatePayment = null,
  take = null,
}) {
  let initialState;
  for (let [key, value] of Object.entries(createState)) {
    initialState = { [key]: payment[value], ...initialState };
  }

  const [activeData, setActiveData] = useState(initialState);
  const [toggle, setToggle] = useState(false);

  let deleteOnePayment = () => deletePayment(payment._id);
  if (!deletePayment) {
    deleteOnePayment = null;
  }

  const inputPaymentHandler = (e) => {
    setActiveData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return payment.length === 0 ? (
    <FlexWrapper>
      <StyledTypography style={{ fontSize: '40px' }}>
        Brak Danych
      </StyledTypography>
    </FlexWrapper>
  ) : (
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
          <StyledPaymentText>Id dokumentu: </StyledPaymentText>
          {payment._id}
        </StyledTypography>

        {renderData.map((iterate, id) => {
          return (
            <StyledTypography key={id}>
              <StyledPaymentText>{iterate.title}</StyledPaymentText>
              {toggle ? (
                <>
                  <TextField
                    fullWidth
                    name={iterate.value}
                    value={activeData[iterate.value]}
                    onChange={inputPaymentHandler}
                  />
                  {iterate.helper && (
                    <FormHelperText>{iterate.helperText}</FormHelperText>
                  )}
                </>
              ) : (
                <TextField
                  textarea="true"
                  fullWidth
                  value={payment[iterate.value]}
                  disabled
                />
              )}
            </StyledTypography>
          );
        })}

        {payment.userID ? (
          <StyledButton
            style={{ border: '2px solid black' }}
            onClick={() => take(payment.userId || payment.userID)}
          >
            <StyledPaymentText>Użytkownik: </StyledPaymentText>
            {payment.userId || payment.userID}
          </StyledButton>
        ) : null}

        <FlexWrapper style={{ margin: '20px 20px 0' }}>
          <Button
            onClick={deleteOnePayment}
            variant="outlined"
            color="secondary"
          >
            Usuń
          </Button>
          <Button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Edytuj
          </Button>
          <Button
            onClick={() => {
              updatePayment(payment._id, activeData);
            }}
          >
            Uaktualnij
          </Button>
        </FlexWrapper>
      </Grid>
    </>
  );
}

export default AdministratorPayment;
