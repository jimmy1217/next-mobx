import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html * {
  width:100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body, #__next {
  height:100%;
}
`;

export {
  GlobalStyle
}