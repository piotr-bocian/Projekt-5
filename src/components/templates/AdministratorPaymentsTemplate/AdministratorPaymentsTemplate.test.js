import React from 'react';
import { rest } from 'msw';
import { setupServer, setupWorker } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AdministratorPaymentsTemplate from './AdministratorPaymentsTemplate';
import AdministratorNavigation from '../AdministratorNavigation/AdministratorNavigation';
import App from '../../../view/App';

const fetchedPaymentsArray = {
  payments: {
    results: {
      amount: 34,
      paymentDate: '2021-03-28T15:44:19.163Z',
      paymentMethod: 'Karta płatnicza',
      typeOfPayment: 'Wirtualny opiekun-opłata cykliczna',
      __v: 0,
      _id: '60609e9058b9550015ffe8d4',
    },
  },
};


const server = setupServer(
  rest.get('http://localhost:5000/api/payments', (req, res, ctx) => {
    return res(ctx.json(fetchedPaymentsArray));
  })
);
// server.start()
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should load data from /payments', async () => {
  render(<App />);

  await waitFor(() => screen.getByText(/Kwota/i));
  expect(screen.getByText(/Kwota/i)).toBeInTheDocument();
});
