import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
    font-family: sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme?.colors?.background};
  }
`
