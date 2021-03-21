import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { StyledButton } from './StyledButton.js';

export const WaitingFiltersAge = () => {
    return (
      <div>
        <ButtonGroup variant="text">
          <StyledButton>Starszy</StyledButton>
          <StyledButton>Młodszy</StyledButton>
        </ButtonGroup>
      </div>
    );
  }