import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Home from '.'

import bannerMock from 'components/BannerSlider/mocks'
import gamesMock from 'components/GameCardSlider/mocks'
import highlightMock from 'components/Highlight/mocks'

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
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

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game ( 5 sections com 1 cards cada = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
  })
})
