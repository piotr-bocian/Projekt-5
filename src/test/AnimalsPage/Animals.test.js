import React from 'react'
import { render, screen } from '@testing-library/react'
import {Animals} from '../../components/Organisms/Animals.js/Animals'

describe('animals page test', () => {
    it('renders without errors',()=>{
      
    render(      
        <Animals/>
    )

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  })
})