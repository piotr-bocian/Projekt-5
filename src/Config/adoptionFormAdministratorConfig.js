import { URL } from '../helpers/URL/url';

export const administratorAdoptionConfig = {
  url: `${URL}/adoptionforms`,
  dataKey: ['adoptionForm', 'adoptionForms', 'results'], //DO POPRAWY NA BACKENDZIE
  validate: null,
  select: [],
  buttonText: 'Wyświetl wszystkie formularze',
  configChildComponent: [
    {
      title: 'Opis: ',
      value: 'content',
      helper: false,
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
