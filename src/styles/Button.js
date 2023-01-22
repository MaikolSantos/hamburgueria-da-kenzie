import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: transparent;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  padding: 0 1.25rem;
  border-radius: var(--radius-2);
  transition: 0.2s ease-in-out;
  height: ${({ height }) => (height === "medium" ? `2.5rem` : `3.75rem`)};
`;

export const ButtonPrimary = styled(Button)`
  background-color: var(--color-primary);
  color: var(--color-white);

  :hover {
    background-color: var(--color-primary-50);
  }
`;

export const ButtonGrey = styled(Button)`
  background-color: var(--color-grey-20);
  color: var(--color-grey-50);

  :hover {
    background-color: var(--color-grey-50);
    color: var(--color-grey-0);
  }
`;
