import styled from "styled-components";

export const CartCards = styled.ul`
  background-color: var(--color-grey-0);
  max-height: 20rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1.25rem 2rem;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;

  figure {
    background-color: var(--color-grey-20);
    width: 5rem;
    height: 5rem;
    border-radius: var(--radius-1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    img {
      width: 100%;
    }
  }

  div {
    flex-grow: 1;
    padding: 0.5rem 0;

    h3 {
      font-weight: 700;
      font-size: 0.875rem;
      color: var(--color-grey-100);
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 0.75rem;
      color: var(--color-grey-50);
    }
  }

  p {
    cursor: pointer;
    height: fit-content;
    color: var(--color-grey-50);
    transition: 0.2s ease-in-out;
    padding: 0.5rem 0;
    font-size: 0.75rem;

    :hover {
      color: var(--color-primary);
    }
  }
`;
