import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
}

  body {
    font-family: Inter, sans-serif;
    margin: 0;
    padding: 0;
    padding-left: calc(100vw - 100%);
}

  p, 
  h3 {
    margin: 0;
    padding: 0;
  }

  img {
    display:block;
  }

  a {
    text-decoration: none;
  }
`
export default GlobalStyles;