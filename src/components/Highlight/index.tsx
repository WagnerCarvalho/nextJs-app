import * as S from './styles'
import Button from 'components/Button'

export type HighLightProps = {
  title: string
  subTitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
}

const Highlight = ({
  title,
  subTitle,
  buttonLabel,
  buttonLink,
  backgroundImage
}: HighLightProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
