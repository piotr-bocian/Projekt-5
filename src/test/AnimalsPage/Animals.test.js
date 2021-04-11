import React from 'react'
import { render, screen } from '@testing-library/react'
import {Animals} from '../../components/Organisms/Animals/Animals'

describe('animals page test', () => {
    it('renders with empty div while waiting for API data',()=>{
      
    render(      
        <Animals />
    )

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  })
})