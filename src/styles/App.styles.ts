import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;
export const Sections = styled.div`
  width: 100%; //szerokość 100%
  height: calc(100vh - 70px); // wysokość sekcji - navbar
  position: relative;
  background: var(--color-light-blue);
  top: 70px; // przesuń - 70 w dół ponizej navbara
  scroll-behavior: smooth; //! płynne przewijanie
  scroll-snap-type: y mandatory; //! wyrównanie scrolla
  scrollbar-width: none; // for firefox
  // nie wyświetlaj scrollbar
  &::-webkit-scrollbar {
    display: none;
  }

  // kazdy komponent wewnątrz div sections
  & > * {
    width: 100vw; //szerokość 100%
    height: calc(100vh - 70px); // wysokość sekcji - navbar
    scroll-snap-align: start; //! wyrównanie scrolla, przewijaj do całej sekcji, pokazuje tylko całą sekcje
  }
`;
