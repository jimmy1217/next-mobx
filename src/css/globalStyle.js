import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}
html, body {
  height: 100%;
}
html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: rgb(43, 40, 50);
}
input {
  border:0;
  padding:0;
}
input:focus {
  outline: none;
  outline-offset:0;
}
body > div {
  height:100%;
}

.hidden {
    display:none;
}
`;

const MainContainer = styled.div`
height:100%;
`

export {
    GlobalStyle, MainContainer
}