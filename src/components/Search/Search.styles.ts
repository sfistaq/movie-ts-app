import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  height: 100vh;
`;

export const Status = styled.p<{ error?: boolean }>`
  margin: 75px 0 5px 0;
  font-size: 12px;
  color: ${({ error }) => (error ? "red" : "var(--color-dark-blue)")};
`;

export const Form = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  flex-basis: 0;
  justify-content: center;
`;

export const Input = styled.input<{ inputWidth: number }>`
  padding: 8px;
  border-radius: 5px;
  outline: none;
  border: none;
  width: ${(props) => `${props.inputWidth}px`};
  margin: 0 10px;
  color: var(--color-dark-blue);
  transition: all 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:focus {
    width: ${(props) => `${props.inputWidth + 30}px`};
  }
  &::placeholder {
    color: var(--color-blue);
  }

  // usuń strzałki z input type number
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Select = styled.select<{ inputWidth: number }>`
  padding: 9px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin: 0 5px;
  width: ${(props) => `${props.inputWidth}px`};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
export const Option = styled.option``;

export const Button = styled.button`
  width: 80px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const ResultsContainer = styled.div`
  width: 100%;
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(BiSearchAlt)`
  font-size: 16px;
  margin-left: 2px;
`;
