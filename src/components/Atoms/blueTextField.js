import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const BlueTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#0292C9',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#0292C9',
      },
      '& .MuiOutlinedInput-root': {
        // '& fieldset': {
        //   borderColor: 'red',
        // },
        '&:hover fieldset': {
          borderColor: '#0292C9',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#0292C9',
        },
      },
    },
  })(TextField);

  export default BlueTextField;