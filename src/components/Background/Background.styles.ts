import styled from "styled-components";

export const Container = styled.div<{ image: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 400px;
  opacity: 0.9;
`;
