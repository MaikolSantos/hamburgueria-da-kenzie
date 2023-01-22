import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: 1.375rem 0 0.875rem;
  background-color: var(--color-grey-0);

  div {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    padding: 0 1rem;

    @media (min-width: 567px) {
      justify-content: space-between;
    }

    @media (min-width: 663px) {
      max-width: 85.625rem;
    }
  }
`;
