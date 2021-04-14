import React from 'react';
import { StyledButton } from './StyledButton.js';
import { Link } from "react-router-dom";

export const WaitingFiltersAll = () => {
    return (
      <Link to={`/animals`}>
        <div>
          <StyledButton>Wszyscy czekamy!</StyledButton>
        </div>
      </Link>
    );
  }