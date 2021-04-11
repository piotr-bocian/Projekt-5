import React from 'react'
import { render, screen } from '@testing-library/react'
import {AnimalName} from '../../components/Atoms/AnimalPage/AnimalPageAnimalName/AnimalPageAnimalName'

describe('animals page test', () => {
    it('renders with given data (animal.name)',()=>{
      
    const animal = {
        name: 'testName'
    }

    render(      
        <AnimalName animal={animal}/>
    )

    expect(screen.getByText('testName')).toBeInTheDocument();
  })
})