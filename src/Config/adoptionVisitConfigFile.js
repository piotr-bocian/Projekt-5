import { URL } from '../helpers/URL/url';

export const administratorVisitsConfig = {
  url: `${URL}/visits`,
  dataKey: ['results', 'adoption', 'results'],
  validate: null,
  select: [
    {
      label: 'Godzina',
      id: 'Godzina wizyty',
      filterOptions: ['dopisać', 'filtr'],
    },
  ],
  buttonText: 'Wyświetl wszystkie wizyty',
  configChildComponent: [
    { title: 'Data wizyty :', value: 'visitDate', helper: false },
    { title: 'Godzina wizyty :', value: 'visitTime', helper: false },
    { title: 'Czas trwania :', value: 'duration', helper: false },
    { title: 'Czy wizyta się odbyła :', value: 'isVisitDone', helper: false },
    { title: 'Uzytkownik :', value: 'userID', helper: false },
    { title: 'Zwierzę :', value: 'animalID', helper: false },
  ],
  initialState: {
    isVisitDone: 'isVisitDone',
    duration: 'duration',
    visitTime: 'visitTime',
    userID: 'userID',
    animalID: 'animalID',
    visitDate: 'visitDate',
  },
};
