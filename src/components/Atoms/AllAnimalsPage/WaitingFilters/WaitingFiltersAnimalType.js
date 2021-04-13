import React, { useState, useEffect } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { StyledButton } from './StyledButton.js';

export const WaitingFiltersAnimalType = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`https://best-animal-shelter.herokuapp.com/api/animals${searchTerm}`)
      .then(res => res.json())
      .then(result => {
        props.setAnimals(result.animals.results);
      });
  }, [searchTerm]);

    return (
      <div>
        <ButtonGroup variant="text">
          <StyledButton onClick={e => setSearchTerm('?search=Kot')}>Kot</StyledButton>
          <StyledButton onClick={e => setSearchTerm('?search=Pies')}>Pies</StyledButton>
          <StyledButton onClick={e => setSearchTerm('?search=Inne')}>Inne</StyledButton>
          <StyledButton onClick={e => setSearchTerm('')}>Wszystkie</StyledButton>
        </ButtonGroup>
      </div>
    );
  }