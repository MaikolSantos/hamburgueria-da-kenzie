import styled from 'styled-components';

export const Contianer = styled.div`
  border-top: 2px solid var(--color-grey-20);
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom-left-radius: var(--radius-2);
  border-bottom-right-radius: var(--radius-2);
  
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    font-size: 0.875rem;
    font-weight: 700;

    p {
      color: var(--color-grey-100);
    }
    
    span {
      color: var(--color-grey-50);
    }
  }
`