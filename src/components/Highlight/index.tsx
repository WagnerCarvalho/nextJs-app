import * as S from './styles'
import Button from 'components/Button'

export type HighLightProps = {
  title: string
  subTitle: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subTitle,
  buttonLabel,
  buttonLink
}: HighLightProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.SubTitle>{subTitle}</S.SubTitle>
    <Button as="a" href={buttonLink}>
      {buttonLabel}
    </Button>
  </S.Wrapper>
)

export default Highlight
