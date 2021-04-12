import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const StyledButton = withStyles(() => ({
    root: {
      'font-family': 'Montserrat, sans-sarif',
      'letter-spacing': '0.1em',
      'font-size': '1.5em',
      'font-weight': 'bold',
      'padding': '0 0.5em',
      'margin': '0',
        '&:hover': {
            transition: '.2s ease-in'
      },
    },
  }))(Button);