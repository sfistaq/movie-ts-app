import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans', sans-serif;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  background: var(--color-light-blue);
}
//!globalne zmienne z kolorami
:root {
  --color-blue: #47597E;
  --color-light-blue: #DBE6FD;
  --color-dark-blue: #293B5F;
  --color-gold: #B2AB8C;
//https://colorhunt.co/palette/293b5f47597edbe6fdb2ab8c
}
`;

export default GlobalStyle;
