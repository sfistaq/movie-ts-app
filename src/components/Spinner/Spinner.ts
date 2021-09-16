import styled, { Keyframes, keyframes } from "styled-components";

const spin: Keyframes = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 48%;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid var(--color-white);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;
