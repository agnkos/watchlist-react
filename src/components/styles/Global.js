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
}
a {
  text-decoration: none;
}
`

export default GlobalStyles;