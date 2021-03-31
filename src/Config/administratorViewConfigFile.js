import { validatePayment } from '../helpers/paymentHelpers/paymentValidate';
import {
  paymentMethod,
  typeOfPayment,
} from '../helpers/paymentHelpers/paymenttypeAndMethodConst';

export const administratorPaymentConfig = {
  url: 'http://localhost:5000/api/payments',
  dataKey: ['payment', 'payments', 'results'],
  validate: validatePayment,
  select: [
    {
      label: 'Filtr metoda płatności',
      id: 'Metody płatności',
      filterOptions: paymentMethod,
    },
    {
      label: 'Filtr typ płatności',
      id: 'Typ płatności',
      filterOptions: typeOfPayment,
    },
  ],
  buttonText: 'Wyświetl wszystkie płatności',
  configChildComponent: [
    { title: 'Kwota: ', value: 'amount', helper: false },
    {
      title: 'Typ płatności: ',
      value: 'typeOfPayment',
      helper: true,
      helperText: `Dostępne opcje: 'Opłata adopcyjna','Jednorazowy przelew','Wirtualny opiekun-opłata cykliczna'`,
    },
    {
      title: 'Metoda płatności: ',
      value: 'paymentMethod',
      helper: true,
      helperText: `Dostępne opcje: 'Karta płatnicza','Blik', 'Przelew bankowy','Apple Pay', 'Google Pay'`,
    },
  ],
  initialState: {
    amount: 'amount',
    paymentMethod: 'paymentMethod',
    typeOfPayment: 'typeOfPayment',
    paymentDate: 'paymentDate',
  },
};
