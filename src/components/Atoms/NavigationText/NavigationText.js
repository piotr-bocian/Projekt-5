import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles(() => ({
  root: {
    margin: '0 auto',
    fontWeight: 400,
    fontSize: 18,
    '&:hover': {
      transition: '.3s ease-in',
      backgroundColor: 'transparent',
      color: 'rgba(2, 146, 201, 0.69)',
    },
  },
}))(Button);

const NavigationText = ({
  margin = '30px',
  mainText,
  variant = 'text',
  handleClick = null,
}) => {
  return (
    <div>
      <StyledButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant={variant}
        onClick={handleClick}
        style={{ marginRight: margin }}
      >
        {mainText}
      </StyledButton>
    </div>
  );
};

export default NavigationText;
