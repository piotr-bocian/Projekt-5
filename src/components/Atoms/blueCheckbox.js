import { withStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';

const BlueCheckbox = withStyles({
    root: {
      color: '#0292C9',
      '&$checked': {
        color: '#0292C9',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  export default BlueCheckbox;