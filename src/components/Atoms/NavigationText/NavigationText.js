import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const StyledButton = withStyles(() => ({
  root: {
    '&:hover': {
      transition: '.3s ease-in',
      backgroundColor: '#d1c4e9',
    },
  },
}))(Button);
const NavigationText = ({ mainText, variant = 'Link', handleClick = null }) => {
  return (
    <div>
      <StyledButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        size="large"
        variant={variant}
        onClick={handleClick}
      >
        {mainText}
        {handleClick && <ArrowDropDownIcon fontSize="small" />}
      </StyledButton>
    </div>
  );
};

export default NavigationText;
