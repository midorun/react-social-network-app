import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    --color-white: #ffffff;
    --color-white-light: #F5F6F8;
    --color-white-medium: #EDEEF0;
    --color-white-dark: #E5E7EB;

    --color-gray-light: #A7AFB8;
    --color-gray-medium: #818C99;
    --color-gray-dark: #6F7985;

    --color-blue: #5181b8;

    --messenger-content-width: 550px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    list-style-type: none;
  }

  a, a:hover, a:visited {
    text-decoration: none;
    outline: none;
    border: none;
    color: inherit;
  }

  input, input:focus, input:active{
    border: none;
    outline: none;
  }

  button{
    outline: none;
  }
`

export default GlobalStyle