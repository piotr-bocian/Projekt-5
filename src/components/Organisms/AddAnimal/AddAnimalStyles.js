import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiContainer-maxWidthXs': {
            maxWidth: '50vw !important',
        },
    },

    container: {
        padding: theme.spacing(2, 0),
        minHeight: '50%',
        width: '40%',
        backgroundColor: '#FFFFFF',
        border: '1px solid #0292C9',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px #0292C9',
    },

    formContainer: {
        margin: theme.spacing(2, 3, 1, 3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '800px'
    },

    accountForm: {
        marginTop: theme.spacing(3),
        width: '95%',
    },

    alignRight: {
        alignSelf: "flex-end",
    },
    formControl: {
        width: "100%"
    }
}));

export default useStyles;