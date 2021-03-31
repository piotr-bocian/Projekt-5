import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { administratorPaymentConfig } from '../../Config/administratorViewConfigFile';
import AdministratorPayment from '../../components/Organisms/AdministratorPayment/AdministratorPayment';
import AdministratorViewTemplate from '../../components/templates/AdministratorViewTemplate/AdministratorViewTemplate';

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

describe('Is Administrator Payments View with data fetched from API correct render', () => {
  it('should load data from /payments and display it', async () => {
    render(
      <AdministratorViewTemplate
        administratorConfig={administratorPaymentConfig}
        componentName={<AdministratorPayment />}
      />
    );

    await waitFor(() => screen.getByText(/Kwota/i));
    await waitFor(() => screen.getByText(/Id płatności:/i));
    await waitFor(() => screen.getByText(/Data płatności:/i));
    expect(screen.getByText(/Kwota/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/34/i)).toBeInTheDocument();
    expect(screen.getByText(/2021-03-28/i)).toBeInTheDocument();
    expect(screen.getByText(/60609e9058b9550015ffe8d4/i)).toBeInTheDocument();
    expect(screen.getByText(/Id płatności:/i)).toBeInTheDocument();
    expect(screen.getByText(/Data płatności:/i)).toBeInTheDocument();
  });

  it('should display menu with options after user left click "Filtr metoda płatności"', async () => {
    render(
      <AdministratorViewTemplate
        administratorConfig={administratorPaymentConfig}
        componentName={<AdministratorPayment />}
      />
    );
    await waitFor(() => screen.getByText('Filtr metoda płatności'));
    fireEvent.click(screen.getByText(/Filtr metoda płatności/i));
    expect(screen.getByText(/Blik/i)).toBeInTheDocument();
  });

  it('should display menu with options after user left click on "Filtr Typ płatności"', async () => {
    render(
      <AdministratorViewTemplate
        administratorConfig={administratorPaymentConfig}
        componentName={<AdministratorPayment />}
      />
    );
    await waitFor(() => screen.getByText('Filtr typ płatności'));
    fireEvent.click(screen.getByText(/Filtr typ płatności/i));
    expect(screen.getByText(/opłata adopcyjna/i)).toBeInTheDocument();
  });

  it('should display correct buttons', async () => {
    render(
      <AdministratorViewTemplate
        administratorConfig={administratorPaymentConfig}
        componentName={<AdministratorPayment />}
      />
    );
    await waitFor(() => screen.getByText('Usuń płatność'));
    await waitFor(() => screen.getByText('Edytuj płatność'));
    await waitFor(() => screen.getByText('Uaktualnij płatność'));
    expect(screen.getByText(/Usuń płatność/i)).toBeInTheDocument();
    expect(screen.getByText(/Edytuj płatność/i)).toBeInTheDocument();
    expect(screen.getByText(/Uaktualnij płatność/i)).toBeInTheDocument();
  });
});
