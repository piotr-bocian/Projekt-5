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

function AdministratorPayment({
  renderData,
  createState,
  payment,
  deletePayment,
  updatePayment = null,
}) {
  //CAŁY OBIEKT STANU
  let initialState = {};

  for (let [key, value] of Object.entries(createState)) {
    console.log(key, value);
    initialState = {
      [key]: payment[value],
    };
  }

  let deleteOnePayment = () => deletePayment(payment._id);
  if (!deletePayment) {
    deleteOnePayment = null;
  }

  const [toggle, setToggle] = useState(false);
  const [state, setState] = useState(initialState);

  const inputPaymentHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

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
          <StyledPaymentText>Data płatności: </StyledPaymentText>
          <StyledPaymentText text="Data płatności: " />
          {payment.paymentDate ? payment.paymentDate.substr(0, 10) : ''}
        </StyledTypography>

        {renderData.map((iterate) => {
          return (
            <StyledTypography>
              <StyledPaymentText>{iterate.title} </StyledPaymentText>
              {toggle ? (
                <>
                  <TextField
                    fullWidth
                    name={iterate.value}
                    value={state[iterate.value]}
                    onChange={inputPaymentHandler}
                  />
                  {iterate.helper && (
                    <FormHelperText>{iterate.helperText}</FormHelperText>
                  )}
                </>
              ) : (
                <TextField fullWidth value={payment[iterate.value]} disabled />
              )}
            </StyledTypography>
          );
        })}

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
              updatePayment(payment._id, state);
            }}
          >
            Uaktualnij płatność
          </Button>
        </FlexWrapper>
      </Grid>
    </>
  );
}

export default React.memo(AdministratorPayment);
