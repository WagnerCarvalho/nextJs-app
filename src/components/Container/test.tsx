import { Container } from '.'
import { renderWithTheme } from 'utils/test/helpers'
import theme from 'styles/theme'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { debug, container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )
    debug(container)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `)
  })
})
