import { Grid } from '@material-ui/core';
import SignUpInTxtField from '../../Atoms/SignUpInAtoms/signUpInTxtField'

const SignUpTxtFields = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <SignUpInTxtField
                    name="firstName"
                    id="firstName"
                    label="Imię"
                    autoFocus={true}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <SignUpInTxtField
                    name="lastName"
                    id="lastName"
                    label="Nazwisko"
                />
            </Grid>
            <Grid item xs={12}>
                <SignUpInTxtField 
                    name="mobile"
                    id="mobile"
                    label="Telefon"
                />
            </Grid>
            <Grid item xs={12}>
                <SignUpInTxtField 
                    name="email"
                    id="email"
                    label="Adres email"
                    type="email"
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
            <Grid item xs={12}>
                <SignUpInTxtField 
                    name="repPassword"
                    id="repPassword"
                    label="Powtórz hasło"
                    type="password"
                />
            </Grid>
        </Grid>
    )
}

export default SignUpTxtFields