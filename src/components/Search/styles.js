import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 10rem;
  margin-bottom: 1rem;
  padding: 0 1rem 1rem;
  width: 100%;
  margin: 10rem auto 0;

  @media (min-width: 567px) {
    margin-top: 7rem;
  }
  
  @media (min-width: 663px) {
    max-width: 85.625rem;
  }

  h2 {
    font-weight: 700;
    font-size: 1.625rem;
    color: var(--color-grey-100);

    span {
      color: var(--color-grey-50);
    }
  }
`;
