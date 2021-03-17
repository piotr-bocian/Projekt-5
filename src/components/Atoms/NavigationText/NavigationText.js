import React from 'react';
import Button from '@material-ui/core/Button';

const NavigationText=({mainText, variant = "text", handleClick = null})=>{
   return(
      <>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        size="large"
        variant={variant}
        styles={{color:"#1b1b1b"}}
        onClick={handleClick}
      >
        {mainText}
      </Button>
      </>
   )
}

export default NavigationText
