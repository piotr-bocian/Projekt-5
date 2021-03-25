import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const AnimalPageBackBtn = withStyles(() => ({
    root: {
      'font-family': 'Amatic SC, sans-sarif',
      'letter-spacing': '0.1em',
      'font-size': '1.5em',
      'font-weight': 'bold',
      'padding': '0 0.5em',
        '&:hover': {
            transition: '.2s ease-in'
      },
    },
  }))(Button);