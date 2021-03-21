import { Button } from '@material-ui/core';

const FormButton = ({ onClick, text }) => {
    return (
        <Button 
            style={{
                backgroundColor: '#0292C9',
                color:'#fff'
            }}
            variant='contained' 
            type='submit' 
            onClick={onClick}
        >
        {text}
        </Button>
    );
};

export default FormButton;