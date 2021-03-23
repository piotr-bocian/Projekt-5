import { Button } from '@material-ui/core';

const FormButton = ({ onClick, text }) => {
    return (
        <Button 
            color='primary'
            variant='contained' 
            type='submit' 
            onClick={onClick}
        >
        {text}
        </Button>
    );
};

export default FormButton;