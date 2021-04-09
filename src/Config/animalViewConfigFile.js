import { URL } from '../helpers/URL/url';
const type = ['', 'pies', 'kot', 'inne'];
const gender = ['', 'męska', 'żeńska'];
const size = [' ', 'mały', 'mały/średni', 'średni', 'średni/duży', 'duży'];
export const administratorAnimalsConfig = {
  url: `${URL}/animals`,
  dataKey: ['animal', 'animals', 'results'],
  validate: null,
  select: [
    {
      label: 'Filtr gatunek',
      id: 'animalType',
      filterOptions: type,
    },
    {
      label: 'Filtr płeć',
      id: 'gender',
      filterOptions: gender,
    },
    {
      label: 'Filtr wielkość',
      id: 'size',
      filterOptions: size,
    },
    {
      label: 'Status Adopcji',
      id: 'isAdopted',
      filterOptions: ['', 'Adoptowany', 'Nie adoptowany'],
    },
  ],
  buttonText: 'Wyświetl wszystkie zwierzęta',
  configChildComponent: [
    {
      title: 'Data rejestracji: ',
      value: 'registrationDate',
      helper: false,
    },
    {
      title: 'Gatunek: ',
      value: 'animalType',
      helper: true,
      helperText: `Dostępne opcje: 'pies', 'kot', 'inne'`,
    },
    {
      title: 'Imię: ',
      value: 'name',
      helper: false,
    },
    {
      title: 'Płeć: ',
      value: 'gender',
      helper: true,
      helperText: `Dostępne opcje: 'męska', 'żeńska'`,
    },
    {
      title: 'Wielkość: ',
      value: 'size',
      helper: true,
      helperText: `Dostępne opcje: 'mały', 'mały/średni', 'średni', 'średni/duży', 'duży'`,
    },
    {
      title: 'Opis: ',
      value: 'description',
      helper: false,
    },
    {
      title: 'Wiek: ',
      value: 'age',
      helper: false,
    },
    {
      title: 'Adoptowany: ',
      value: 'isAdopted',
      helper: false,
    },
  ],
  initialState: {
    animalType: 'animalType',
    name: 'name',
    registrationDate: 'registrationDate',
    gender: 'gender',
    size: 'size',
    description: 'description',
    age: 'age',
    isAdopted: 'isAdopted',
    paymentDate: 'paymentDate',
  },
};
