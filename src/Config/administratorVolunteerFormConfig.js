import { URL } from '../helpers/URL/url';

export const administratorVolunteerFormConfig = {
  url: `${URL}/volunteerForms`,
  dataKey: ['results', 'volunteerForms', 'results'],
  validate: null,
  select: [
  ],
  buttonText: 'Wyświetl wszystkich wolontariuszy',
  configChildComponent: [
    { title: 'Imie :', value: 'firstName', helper: false },
    { title: 'Nazwisko :', value: 'lastName', helper: false },
    { title: 'Data urodzenia :', value: 'birthDate', helper: false },
    { title: 'Telefon :', value: 'mobile', helper: false },
    { title: 'Zawód :', value: 'occupation', helper: false },
    {
      title: 'Preferowana opieka nad :',
      value: 'preferredTasks',
      helper: true,
      helperText:
        'Dostepne opcje praca z psami,praca z kotami, promocja schroniska',
    },
  ],
  initialState: {
    firstName: 'firstName',
    lastName: 'lastName',
    birthDate: 'birthDate',
    occupation: 'occupation',
    preferredTasks: 'preferredTasks',
    mobile: 'mobile',
  },
};
