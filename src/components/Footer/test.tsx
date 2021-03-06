import { screen } from '@testing-library/react'

import Footer from '.'
import { renderWithTheme } from 'utils/test/helpers'

describe('<Footer />', () => {
  it('should render 4 column topics', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /follow/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /link/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
