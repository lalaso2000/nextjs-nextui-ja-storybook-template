import { useTheme } from '@nextui-org/react'
import Image from 'next/image'
import { FC } from 'react'

export const Logo: FC = () => {
  // ダークモードなら色反転
  const { isDark } = useTheme()
  const filter = isDark ? 'invert()' : ''
  return (
    <Image
      src={'/vercel.svg'}
      width={400}
      height={100}
      alt='logo'
      style={{
        filter: filter,
      }}
    />
  )
}
