import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2.5em 1em;

  @media (max-width: 720px) {
    padding: 0;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 2em;
  justify-items: center;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
