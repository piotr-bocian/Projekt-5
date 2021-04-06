import { URL } from '../helpers/URL/url';

export const administratorAdoptionConfig = {
  url: `${URL}/adoptionforms`,
  dataKey: [false, 'adoption', 'results'], //DO POPRAWY NA BACKENDZIE
  validate: null,
    select: [
      {
        label: 'BRAK FILTROW',
        id: 'BRAK',
        filterOptions: ['NIE', 'MA', 'FILTRÓW'],
      },
    ],
  buttonText: 'Wyświetl wszystkie formularze',
  configChildComponent: [
    {
      title: 'Opis: ',
      value: 'content',
      helper: false,
    },
    {
      title: 'Użytkownik: ',
      value: 'userID',
    },
    {
      title: 'Zwierze: ',
      value: 'animalID',
      helper: false,
    },
  ],
  initialState: {
    content: 'content',
    userID: 'userID',
    adnimalID: 'animalID',
  },
};
