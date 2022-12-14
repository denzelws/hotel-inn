import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 @font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v20-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v20-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v20-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}

 * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-size: ${theme.font.sizes.medium};
      font-family: ${theme.font.family};
    }
  `}

`

export default GlobalStyles
