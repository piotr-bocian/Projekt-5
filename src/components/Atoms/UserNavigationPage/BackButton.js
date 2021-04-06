import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { StyledNavLink } from '../../Organisms/Navigation/Navigation.style';
import { ButtonStyle } from './BackButton.style';


const BackButton = ({ link }) => {
    return (
    <StyledNavLink to={link}>
        <ButtonStyle>
        <Button
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackIcon />}
        >
        POWRÓT
      </Button>
      </ButtonStyle>
    </StyledNavLink>
    );
};

export default BackButton;