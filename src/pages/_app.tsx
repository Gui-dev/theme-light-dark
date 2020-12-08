import { useCallback } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { GlobalStyle } from './../styles/GlobalStyle'
import { usePersistedState } from './../hooks/usePersistedState'
import { light } from './../styles/themes/light'
import { dark } from './../styles/themes/dark'
import { Header } from './../components/Header'

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme, setTheme])

  return (
    
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Header toggleTheme={ toggleTheme }/>
      <Component {...pageProps} />
    </ThemeProvider>
    
  )
}

export default MyApp
