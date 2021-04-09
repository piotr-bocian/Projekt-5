import { URL } from '../helpers/URL/url';

export const administratorPostConfig = {
  url: `${URL}/posts/`,
  dataKey: ['results', 'post', 'results'],
  validate: null,
  select: [
  ],
  buttonText: 'Wyświetl wszystkie posty',
  configChildComponent: [
    { title: 'Data postu :', value: 'postDate', helper: false },
    { title: 'Zawartość :', value: 'content', helper: false },
    { title: 'Zdjęcie:', value: 'photo', helper: false },
  ],
  initialState: {
    postDate: 'postDate',
    content: 'content',
    photo: 'photo',
  },
};
