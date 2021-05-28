import Home, { HomeTemplateProps } from 'templates/Home'
import bannerMocks from 'components/BannerSlider/mocks'
import gamesMocks from 'components/GameCardSlider/mocks'
import highlightMocks from 'components/Highlight/mocks'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannerMocks,
      newGames: gamesMocks,
      mostPopularHighlight: highlightMocks,
      mostPopularGames: gamesMocks,
      upcomingGames: gamesMocks,
      upcomingHighlight: highlightMocks,
      upcomingMoreGames: gamesMocks,
      freeGames: gamesMocks,
      freeHighlight: highlightMocks
    }
  }
}
