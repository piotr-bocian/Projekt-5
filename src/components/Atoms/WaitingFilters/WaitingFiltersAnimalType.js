import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { StyledButton } from './StyledButton.js';

export const WaitingFiltersAnimalType = (props) => {

    function setType(e) {
      props.filterFunction(e.target.innerHTML);
    }

    return (
      <div>
        <ButtonGroup variant="text">
          <StyledButton onClick ={setType}>Kot</StyledButton>
          <StyledButton onClick ={setType}>Pies</StyledButton>
          <StyledButton onClick ={setType}>Inne</StyledButton>
        </ButtonGroup>
      </div>
    );
  }