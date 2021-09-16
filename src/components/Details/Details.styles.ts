import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 860px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
  margin-top: 30px;
  @media screen and (max-width: 860px) {
    flex: 0.5;
    width: 100%;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    padding: 0 40px;
  }
`;
export const ButtonsWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  @media screen and (max-width: 860px) {
    height: 70%;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
  }
`;

export const Image = styled.img`
  border: 3px solid var(--color-white);
  border-radius: var(--border-radius);
  object-fit: fill;
  max-height: 500px;
  max-width: 320px;
  opacity: 0.85;
  transition: var(--transition);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 860px) {
    max-height: 350px;
    max-width: 280px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 80%;
  padding: 40px;
  word-break: break-all;

  @media screen and (max-width: 860px) {
    flex: 0.5;
    justify-content: center;
    padding: 20px 40px 10px 40px;
  }

  & h2 {
    margin-bottom: 20px;
    font-size: 36px;
    color: var(--color-gray-dark);
    @media screen and (max-width: 860px) {
      font-size: 28px;
      margin-bottom: 10px;
    }
  }
  & p {
    margin: 5px 0;
    line-height: 2;
    font-weight: 300;
    @media screen and (max-width: 860px) {
      line-height: 1.6;
      font-weight: 300;
    }
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 25px;
`;
