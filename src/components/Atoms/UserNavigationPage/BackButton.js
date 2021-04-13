import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { StyledNavLink } from '../../Organisms/Navigation/Navigation.style';


const BackButton = ({ link }) => {
    return (
    <StyledNavLink to={link.link}>
        <Button
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackIcon />}
        >
        POWRÓT {link.text}
      </Button>
    </StyledNavLink>
    );
};

export default BackButton;