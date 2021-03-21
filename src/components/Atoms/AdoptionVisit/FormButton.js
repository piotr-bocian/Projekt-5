import { Button } from '@material-ui/core';

const FormButton = ({ onClick, text }) => {
    return (
        <Button 
            variant='contained' 
            type='submit' 
            onClick={onClick}
        >
        {text}
        </Button>
    );
};

export default FormButton;