import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { StyledButton } from './StyledButton.js';

export const WaitingFiltersGender = () => {
    return (
      <div>
        <ButtonGroup variant="text">
          <StyledButton>Ona</StyledButton>
          <StyledButton>On</StyledButton>
        </ButtonGroup>
      </div>
    );
  }