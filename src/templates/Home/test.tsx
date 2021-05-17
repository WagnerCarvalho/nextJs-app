import { screen } from '@testing-library/react'

import Home from '.'
import { renderWithTheme } from 'utils/test/helpers'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
  })

  it('should render sections', () => {
    renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
  })
})
