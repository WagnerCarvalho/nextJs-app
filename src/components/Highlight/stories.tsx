import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighLightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'test in component by title',
    subTitle: 'test in component by subtitle',
    buttonLabel: 'buy Now',
    buttonLink: '/test-link'
  }
} as Meta

export const Default: Story<HighLightProps> = (args) => <Highlight {...args} />
