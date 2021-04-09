import { URL } from '../helpers/URL/url';

export const administratorUsersConfig = {
  url: `${URL}/users`,
  dataKey: ['results', 'users', 'results'],
  validate: null,
  select: [
    {
      label: 'Wyszukaj wszystkich pracowników',
      id: 'isAdmin',
      filterOptions: ['', 'Tak', 'Nie'],
    },
    {
      label: 'Wyszukaj wszystkich wolontariuszy',
      id: 'isVolunteer',
      filterOptions: ['', 'Tak', 'Nie'],
    },
  ],
  buttonText: 'Wyświetl wszystkich użytkowników',
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
