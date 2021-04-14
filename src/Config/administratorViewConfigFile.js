import { validatePayment } from '../helpers/paymentHelpers/paymentValidate';
import {
  paymentMethod,
  typeOfPayment,
} from '../helpers/paymentHelpers/paymenttypeAndMethodConst';
import { URL } from '../helpers/URL/url';
export const administratorPaymentConfig = {
  url: `${URL}/payments`,
  dataKey: ['payment', 'payments', 'results'],
  validate: validatePayment,
  select: [
    {
      label: 'Filtr metoda płatności',
      id: 'paymentMethod',
      filterOptions: paymentMethod,
    },
    {
      label: 'Filtr typ płatności',
      id: 'typeOfPayment',
      filterOptions: typeOfPayment,
    },
  ],
  buttonText: 'Wyświetl wszystkie płatności',
  configChildComponent: [
    { title: 'Data płatności:', value: 'paymentDate', helper: false },
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
