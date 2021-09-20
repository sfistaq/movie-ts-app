import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  padding: 10px 10px 20px 10px;

  @media ${breakpoints.l} {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  @media ${breakpoints.s} {
    padding: 0px;
    padding-bottom: 20px;
  }
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
  margin-top: 15px;

  @media ${breakpoints.l} {
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

  @media ${breakpoints.l} {
    height: 100%;
    align-items: start;
    justify-content: space-evenly;
    padding: 0 30px;
    margin: 0;
  }

  @media ${breakpoints.s} {
    margin: 10px 0;
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
  box-shadow: var(--shadow-1);

  &:hover {
    opacity: 1;
  }

  @media ${breakpoints.l} {
    max-height: 350px;
    max-width: 280px;
  }

  @media ${breakpoints.s} {
    max-height: 300px;
    max-width: 240px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 80%;
  padding: 40px;

  @media ${breakpoints.l} {
    flex: 0.5;
    justify-content: center;
    padding: 20px 40px 10px 40px;
  }

  & h2 {
    margin-bottom: 20px;
    font-size: 36px;
    color: var(--color-gray-dark);

    @media ${breakpoints.l} {
      font-size: 28px;
      margin-bottom: 10px;
    }

    @media ${breakpoints.s} {
      font-size: 20px;
    }
  }
  & p {
    margin: 5px 0;
    line-height: 2;
    font-weight: 300;

    @media ${breakpoints.l} {
      line-height: 1.6;
    }

    @media ${breakpoints.s} {
      font-size: 14px;
    }
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 25px;
`;
