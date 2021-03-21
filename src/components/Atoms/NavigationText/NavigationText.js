import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles(() => ({
  root: {
    fontSize: 16,
    marginRight: 10,
    '&:hover': {
      transition: '.3s ease-in',
      backgroundColor: 'rgba(2, 146, 201, 0.69)',
    },
  },
}))(Button);

const NavigationText = ({ mainText, variant = 'text', handleClick = null }) => {
  return (
    <div>
      <StyledButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant={variant}
        onClick={handleClick}
      >
        {mainText}
      </StyledButton>
    </div>
  );
};

export default NavigationText;
