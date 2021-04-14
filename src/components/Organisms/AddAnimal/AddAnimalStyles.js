import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #0292C9',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px #0292C9',
        display: 'flex',
        justifyContent: 'center',
        margin: '15vh auto auto auto',
    },
    formContainer: {
        margin: theme.spacing(2, 3, 1, 3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    accountForm: {
        marginTop: theme.spacing(3),
        width: '95%',
        justifyContent: 'center',
    },

    alignRight: {
        alignSelf: "flex-end",
    },
    formControl: {
        width: "100%",
    },
    profilePic: {
        fontFamily: "Roboto, sans-serif",
    },
    previewProfilePic: {
        display: 'none'
    }
}));

export default useStyles;