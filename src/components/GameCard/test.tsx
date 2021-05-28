import { screen, fireEvent } from '@testing-library/react'

import GameCard from '.'
import { renderWithTheme } from 'utils/test/helpers'
import theme from 'styles/theme'

const props = {
  title: 'Bom Dia',
  developer: 'Wagner Carvalho',
  img: '/img/test.png',
  price: 'R$ 1,99'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

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

  it('Should render price in Label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 1,99')
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-throught in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 1,00" />)

    expect(screen.getByText('R$ 1,99')).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('R$ 1,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('Should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('Should call onFav method when favorite is cliked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('Should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)
    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
