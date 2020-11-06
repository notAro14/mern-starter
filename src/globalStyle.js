import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    body {
      background-color: #eee;
      padding: 2rem;
      ul {
        list-style-type: none;
      }
    }
  }
`
