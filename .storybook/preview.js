import { RouterContext } from 'next/dist/shared/lib/router-context' // next 12
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { darkTheme, lightTheme } from '../src/utils/myTheme'

export const globalTypes = {
  theme: {
    name: 'theme',
    description: 'global theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'lightning',
      items: ['light', 'dark'],
      showName: true,
    },
  },
}

export const decorators = [
  (Story, context) => (
    <NextThemesProvider
      forcedTheme={context.globals.theme}
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Story />
      </NextUIProvider>
    </NextThemesProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
