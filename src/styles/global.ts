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

}
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 65px;
  height: calc(100vh);
  width: 100vw;
`;
