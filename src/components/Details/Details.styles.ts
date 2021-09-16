import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 65px);
  display: flex;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
`;
export const ButtonsWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 120px;
`;

export const Image = styled.img`
  border: 3px solid var(--color-white);
  border-radius: var(--border-radius);
  object-fit: fill;
  height: 500px;
  width: auto;
  opacity: 0.85;
  transition: var(--transition);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 860px) {
    height: 420px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 78%;
  padding: 40px;

  @media screen and (max-width: 860px) {
    height: 70%;
    padding: 0px 60px 0px 0px;
  }

  & h2 {
    margin-bottom: 20px;
    font-size: 32px;
    color: var(--color-gray-dark);
  }
  & p {
    margin: 5px 0;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 25px;
`;
