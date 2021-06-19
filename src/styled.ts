import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    --color-main: #edeef0;
    --color-light-gray: #a7afb8;
    --background-dialog-item-hover: #f5f6f8;;
    --background--nav-link-hover: #aeb7c21f;
    --dialog-list-width: 550px;
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

  a,
  a:hover,
  a:visited {
    text-decoration: none;
    outline: none;
    border: none;
    color: inherit;
  }
`

export default GlobalStyle