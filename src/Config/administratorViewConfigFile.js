import { validatePayment } from '../helpers/paymentHelpers/paymentValidate';
import {
  paymentMethod,
  typeOfPayment,
} from '../helpers/paymentHelpers/paymenttypeAndMethodConst';


export const administratorPaymentConfig = {
  url: 'http://localhost:5000/api/payments',
  dataKey: ['payment', 'payments','results'],
  validate: validatePayment,
  label: [
    { label: 'Filtr metoda płatności', id: 'Metody płatności' },
    { label: 'Filtr typ płatności', id: 'Typ płatności' },
  ],
  filterOptions: { paymentMethod, typeOfPayment },
  buttonText: 'Wyświetl wszystkie płatności',
};

//CZY TO ZADZIAŁA???
export const administratorPaymentChildrenProps = {
  initialState: {
    //TO NIE ZADZIAŁA
    typeOfPayment: 'payment.typeOfPayment',
    amount: 'payment.amount',
    paymentMethod: 'payment.paymentMethod',
    paymentDate: 'payment.paymentDate',
  },
  displayText: [
    'Id płatności: ',
    'Kwota: ',
    'Typ płatności: ',
    'Data płatności: ',
    'Metoda płatności: ',
    'Użytkownik: ',
  ],
  //   name,
  //   value,
  //   helperText,
  //   buttonTexts,
};
