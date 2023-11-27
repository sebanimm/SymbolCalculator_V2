import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
}

img {
  width: 40px;
  height: 40px;
}

input[type="radio"] {
  pointer-events: none;
}
`;

export default GlobalStyle;
