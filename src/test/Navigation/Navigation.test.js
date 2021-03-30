import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import NavigationView from '../../components/templates/NavigationTemplate/NavigationTemplate'

describe('navigation test', () => {
  it('checks that new text is displayed when user left-click the navigation button, this test also check correct render of navigation component',()=>{
    const history = createMemoryHistory()
  render(
    <Router history={history}>
      <NavigationView/>
    </Router>
  )
  expect(screen.getByText(/Aktualności/i)).toBeInTheDocument()

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/Jak pomóc/i), leftClick)

  expect(screen.getByText(/Kwota Przelewu/i)).toBeInTheDocument()
  })
})
