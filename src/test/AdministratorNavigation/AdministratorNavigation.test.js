import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';

import AdministratorNavigation from '../../components/templates/AdministratorNavigation/AdministratorNavigation';

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
  //PAMIETAJ PODMIEN URL NA PRAWIDŁOWY
  rest.get('http://localhost:5000/api/payments', (req, res, ctx) => {
    return res(ctx.json(fetchedPaymentsArray));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('administrator navigation test', () => {
  it('checks that components render properly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <AdministratorNavigation />
      </Router>
    );
    expect(screen.getByText(/Płatności/i)).toBeInTheDocument();
    expect(screen.getByText(/Zwierzęta/i)).toBeInTheDocument();
    expect(screen.getByText(/Wizyty Adopcyjne/i)).toBeInTheDocument();
    expect(screen.getByText(/Użytkownicy/i)).toBeInTheDocument();
  });

  it('checks that the data is downloaded after the user performed an action  ', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <AdministratorNavigation />
      </Router>
    );
    expect(screen.getByText(/Płatności/i)).toBeInTheDocument();
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Płatności/i), leftClick);
    await waitFor(() => screen.getByText(/Kwota/i));
    await waitFor(() => screen.getByText(/Id płatności:/i));
    await waitFor(() => screen.getByText(/Data płatności:/i));
    expect(screen.getByText(/Kwota/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/34/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/2021-03-28/i)).toBeInTheDocument();
    expect(screen.getByText(/60609e9058b9550015ffe8d4/i)).toBeInTheDocument();
    expect(screen.getByText(/Id płatności:/i)).toBeInTheDocument();
    expect(screen.getByText(/Data płatności:/i)).toBeInTheDocument();
  });
});
