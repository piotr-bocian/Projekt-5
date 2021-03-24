import { withStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel, Link } from '@material-ui/core';

const BlueCheckbox = withStyles({
    root: {
      color: '#0292C9',
      '&$checked': {
        color: '#0292C9',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const TermsCheckBox = () => {
  return (
    <FormControlLabel
      control={<BlueCheckbox value="acceptTerms" color="primary" />}
      label={
        <div>
            <span>Zapoznałem się i akceptuję </span>
            <Link href="#">regulamin </Link>
            <span>Schroniska.</span>
        </div>
        }
    />
  )
}

export { TermsCheckBox, BlueCheckbox }

  