import styled from "styled-components";

export const Container = styled.aside`
  border-radius: var(--radius-1);
  width: 100%;
  
  @media (min-width: 663px) {
    max-width: 22.8125rem;
    align-self: flex-start;
  }
`;

export const Title = styled.div`
  background-color: var(--color-primary);
  border-top-left-radius: var(--radius-1);
  border-top-right-radius: var(--radius-1);

  h2 {
    padding: 1.25rem;
    text-align: center;
    color: var(--color-white);
  }
`;

export const Empty = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-height: 9.875rem;
  background-color: var(--color-grey-0);
  border-bottom-left-radius: var(--radius-2);
  border-bottom-right-radius: var(--radius-2);

  p {
    font-weight: 700;
    font-size: 1.125rem;
  }

  span {
    font-size: 0.875rem;
    color: var(--color-grey-50);
  }
`;
