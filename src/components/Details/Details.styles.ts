import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 70px);
  width: 100%;
  background: var(--color-light-blue);
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Left = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Image = styled.img`
  margin: 20px;
  border-radius: 5px;
  border: 3px solid white;
  object-fit: fill;
  height: 380px;
  width: 290px;

  @media screen and (max-width: 1200px) {
    height: 350px;
    width: 250px;
  }
  @media screen and (max-width: 768px) {
    height: 300px;
    width: 200px;
  } ;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-left: 5px;
  background-color: var(--color-dark-blue);
  color: var(--color-gold);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  &:active {
    transform: translateY(1px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;

export const Right = styled.div`
  height: 80%;
  flex: 0.7;
  color: var(--color-dark-blue);
  padding: 60px 20px;

  @media screen and (max-width: 768px) {
    padding: 80px 20px;
  }

  h2 {
    font-size: 40px;
    @media screen and (max-width: 1200px) {
      font-size: 30px;
    }
    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }

  p {
    font-size: 18px;
    margin: 8px 0;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
