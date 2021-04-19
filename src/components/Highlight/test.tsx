import { screen } from '@testing-library/react'

import Highlight from '.'
import { renderWithTheme } from 'utils/test/helpers'

const props = {
  title: 'Heading 1',
  subTitle: 'Heading 2',
  buttonLabel: 'buy now',
  buttonLink: '/buy-now-a'
}

describe('<Highlight />', () => {
  it('should render the Heading and Button', () => {
    const { debug, container } = renderWithTheme(<Highlight {...props} />)
    debug(container)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })
})
