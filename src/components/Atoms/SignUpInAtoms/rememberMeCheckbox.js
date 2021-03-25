import { Grid, FormControlLabel } from '@material-ui/core';
import { BlueCheckbox } from './termsCheckbox';

const RememberMeCheckbox = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FormControlLabel
                control={<BlueCheckbox value="rememberMe" color="primary" required />}
                label='Zapamiętaj mnie'
                />
            </Grid>
        </Grid>
    )
}

export default RememberMeCheckbox;

