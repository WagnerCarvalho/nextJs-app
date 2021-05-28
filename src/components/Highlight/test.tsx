import { screen } from '@testing-library/react'

import Highlight from '.'
import { renderWithTheme } from 'utils/test/helpers'

import * as S from './styles'

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
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render Float Image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render align Right by default', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/float-image.png" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align Left', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/float-image.png" alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )
  })
})
