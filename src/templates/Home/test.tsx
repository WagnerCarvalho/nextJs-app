import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Home from '.'

import bannerMock from 'components/BannerSlider/mocks'
import gamesMock from 'components/GameCardSlider/mocks'
import highlightMock from 'components/Highlight/mocks'

const props = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
  })

  it('should render sections', () => {
    renderWithTheme(<Home {...props} />)
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })

  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
  })

  it('should render section elements', () => {
    const { debug, container } = renderWithTheme(<Home {...props} />)
    debug(container)
    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game ( 5 sections com 4 cards cada = 5x4 = 20)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(20)
  })
})
