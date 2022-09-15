import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from './logo'

export default {
  title: 'logo',
  component: Logo,
} as ComponentMeta<typeof Logo>

export const Primary: ComponentStory<typeof Logo> = () => <Logo />
