import pawInHeart from '../../assets/pawInHeart.png';
import { makeStyles } from '@material-ui/core/styles';

const Avatar = () => {
    const useStyles = makeStyles((theme) => ({
        avatar: {
            margin: theme.spacing(1),
        }
    }));
    const classes = useStyles();

    return (
        <img className={classes.avatar} src={pawInHeart} alt='avatar'></img>
    )
}

export default Avatar;