import React, { useEffect, useReducer, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import useHttp from '../../../hooks/useHttp/useHttp';
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
import AdministratorPayment from '../../Organisms/AdministratorPayment/AdministratorPayment';
import SelectPay from '../../Atoms/Select/Select';
import CircularLoader from '../../Loaders/CircularLoader/CircularLoader';
import { validatePayment } from '../../../helpers/paymentHelpers/paymentValidate';
import httpReducer from '../../../helpers/httpReducer/httpReducer';
import {
  paymentMethod,
  typeOfPayment,
} from '../../../helpers/paymentHelpers/paymenttypeAndMethodConst';
import { Center } from './AdministratorPaymentsTemplate.styles';

const AdministratorPaymentsTemplate = ({administratorConfig}) => {
  const initialState = {
    url: administratorConfig.url,
    request: 'GET',
    validate: null,
    payload: null,
  };

  const [state, dispatch] = useReducer(httpReducer, initialState);
  const [dataFromAPI, setDataFromAPI] = useState([]);
  const [filter, setFilter] = useState('');
  const [id, setId] = useState('');

  const querry = filter.length === 0 ? `${id}` : `?search=${filter}`;
  const { makeHttpRequest, isLoading } = useHttp(
    state.url + querry,
    state.request,
    state.payload,
    state.validate
  );

  useEffect(() => {
    const getPayments = async () => {
      const data = await makeHttpRequest();

      if (data.payment) {
        setDataFromAPI(data[administratorConfig.dataKey[0]]);
      } else {
        setDataFromAPI(data[administratorConfig.dataKey[1]][administratorConfig.dataKey[2]]);
      }
    };
    getPayments();
  }, [filter, id, state]);

  const searchBy = (e) => setFilter(e.target.value);

  const onLoadAllData = async () => {
    setFilter('');
    setId('');
    dispatch({ type: httpMethods.GET });
  };

  const deleteOne = async (handler) => {
    const route = '/' + handler;
    setId(route);
    setFilter('');
    dispatch({ type: httpMethods.DELETE });
  };

  const updateOne = async (handler, payload) => {
    const route = '/' + handler;
    setId(route);
    setFilter('');
    dispatch({
      type: httpMethods.PUT,
      validate: administratorConfig.validate,
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
            label={administratorConfig.label[0].label}
            optionType={administratorConfig.filterOptions.paymentMethod}
            onChange={searchBy}
            id={administratorConfig.label[0].id}
          />
          <SelectPay
            label={administratorConfig.label[1].label}
            optionType={administratorConfig.filterOptions.typeOfPayment}
            onChange={searchBy}
            id={administratorConfig.label[1].id}
          />
          <Button onClick={onLoadAllData}>
            {administratorConfig.buttonText}
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
          {Array.isArray(dataFromAPI) && dataFromAPI.length !== 0 ? (
            dataFromAPI.map((data, id) => {
              return (
                <AdministratorPayment
                  deletePayment={deleteOne}
                  updatePayment={updateOne}
                  key={id}
                  payment={data}
                />
              );
            })
          ) : (
            <AdministratorPayment key={id} payment={dataFromAPI} />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default AdministratorPaymentsTemplate;






////////////////////TA WERSJA PONIŻEJ JEST NIE MODYFIKOWANA//////////////////
// import React, { useEffect, useReducer, useState } from 'react';
// import Grid from '@material-ui/core/Grid';
// import { Button } from '@material-ui/core';
// import useHttp from '../../../hooks/useHttp/useHttp';
// import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
// import AdministratorPayment from '../../Organisms/AdministratorPayment/AdministratorPayment';
// import SelectPay from '../../Atoms/Select/Select';
// import CircularLoader from '../../Loaders/CircularLoader/CircularLoader';
// import { validatePayment } from '../../../helpers/paymentHelpers/paymentValidate';
// import httpReducer from '../../../helpers/httpReducer/httpReducer';
// import {
//   paymentMethod,
//   typeOfPayment,
// } from '../../../helpers/paymentHelpers/paymenttypeAndMethodConst';
// import { Center } from './AdministratorPaymentsTemplate.styles';

// const AdministratorPaymentsTemplate = () => {
//   const initialState = {
//     url: 'http://localhost:5000/api/payments', //TUTAJ URL
//     request: 'GET',
//     validate: null,
//     payload: null,
//   };

//   const [state, dispatch] = useReducer(httpReducer, initialState);
//   const [payments, setPayments] = useState([]);
//   const [filter, setFilter] = useState('');
//   const [id, setId] = useState('');

//   const querry = filter.length === 0 ? `${id}` : `?search=${filter}`;
//   const { makeHttpRequest, isLoading } = useHttp(
//     state.url + querry,
//     state.request,
//     state.payload,
//     state.validate
//   );

//   useEffect(() => {
//     const getPayments = async () => {
//       const data = await makeHttpRequest();

//       if (data.payment) {
//         setPayments(data.payment); //TUTAJ KLUCZ
//       } else {
//         setPayments(data.payments.results); //TUTAJ KLUCZ
//       }
//     };
//     getPayments();
//   }, [filter, id, state]);

//   const searchBy = (e) => setFilter(e.target.value);

//   const onLoadAllPayments = async () => {
//     setFilter('');
//     setId('');
//     dispatch({ type: httpMethods.GET });
//   };

//   const deleteOnePayment = async (handler) => {
//     const route = '/' + handler;
//     setId(route);
//     setFilter('');
//     dispatch({ type: httpMethods.DELETE });
//   };

//   const updateOnePayment = async (handler, payload) => {
//     const route = '/' + handler;
//     setId(route);
//     setFilter('');
//     dispatch({
//       type: httpMethods.PUT,
//       validate: validatePayment, //TUTAJ FUNKCJA
//       payload: payload,
//     });
//   };

//   return isLoading ? (
//     <Center>
//       <CircularLoader />
//     </Center>
//   ) : (
//     <>
//       <Grid style={{ marginTop: '50px' }} container direction="row" spacing={3}>
//         <Grid
//           container
//           item
//           xs={12}
//           spacing={3}
//           justify="center"
//           alignItems="center"
//         >
//           <SelectPay
//             label="Filtr metoda płatności"//TUTAJ TEKST LABELA
//             optionType={paymentMethod} //OPCJE FILTRA
//             onChange={searchBy}
//             id="Metody płatności" //TUTAJ ID
//           />
//           <SelectPay
//             label="Filtr typ płatności" //TUTAJ TEKST LABELA
//             optionType={typeOfPayment} //OPCJE FILTRA
//             onChange={searchBy}
//             id="Typ płatności" //TUTAJ ID
//           />
//           <Button onClick={onLoadAllPayments}>
//             {/* TUTAJ BARDZIEJ UNIWERSALNY TEKST */}
//             Wyświetl wszystkie płatności
//           </Button>
//         </Grid>

//         <Grid
//           container
//           item
//           xs={12}
//           spacing={3}
//           justify="center"
//           alignItems="center"
//         >
//           {Array.isArray(payments) && payments.length !== 0 ? (
//             payments.map((payment, id) => {
//               return (
//                 <AdministratorPayment
//                   deletePayment={deleteOnePayment}
//                   updatePayment={updateOnePayment}
//                   key={id}
//                   payment={payment}
//                 />
//               );
//             })
//           ) : (
//             <AdministratorPayment key={id} payment={payments} />
//           )}
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default AdministratorPaymentsTemplate;
