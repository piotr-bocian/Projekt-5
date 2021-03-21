import React from 'react';
import { Typography, CssBaseline, Container, Grid, FormControlLabel, Button, Link } from '@material-ui/core';
import useStyles from '../SignUpInForms/signUpInStyles';
import BlueTextField from '../../Atoms/blueTextField';
import Avatar from '../../Atoms/avatar';
import BlueCheckbox from '../../Atoms/blueCheckbox';




const SignInForm = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container} component='main' maxWidth="xs">
            <CssBaseline />
            <div className={classes.formContainer}>
                <Avatar/>
                <Typography component='h1' variant='h5'>
                    Logowanie
                </Typography>
                <form className={classes.accountForm} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <BlueTextField
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Adres email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <BlueTextField
                                name="password"
                                variant="outlined"
                                required
                                fullWidth
                                type="password"
                                id="password"
                                label="Hasło"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                            control={<BlueCheckbox value="rememberMe" color="primary" />}
                            label='Zapamiętaj mnie'
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.confirmButton}
                        >
                            Zaloguj się
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Nie masz konta? Zarejestruj się
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
)}

export default SignInForm