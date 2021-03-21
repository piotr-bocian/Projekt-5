import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2, 0),
        minHeight: '50%',
        backgroundColor: '#FFFFFF',
        border: '1px solid #0292C9',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px #0292C9',
    },

    formContainer: {
        margin: theme.spacing(8, 3, 1, 3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    registrationForm: {
        width: '100%',
        marginTop: theme.spacing(3),
    },

    register: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#0292C9',
        color: '#FFF'
    },
}));

export default useStyles;