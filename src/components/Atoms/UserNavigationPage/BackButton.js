import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { StyledNavLink } from '../../Organisms/Navigation/Navigation.style';
import { ButtonStyle } from './BackButton.style';


const BackButton = ({ link }) => {
    return (
    <StyledNavLink to={link.link}>
        <Button
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackIcon />}
            style={{marginLeft: '1rem'}}
        >
        POWRÓT {link.text}
      </Button>
    </StyledNavLink>
    );
};

export default BackButton;