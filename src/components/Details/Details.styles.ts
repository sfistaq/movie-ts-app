import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  background: var(--color-light-blue);
  color: #000;
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
`;

export const Image = styled.img`
  margin-top: 50px;
  border-radius: 5px;
  border: 3px solid white;
  object-fit: fill;
`;

// wyexportuj do pojedycznego komponentu bo sie powtarza ;)
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
  flex: 0.7;

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 18px;
    margin: 8px 0;
  }
`;
