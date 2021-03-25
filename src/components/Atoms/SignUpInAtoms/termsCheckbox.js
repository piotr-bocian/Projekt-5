import { withStyles } from '@material-ui/core/styles';
import { Checkbox, Grid, FormControlLabel, Link } from '@material-ui/core';

const BlueCheckbox = withStyles({
    root: {
      color: '#0292C9',
      '&$checked': {
        color: '#0292C9',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const TermsCheckbox = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControlLabel
          control={<BlueCheckbox value="acceptTerms" color="primary" required />}
          label={
            <div>
                <span>Zapoznałem się i akceptuję </span>
                <Link href="#">regulamin </Link>
                <span>Schroniska.</span>
            </div>
            }
        />
      </Grid>
    </Grid>
  )
}

export { TermsCheckbox, BlueCheckbox }

  