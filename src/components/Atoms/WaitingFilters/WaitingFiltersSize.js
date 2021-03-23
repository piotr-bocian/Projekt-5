import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { StyledButton } from './StyledButton.js';

export const WaitingFiltersSize = () => {
    return (
      <div>
        <ButtonGroup variant="text">
          <StyledButton>Mały</StyledButton>
          <StyledButton>Średni</StyledButton>
          <StyledButton>Duży</StyledButton>
        </ButtonGroup>
      </div>
    );
  }