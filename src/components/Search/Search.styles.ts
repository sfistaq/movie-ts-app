import styled from "styled-components";

export const Container = styled.section`
  //width & height ogarnięte w App.styles.ts
  background: var(--color-light-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
`;

export const Status = styled.p`
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
  color: var(--color-dark-blue);
`;

export const Form = styled.form`
  width: 100%;
  height: 50px;
  display: flex;
  flex-basis: 0;
  justify-content: center;
`;

export const Input = styled.input<{ inputWidth: number }>`
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  width: ${(props) => `${props.inputWidth}px`};
  margin: 0 5px;
  color: var(--color-blue);
  transition: all 0.3s ease;

  &:focus {
    width: ${(props) => `${props.inputWidth + 20}px`};
  }
  &::placeholder {
    color: var(--color-blue);
  }
`;

export const Select = styled.select<{ inputWidth: number }>`
  padding: 9px;
  border-radius: 10px;
  outline: none;
  border: none;
  margin: 0 5px;
  width: ${(props) => `${props.inputWidth}px`};

  &::after {
  }
`;
export const Option = styled.option``;

export const Button = styled.button`
  width: 80px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-left: 5px;
  background-color: var(--color-dark-blue);
  color: var(--color-gold);
`;

export const ResultsContainer = styled.div`
  width: 100%;
  height: 80%;
`;
