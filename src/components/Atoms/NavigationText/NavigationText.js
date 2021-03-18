import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const StyledButton = withStyles((theme) => ({
  root: {
    '&:hover': {
      transition: '.6s ease-in',
      backgroundColor: '#d1c4e9',
    },
  },
}))(Button);

const NavigationText = ({ mainText, variant = 'text', handleClick = null }) => {
  return (
    <>
      <StyledButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        size="large"
        variant={variant}
        onMouseOver={handleClick}
      >
        {mainText}
      </StyledButton>
    </>
  );
};

export default NavigationText;
