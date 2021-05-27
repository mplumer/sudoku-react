import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${({ theme }) => css`
    html {
      height: 100%;

      body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;

        #root {
          background: ${theme.background};
          background-size: ${theme.backgroundSize};
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          color: ${theme.colors.black};
          display: flex;
          font-family: sans-serif;
          justify-content: center;
          padding: 15px;
        }
      }
    }
  `}
`
