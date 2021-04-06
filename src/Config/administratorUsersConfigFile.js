import { URL } from '../helpers/URL/url';

export const administratorUsersConfig = {
  url: `${URL}/users`,
  dataKey: ['results', 'users', 'results'],
  validate: null,
  select: [
    {
      label: 'Godzina',
      id: 'Godzina wizyty',
      filterOptions: ['dopisać', 'filtr'],
    },
  ],
  buttonText: 'Wyświetl wszystkich pracowników',
  configChildComponent: [
    { title: 'Imie :', value: 'firstName', helper: false },
    { title: 'Nazwisko :', value: 'lastName', helper: false },
    { title: 'Email :', value: 'email', helper: false },
    { title: 'Telefon :', value: 'mobile', helper: false },
    //  { title: 'Zdjęcie :', value: 'image', helper: false },
    {
      title: 'Super Admin :',
      value: 'isSuperAdmin',
      helper: false,
    },
    {
      title: 'Super Admin :',
      value: 'isSuperAdmin',
      helper: false,
    },
    {
      title: 'Pracownik :',
      value: 'isAdmin',
      helper: false,
    },
    {
      title: 'Wolontariusz :',
      value: 'isVolunteer',
      helper: false,
    },
  ],
  initialState: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    isSuperAdmin: 'isSuperAdmin',
    isAdmin: 'isAdmin',
    isVolunteer: 'isVolunteer',
    mobile: 'mobile',
  },
};
