import { createGlobalStyle } from "styled-components";
import background from "../assets/images/bg.jpg";
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Urbanist', sans-serif;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
 background-size: cover ;
 background-attachment: fixed;
  box-sizing: border-box;
  background-image: url(${background});
  width: 100vw;
  height: 100vh;

}
//!globalne zmienne z kolorami
:root {
  --color-blue: #267FD9;
  --color-light-blue: #DBE6FD;
  --color-dark-blue: #293B5F;
  --color-gold: #B2AB8C;
  --color-white: #FFFFFF;
  --color-gray-dark: #333333;
  --color-gray: #777777;
  --color-gray-light: #DDDDDD;
  --color-red: #DB5757;
  --background-nav: rgba(0, 0, 0, 0.3);
  --background-blur: blur(10px);

}
`;

export default GlobalStyle;
