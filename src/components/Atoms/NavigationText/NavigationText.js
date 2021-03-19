import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const StyledButton = withStyles(() => ({
  root: {
    '&:hover': {
      transition: '.3s ease-in',
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
        onClick={handleClick}
      >
        {mainText}
      </StyledButton>
    </>
  );
};

export default NavigationText;
