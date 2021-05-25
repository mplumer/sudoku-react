import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
    html {
        height: 100%auto;
        
        body {
            display: flex;
            flex-direction: column;
            height: 100%auto;
            margin: 0;

         } #root {
            background: ${theme.colors.background};
            color: ${theme.colors.black};
            display: flex;
            font-family: sans-serif;
            height: 100vh;
            justify-content: center;
            padding: 15px;
        }
    }
`
}   
`

export default GlobalStyle;
