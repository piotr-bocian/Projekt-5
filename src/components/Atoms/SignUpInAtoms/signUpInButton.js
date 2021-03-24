import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    confirmButton: {
        margin: theme.spacing(3, 0, 3),
    },
}));

const SignUpInButton = ({btnText}) => {
    const btnClass = useStyles();
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={btnClass.confirmButton}
        >
            {btnText}
        </Button>
    )
}

export default SignUpInButton;
