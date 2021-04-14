import React from 'react'
import { render, screen } from '@testing-library/react'
import {AnimalData} from '../../components/Atoms/AnimalPage/AnimalPageAnimalData/AnimalPageAnimalData'

describe('animals page test', () => {
    it('renders with given data',()=>{
      
    const animal = {
        animalType: 'pies',
        age: 3,
        size: 'mały',
        breed: '---',
        description: 'test description for an animal'
    }

    render(      
        <AnimalData animal={animal}/>
    )

    expect(screen.getByText('pies', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('mały', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('test description for an animal', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('---', { exact: false })).toBeInTheDocument();
    expect(screen.getByText(3, { exact: false })).toBeInTheDocument();
  })
})