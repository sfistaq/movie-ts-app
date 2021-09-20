import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import background from "../assets/images/app_bg.jpg";

export const GlobalStyle = createGlobalStyle`

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
}

:root {
  --color-blue: #267FD9;
  --color-white: #FFFFFF;
  --color-gray-dark: #333333;
  --color-gray: #777777;
  --color-gray-light: #DDDDDD;
  --color-red: #DB5757;
  --background-nav: rgba(0, 0, 0, 0.3);
  --background-blur: blur(10px);
  --border-radius: 3px;
  --transition: all 0.3s ease;
  --transition-slow: all 0.6s ease;
  --shadow-1: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  --shadow-2: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
  --shadow-3: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  --shadow-4: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  --shadow-5: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 65px;
  height: 100vh;
  width: 100vw;
`;
