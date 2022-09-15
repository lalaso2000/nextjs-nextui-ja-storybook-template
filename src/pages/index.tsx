import { Button, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import { Logo } from '@/components/shared/logo'

const Home: NextPage = () => {
  return (
    <div>
      <Text h1>テストページ！</Text>
      <Button>Click me!</Button>
      <Logo />
    </div>
  )
}

export default Home
