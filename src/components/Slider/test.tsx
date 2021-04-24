import 'match-media-mock'
import { render, screen } from '@testing-library/react'

import Slider from '.'

describe('<Slider />', () => {
  it('should rebder children as slider item', () => {
    const { debug, container } = render(
      <Slider settings={{ slidesToShow: 2, infinite: false }}>
        <p>item1</p>
        <p>item2</p>
      </Slider>
    )

    debug(container)

    expect(screen.getByText(/item1/i).parentElement?.parentElement).toHaveClass(
      'slick-slide'
    )
    expect(screen.getByText(/item2/i).parentElement?.parentElement).toHaveClass(
      'slick-slide'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
