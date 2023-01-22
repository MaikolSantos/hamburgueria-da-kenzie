import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  position: relative;
  
  @media (min-width: 567px) {
    max-width: 22.8125rem;
  }

  button {
    position: absolute;
    right: 0.9375rem;
    top: 0.625rem;
  }
`;

export const Input = styled.input`
  padding: 1.25rem 0.9375rem;
  width: 100%;
  border: 0.125rem solid transparent;
  outline: none;
  border-radius: var(--radius-2);

  :focus {
    border-color: var(--color-primary);
  }
`;
