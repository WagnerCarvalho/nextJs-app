import { screen } from '@testing-library/react'

import GameCard from '.'
import { renderWithTheme } from 'utils/test/helpers'

const props = {
  title: 'Bom Dia',
  developer: 'Wagner Carvalho',
  img: '/img/test.png',
  price: 'R$ 1,99'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { debug, container } = renderWithTheme(<GameCard {...props} />)
    debug(container)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })
})
