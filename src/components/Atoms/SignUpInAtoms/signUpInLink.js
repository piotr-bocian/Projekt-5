import { Grid, Link } from '@material-ui/core';

const SignUpInLink = ({linkText}) => {
    return (
        <Grid container justify="flex-end">
            <Grid item>
                <Link href="#" variant="body2">
                    {linkText}
                </Link>
            </Grid>
        </Grid>
    )
}

export default SignUpInLink
