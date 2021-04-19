import { screen } from '@testing-library/react'

import Highlight from '.'
import { renderWithTheme } from 'utils/test/helpers'

const props = {
  title: 'Heading 1',
  subTitle: 'Heading 2',
  buttonLabel: 'buy now',
  buttonLink: '/buy-now-a',
  backgroundImage: '/img/icon-512.png'
}

describe('<Highlight />', () => {
  it('should render the Heading and Button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background color', () => {
    const { debug, container } = renderWithTheme(<Highlight {...props} />)
    debug(container)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })
})
