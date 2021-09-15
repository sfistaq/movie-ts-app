import styled from "styled-components";

export const StatusMessage = styled.p<{ error?: boolean }>`
  padding: 20px 0;
  font-size: 18px;
  color: ${({ error }) => (error ? "red" : "var(--color-gray-dark)")};
  font-weight: ${({ error }) => (error ? 500 : 400)};
`;
