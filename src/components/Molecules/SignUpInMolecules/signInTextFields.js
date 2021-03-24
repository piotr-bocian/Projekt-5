import { Grid } from '@material-ui/core';
import SignUpInTxtField from '../../Atoms/SignUpInAtoms/signUpInTxtField'

const SignInTxtFields = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <SignUpInTxtField 
                    name="email"
                    id="email"
                    label="Adres email"
                    type="email"
                    autoFocus={true}
                />
            </Grid>
            <Grid item xs={12}>
                <SignUpInTxtField 
                    name="password"
                    id="password"
                    label="Hasło"
                    type="password"
                />
            </Grid>
        </Grid>
    )
}

export default SignInTxtFields
