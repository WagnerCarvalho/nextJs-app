import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'
import { renderWithTheme } from 'utils/test/helpers'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size by default', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size by default', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>
    )

    expect(screen.getByText(/Buy Now/i)).toBeInTheDocument
    expect(screen.getByTestId('icon')).toBeInTheDocument
  })

  it('should render a minal version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy Now
      </Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })

    expect(
      screen.getByRole('button', { name: /buy now/i })
    ).toHaveStyleRule('background', 'none', { modifier: ':hover' })
  })

  it('Should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy Now
      </Button>
    )

    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
